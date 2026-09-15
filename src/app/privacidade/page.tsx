import type { Metadata } from 'next'
import Link from 'next/link'
import { LEGAL, PROFESSIONAL, SITE } from '../../content'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: `Política de Privacidade | ${SITE.brand}`,
  description:
    'Como tratamos os dados enviados pelo formulário de agendamento, conforme a LGPD.',
  robots: { index: false, follow: true },
}

export default function Privacidade() {
  return (
    <main className={styles.page}>
      <article className={styles.content}>
        <Link className={styles.back} href="/">
          ← Voltar
        </Link>

        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.updated}>Última atualização: {LEGAL.updatedAt}</p>

        <h2>Quem trata seus dados</h2>
        <p>
          O responsável pelo tratamento dos dados é {LEGAL.controller},{' '}
          {PROFESSIONAL.title}, {PROFESSIONAL.registration}, com atendimento em{' '}
          {SITE.city}.
        </p>

        <h2>Canal de contato</h2>
        <p>
          Para qualquer solicitação sobre seus dados — acesso, correção,
          exclusão ou revogação do consentimento — escreva para{' '}
          {LEGAL.email}. Responderemos dentro do prazo previsto na LGPD.
        </p>

        <h2>Quais dados coletamos</h2>
        <p>
          No formulário de agendamento coletamos <strong>nome</strong>,{' '}
          <strong>telefone</strong> e, quando informado, a resposta sobre{' '}
          <strong>experiência prévia com procedimentos estéticos</strong> (por
          exemplo, se nunca fez ou se já realiza com alguma frequência). Não
          solicitamos nem armazenamos histórico clínico detalhado, documentos,
          endereço ou informações de pagamento.
        </p>
        <p>
          Registramos também a origem da sua visita: os parâmetros de campanha
          presentes na URL (<code>utm_source</code>, <code>utm_medium</code>,{' '}
          <code>utm_campaign</code>, <code>utm_term</code>,{' '}
          <code>utm_content</code>, <code>gclid</code>, <code>gbraid</code> e{' '}
          <code>wbraid</code>), a página de entrada e a data e hora do envio.
        </p>

        <h2>Para que usamos</h2>
        <p>
          Nome, telefone e a resposta sobre experiência estética são usados
          exclusivamente para entrar em contato sobre o seu agendamento e
          conduzir o atendimento com mais contexto. Os parâmetros de campanha
          são usados para atribuição e mensuração, ou seja, para sabermos qual
          anúncio ou canal originou o contato e avaliarmos o resultado da
          divulgação. Eles não são usados para traçar perfil de comportamento
          nem para identificar você individualmente.
        </p>

        <h2>Base legal e consentimento</h2>
        <p>
          O tratamento de nome, telefone e da resposta sobre experiência
          estética ocorre com base no seu <strong>consentimento</strong>,
          coletado por marcação expressa no formulário e registrado junto ao
          seu contato como evidência, com data e hora. A mensuração das
          campanhas se apoia no legítimo interesse. Você pode revogar o
          consentimento a qualquer momento pelo canal de contato acima, sem
          prejuízo do atendimento já realizado.
        </p>

        <h2>Com quem compartilhamos</h2>
        <p>
          Não vendemos nem cedemos seus dados. O contato acontece pelo WhatsApp,
          então a conversa passa a ser regida também pela política de
          privacidade daquele serviço. Os registros ficam armazenados em
          servidor próprio, com acesso restrito.
        </p>

        <h2>Por quanto tempo guardamos</h2>
        <p>
          Mantemos os registros por {LEGAL.retention} a partir do contato, salvo
          se você solicitar a exclusão antes desse prazo ou se houver obrigação
          legal de retenção.
        </p>

        <h2>Armazenamento no seu navegador</h2>
        <p>
          Guardamos os parâmetros de campanha na sessão do navegador
          (<code>sessionStorage</code>) para que a origem do seu acesso não se
          perca enquanto você navega pela página. Esse dado é apagado ao fechar
          a aba e não contém informação pessoal.
        </p>

        <h2>Seus direitos</h2>
        <p>
          A LGPD garante que você possa confirmar a existência de tratamento,
          acessar, corrigir, anonimizar, portar ou excluir seus dados, além de
          revogar o consentimento e obter informação sobre compartilhamento.
          Para exercer qualquer um desses direitos, use o canal de contato
          indicado acima.
        </p>
      </article>
    </main>
  )
}
