import {
  Building,
  CalendarClock,
  HandCoins,
  Mail,
  NotepadText,
  ScrollText,
} from 'lucide-react'

export function Notes() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-fit rounded-xl bg-primary p-4">
          <CalendarClock color="#fff" size={24} />
        </div>
        <p>
          Essa planilha tem validade por 6 meses a partir da data de emissão.
          Após este prazo solicitar o envio de uma nova planilha através do
          e-mail: administrativo@proerg.com.br{' '}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-fit rounded-xl bg-primary p-4">
          <Building color="#fff" size={24} />
        </div>
        <p>
          Essa planilha somente poderá ser aplicada para apartamentos de
          modificações que o projeto original foi elaborado pela Proerg.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-fit rounded-xl bg-primary p-4">
          <HandCoins color="#fff" size={24} />
        </div>
        <p>
          O objetivo desta planilha é deixar de forma prática a precificação de
          modificação de apartamentos, para que facilte a construtora nas
          tomadas de decisões.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-fit rounded-xl bg-primary p-4">
          <Mail color="#fff" size={24} />
        </div>
        <p>
          Para validação da proposta é necessário enviar essa planilha para que
          a Proerg confirme o valor no seguinte e-mail:
          administrativo@proerg.com.br
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-fit rounded-xl bg-primary p-4">
          <NotepadText color="#fff" size={24} />
        </div>
        <p>
          Para iniciar os projetos de instalações todas as informações e
          projetos complementares deverão estar completos.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-fit rounded-xl bg-primary p-4">
          <ScrollText color="#fff" size={24} />
        </div>
        <p>Não inclusas novas ARTs.</p>
      </div>
    </div>
  )
}
