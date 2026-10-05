# SEO: publicação e acompanhamento

Os tratamentos têm conteúdo específico, H1 com serviço e cidade, metadados e canonical próprios. O rodapé e os cartões conectam as páginas. O estabelecimento está descrito em JSON-LD, sem horários ou avaliações inventados. As URLs de campanhas permanecem iguais.

Antes de publicar, a profissional deve revisar os textos de tratamentos e confirmar os dados do estabelecimento em `src/content.ts`. As páginas HiPRO e rejuvenescimento agora são permanentes, sem ofertas vencidas. Novas campanhas devem ter datas confirmadas.

Após publicar:

1. Verificar a propriedade do domínio no Google Search Console com o método disponível na conta. Não há código de verificação configurado porque ele depende dessa propriedade.
2. Enviar `https://dantibezerraestetica.com.br/sitemap.xml` e inspecionar a página inicial e as páginas de tratamentos para confirmar canonical, acesso e indexação.
3. Validar o JSON-LD no teste de resultados avançados do Google. Horários só devem ser adicionados quando confirmados e publicados também no conteúdo visível.
4. Medir as páginas no PageSpeed Insights em celular e acompanhar Core Web Vitals. Imagens usam Next Image, tamanhos responsivos e prioridade nos retratos de abertura; ainda não há medição de desempenho em produção.
5. Atualizar o Perfil da Empresa no Google com nome, telefone, endereço, serviços, horários reais e URL consistentes com o site. Solicitar avaliações reais de clientes, sem incentivos.
6. Acompanhar impressões, consultas, cliques e contatos orgânicos no Search Console e nas ferramentas de mensuração. Fazer melhorias com base nesses dados, sem expectativa de posição garantida.

O sitemap omite `lastModified` para não declarar atualizações que não ocorreram. Se o projeto passar a registrar datas reais por página, esse campo pode ser adicionado.

Referências: https://developers.google.com/search/docs/fundamentals/seo-starter-guide e https://support.google.com/business/answer/7091?hl=pt-BR.
