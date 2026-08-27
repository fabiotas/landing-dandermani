# Danti Bezerra — Estética Avançada

Landing page em Next.js (App Router) com captura de leads e atribuição de origem
(UTMs, `gclid`, `gbraid`, `wbraid`) persistida em Postgres via Prisma.

## Como o tracking funciona

Toda a leitura de query parameters vive em `src/lib/tracking.ts`. Nenhum componente
lê a URL por conta própria.

1. `TrackingProvider` (em `src/app/layout.tsx`) chama `captureTracking()` uma vez,
   logo após a montagem, e disponibiliza o resultado por contexto.
2. Os valores ficam em `sessionStorage`, então sobrevivem à navegação entre as
   seções e etapas do formulário. **A primeira atribuição vence**: navegar depois
   para uma URL sem parâmetros não apaga a origem.
3. `LeadForm` lê o contexto com `useTracking()` e envia os valores no corpo do
   `POST /api/leads`. Eles não aparecem em nenhum campo visível nem em inputs
   escondidos no HTML.
4. `gclid`, `gbraid` e `wbraid` são apenas armazenados, para uma futura integração
   de conversões offline com o Google Ads. O Google usa `gbraid`/`wbraid` no lugar
   do `gclid` em parte das campanhas, por isso os três são capturados.

Campos gravados: `nome`, `telefone`, os seis parâmetros de UTM e cliques,
`landing_page` (pathname de entrada), `consentimento` e `converted_at`
(definido pelo servidor).

## Proteções da API

- O schema Zod usa `.strict()`: qualquer chave fora da lista permitida derruba a
  requisição, então o cliente não consegue gravar `id` nem `converted_at`.
- `converted_at` vem do `@default(now())` do banco, nunca do cliente.
- Rate limit em duas camadas: por IP (5 a cada 10 min) e um teto global de 60 a
  cada 10 min. O limite por IP depende de `TRUST_PROXY=true` **e** de um proxy que
  sobrescreva `X-Forwarded-For`; o teto global é o que segura quem forja o
  cabeçalho. Ambos são em memória, então reiniciam com o processo e não valem para
  múltiplas instâncias.
- Honeypot invisível (campo `empresa`) recusa envios automatizados.
- `consentimento` precisa chegar como `true`, e fica gravado como evidência LGPD.

## Configuração

O banco fica na VPS e é acessado por túnel SSH, sem abrir porta no firewall.

```bash
cp .env.example .env   # preencha usuário, senha e nome do banco
```

Deixe o túnel aberto em um terminal separado:

```bash
ssh -L 172.17.0.1:5432:localhost:5432 usuario@sua-vps -N
```

O endereço de bind importa. Sem ele, o SSH escuta só em `127.0.0.1`, e o container
— que alcança o host pelo gateway da bridge do Docker — não consegue conectar,
resultando em `P1001: Can't reach database server`. Confirme com
`ss -ltnp | grep 5432` que o túnel está em `172.17.0.1:5432`; se o gateway da sua
instalação for outro, use `docker network inspect bridge` para descobrir.

Rodando o Next fora do Docker, o túnel padrão em `127.0.0.1` basta e o
`DATABASE_URL` usa `localhost`.

Com o túnel de pé, aplique as migrações:

```bash
docker compose run --rm web sh -c "npm install && npx prisma migrate dev --name init"
```

O `npm install` é necessário porque `docker compose run` substitui o `CMD` do
container, que é onde a instalação normalmente acontece. Sem ele o volume
`node_modules` fica vazio e o `npx` baixa a versão mais recente do Prisma do
registry em vez de usar a do projeto — o que causa erro de comando desconhecido.

A identificação profissional (`PROFESSIONAL`), o WhatsApp (`WHATSAPP_NUMBER`) e o
canal de contato para titulares (`LEGAL.email`) ficam em `src/content.ts`.

A política de privacidade em `/privacidade` é exigida pela LGPD e pela política de
páginas de destino do Google Ads. Ela não publica CPF nem endereço residencial da
profissional: se algum requisito futuro exigir esses dados, avalie caso a caso em
vez de adicioná-los por padrão.

## Rodando

```bash
docker compose up web          # http://localhost:3000
```

Se o container já existia do setup anterior (Vite), recrie o volume de dependências:

```bash
docker compose down -v && docker compose up web --build
```

