'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  AlertCircle,
  ArrowLeft,
  Building,
  CalendarClock,
  Check,
  Dot,
  HandCoins,
  Mail,
  NotepadText,
  ScrollText,
} from 'lucide-react'
import { toast } from 'sonner'

import { SideNavigation } from './components/side-navigation'
import { BudgetForm, formSchema } from './components/budget-form'
import { BudgetResults } from './components/budget-results'
import { AutomationTable } from './components/automation-table'
import { LightingTable } from './components/lighting-table'

import { useRef, useState } from 'react'
import { z } from 'zod'
import Image from 'next/image'
import { FieldErrors } from 'react-hook-form'
import { HamburguerNavigation } from './components/hamburguer-navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useRouter } from 'next/navigation'
import { verifyFieldsErrors } from '@/lib/verifyFieldsErrors'

export default function BudgetPage() {
  const [currentPage, setCurrentPage] = useState(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [total, setTotal] = useState(0)
  const [errorDialog, setErrorDialog] = useState(false)
  const [errosList, setErrosList] = useState({
    originalProject: false,
    modifications: false,
    newAreas: false,
    management: false,
    hydrosanitaryInstallation: false,
  })
  const electricalProject = useRef(0)
  const hydrosanitary = useRef(0)
  const materialList = useRef(0)
  const telecomProject = useRef(0)
  const TOTAL_OF_PAGES = 8
  const router = useRouter()

  function navigationChangePage(reqPage: number) {
    setCurrentPage(reqPage)
  }

  const handlePlusClick = () => {
    if (TOTAL_OF_PAGES > currentPage) {
      setCurrentPage((prePage) => prePage + 1)
    }
  }

  const handleMinusClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prePage) => prePage - 1)
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  function onError(values: FieldErrors) {
    toast.error('Preencha todos os campos.')
    setErrorDialog(true)
    console.log(values)

    setErrosList(verifyFieldsErrors(values))
  }

  // values: z.infer<typeof formSchema>
  function handleResults() {
    electricalProject.current = Math.floor(Math.random() * 6) + 1
    hydrosanitary.current = Math.floor(Math.random() * 6) + 1
    materialList.current = Math.floor(Math.random() * 6) + 1
    telecomProject.current = Math.floor(Math.random() * 6) + 1
    setTotal(
      electricalProject.current +
        hydrosanitary.current +
        materialList.current +
        telecomProject.current,
    )
  }

  return (
    <div className="mx-auto flex min-h-screen w-[90vw] 2xl:w-[80vw] flex-col py-16">
      <div className="flex w-full justify-between">
        <AlertDialog>
          <AlertDialogTrigger>
            <ArrowLeft />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Deseja sair?</AlertDialogTitle>
              <AlertDialogDescription>
                Ao clicar em sair, voce perderá todos os dados preenchidos até o
                momento
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => router.push('/dashboard')}>
                Sair
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <HamburguerNavigation
          pageCurrent={currentPage}
          navigationChangePage={navigationChangePage}
          errors={errosList}
        />
      </div>
      <div className="mb-8 border-b border-slate-600 px-6 py-6">
        <h2 className="text-2xl font-bold">Novo orçamento</h2>
        <p className="font-medium opacity-70">
          Preencha os campos e veja os resultados gradativamente
        </p>
      </div>
      <div className="flex flex-col lg:grid grid-cols-12 flex-1 gap-8 ">
        <div className="hidden lg:block lg:col-span-3 2xl:col-span-2">
          <SideNavigation
            pageCurrent={currentPage}
            navigationChangePage={navigationChangePage}
            errors={errosList}
          />
        </div>
        <div className="col-span-6 xl:col-span-6 2xl:col-span-7 h-full justify-between">
          <div className={currentPage === 1 ? 'space-y-4' : 'hidden'}>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-fit rounded-xl bg-primary p-4">
                  <CalendarClock color="#fff" size={24} />
                </div>
                <p>
                  Essa planilha tem validade por 6 meses a partir da data de
                  emissão. Após este prazo solicitar o envio de uma nova
                  planilha através do e-mail: administrativo@proerg.com.br{' '}
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
                  O objetivo desta planilha é deixar de forma prática a
                  precificação de modificação de apartamentos, para que facilte
                  a construtora nas tomadas de decisões.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-fit rounded-xl bg-primary p-4">
                  <Mail color="#fff" size={24} />
                </div>
                <p>
                  Para validação da proposta é necessário enviar essa planilha
                  para que a Proerg confirme o valor no seguinte e-mail:
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
          </div>
          <div className={currentPage === 2 ? '' : 'hidden'}>
            <div className="mb-8 space-y-4">
              <Alert variant="avaliable" className="bg-primary/10">
                <Check className="h-4 w-4" />
                <AlertTitle>Considerar</AlertTitle>
                <AlertDescription>
                  <p>
                    <Dot className="inline-block" />
                    Áreas completas que foram modificadas o layout interno.
                    Marcação Azul claro
                  </p>
                </AlertDescription>
              </Alert>
              <Alert variant="destructive" className="bg-destructive/10">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Não Considerar</AlertTitle>
                <AlertDescription>
                  <p>
                    <Dot className="inline-block" />
                    Áreas molhadas como banheiro, lavabo, cozinha, área de
                    serviço, spa e etc. Marcações em azul.
                  </p>
                  <p>
                    <Dot className="inline-block" />
                    Área do condomínio como elevadores, caixa de escada e hall.
                    Marcações em vermelho
                  </p>
                </AlertDescription>
              </Alert>
            </div>
            <Image
              src={'/formImages/imageB.jpg'}
              alt=""
              width={800}
              height={800}
            />
            <Image
              src={'/formImages/imageA.jpg'}
              alt=""
              width={800}
              height={800}
            />
          </div>
          <BudgetForm
            onSubmit={onSubmit}
            onError={onError}
            currentPage={currentPage}
            handleMinusClick={handleMinusClick}
            handlePlusClick={handlePlusClick}
            handleResults={handleResults}
            navigationChangePage={navigationChangePage}
          />
        </div>
        <div className="col-span-3 xl:col-span-3 2xl:col-span-3">
          <BudgetResults
            electricalProject={electricalProject.current}
            hydrosanitary={hydrosanitary.current}
            materialList={materialList.current}
            telecomProject={telecomProject.current}
          />
          <div className="mt-6 flex flex-col gap-4">
            <AutomationTable />
            <LightingTable />
          </div>
        </div>
      </div>
      <AlertDialog open={errorDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Campos incorretos!</AlertDialogTitle>
            <AlertDialogDescription>
              Preencha todos os campos e verifique se seus valores estão
              corretos antes de enviar novamente
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setErrorDialog(false)
              }}
              className="bg-red-500 text-white"
            >
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
