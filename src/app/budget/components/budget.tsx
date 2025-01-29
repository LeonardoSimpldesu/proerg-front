'use client'

import { verifyFieldsErrors } from '@/lib/verifyFieldsErrors'
import { useReducer, useState } from 'react'
import { BudgetForm, formSchema } from './budget-form'
import { z } from 'zod'
import { FieldErrors } from 'react-hook-form'
import { toast } from 'sonner'
import { ErrorDialog } from './error-dialog'
import { AutomationTable } from './automation-table'
import { BudgetResults } from './budget-results'
import { HamburguerNavigation } from './hamburguer-navigation'
import { LightingTable } from './lighting-table'
import { Notes } from './notes'
import { Observations } from './observations'
import { SideNavigation } from './side-navigation'
import { ConfirmDialog } from './confirm-dialog'
import { DownloadPDFDialog } from './download-pdf-dialog'
import { GoBack } from './go-back'

type ResultState = {
  electricalProject: number
  hydrosanitary: number
  materialList: number
  telecomProject: number
  total: number
}

export function Budget() {
  const [currentPage, setCurrentPage] = useState(1)

  const [errorDialog, setErrorDialog] = useState(false)
  const [confirmDialog, setConfirmDialog] = useState(false)
  const [PDFDialog, setPDFDialog] = useState(true)

  const [errosList, setErrosList] = useState({
    originalProject: false,
    modifications: false,
    newAreas: false,
    management: false,
    hydrosanitaryInstallation: false,
  })

  const [result, dispatch] = useReducer(resultReducer, {
    electricalProject: 0,
    hydrosanitary: 0,
    materialList: 0,
    telecomProject: 0,
    total: 0,
  })
  const TOTAL_OF_PAGES = 8

  function resultReducer(
    result: ResultState,
    action: { type: string },
  ): ResultState {
    switch (action.type) {
      case 'changed': {
        result.electricalProject = Math.floor(Math.random() * 6) + 1
        result.hydrosanitary = Math.floor(Math.random() * 6) + 1
        result.materialList = Math.floor(Math.random() * 6) + 1
        result.telecomProject = Math.floor(Math.random() * 6) + 1
        result.total =
          result.electricalProject +
          result.hydrosanitary +
          result.materialList +
          result.telecomProject
        return {
          electricalProject: result.electricalProject,
          hydrosanitary: result.hydrosanitary,
          materialList: result.materialList,
          telecomProject: result.telecomProject,
          total: result.total,
        }
      }
      default: {
        throw new Error('Unknown action: ' + action.type)
      }
    }
  }

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
    setConfirmDialog(true)
    console.log(values)
  }

  function onError(values: FieldErrors) {
    toast.error('Preencha todos os campos.')
    setErrorDialog(true)
    console.log(values)

    setErrosList(verifyFieldsErrors(values))
  }

  function onConfirm() {
    toast.success('Orçamento criado com sucesso.')
    setPDFDialog(true)
  }

  // values: z.infer<typeof formSchema>
  function handleResults() {
    dispatch({
      type: 'changed',
    })
  }

  return (
    <>
      <div className="">
        <div className="flex w-full justify-between">
          <GoBack />
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
              <Notes />
            </div>
            <div className={currentPage === 2 ? '' : 'hidden'}>
              <Observations />
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
            <BudgetResults data={result} />
            <div className="mt-6 flex flex-col gap-4">
              <AutomationTable />
              <LightingTable />
            </div>
          </div>
        </div>
      </div>
      <ErrorDialog isOpen={errorDialog} setIsOpen={setErrorDialog} />
      <ConfirmDialog
        isOpen={confirmDialog}
        setIsOpen={setConfirmDialog}
        data={result}
        onConfirm={onConfirm}
      />
      <DownloadPDFDialog isOpen={PDFDialog} setIsOpen={setPDFDialog} />
    </>
  )
}