## Testando a atribuição localmente

Acesse a landing com os parâmetros de campanha:

```
http://localhost:3000/linhas-de-expressao?utm_source=google&utm_medium=cpc&utm_campaign=linhas_expressao&utm_term=linhas+de+expressao&utm_content=anuncio_a&gclid=TESTE123
```

Preencha nome e WhatsApp na seção **Reserve sua avaliação**, marque o
consentimento e envie. O redirecionamento para o WhatsApp só acontece depois que
o lead é gravado.

Para conferir no banco:

```bash
docker compose run --rm -p 5555:5555 web \
  npx prisma studio --port 5555 --hostname 0.0.0.0 --browser none
```

Depois abra http://localhost:5555. O `--hostname 0.0.0.0` é necessário porque, sem
ele, o Studio escuta apenas dentro do container.

Ou direto no SQL, com o túnel aberto:

```sql
SELECT nome, telefone, utm_source, utm_medium, utm_campaign,
       utm_term, utm_content, gclid, gbraid, wbraid,
       landing_page, consentimento, converted_at
FROM leads
ORDER BY converted_at DESC
LIMIT 5;
```

Para confirmar que a origem sobrevive à navegação, entre pela URL com parâmetros,
navegue por âncoras (`#tratamentos`, `#sobre`) e só então envie o formulário — os
valores continuam preenchidos no lead.

## URLs de campanha

O slug de cada entrada em `TREATMENTS` (`src/content.ts`) define as URLs válidas:
`/linhas-de-expressao`, `/preenchimento`, `/hifu` e `/fios-de-pdo`. Todas entregam
a mesma landing, mas cada uma usa `headline` e `supporting` próprios no topo, no
`<title>` e no Open Graph — é o que dá relevância entre anúncio e página de
destino. Slugs desconhecidos retornam 404.

O slug é também o valor gravado em `landing_page`.

## Posicionamento da comunicação

A comunicação é centrada no serviço profissional e na necessidade estética
("tratamento para linhas de expressão", "avaliação estética facial"), sem citar
medicamento ou marca comercial e sem promessa de resultado ou de duração. Ao
editar textos em `src/content.ts`, mantenha esse critério: nome de medicamento na
comunicação promocional leva à reprovação do anúncio pela política de saúde do
Google Ads, e promessa de resultado é vedada na publicidade profissional.

A identificação profissional (nome, título e registro no COREN-SP) vive em
`PROFESSIONAL`, em `src/content.ts`, e é exibida na seção "Sobre a profissional"
e de forma discreta no rodapé. Nenhum título deve sugerir formação médica.

## Conversão do Google Ads (pendente)

Não existe GTM, GA4 nem Google Ads Conversion Tracking no projeto. Quando os IDs
existirem, os pontos de inserção são exatamente dois:

- `src/app/layout.tsx` — script da tag, via `next/script` com
  `strategy="afterInteractive"`. Há um comentário marcando o local.
- `src/components/LeadForm.tsx` — disparo do evento `lead_submitted`, no ponto
  marcado por comentário, **depois** da resposta de sucesso da API e antes do
  redirecionamento. Não usar o clique do botão como conversão: ele não prova que
  o lead foi persistido.

`gclid`, `gbraid` e `wbraid` já ficam gravados junto ao lead, o que permite
correlacionar clique → lead → atendimento numa integração de conversões offline
futura.

## Produção

A aplicação roda sem porta publicada, atrás de um nginx que termina o TLS. Emita
o certificado antes da primeira subida:

```bash
mkdir -p nginx/certs nginx/certbot
# ajuste SEU_DOMINIO em nginx/app.conf
docker run --rm -p 80:80 \
  -v "$PWD/nginx/certs:/etc/letsencrypt" \
  certbot/certbot certonly --standalone -d seu-dominio.com.br
```

Depois:

```bash
docker compose --profile prod up --build   # https://seu-dominio.com.br
docker compose run --rm web-prod npx prisma migrate deploy
```

O `X-Forwarded-For` é sobrescrito pelo nginx (`proxy_set_header X-Forwarded-For
$remote_addr`), e só por isso o `TRUST_PROXY=true` do perfil de produção é
seguro. Se você publicar a porta 3000 do `web-prod` diretamente, essa garantia
se perde e o rate limit por IP volta a ser burlável.
