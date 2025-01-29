import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { BudgetResults, type TBudgetResults } from './budget-results'

type ConfirmDialogProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onConfirm: () => void
  data: TBudgetResults
}

export function ConfirmDialog({
  isOpen,
  setIsOpen,
  onConfirm,
  data,
}: ConfirmDialogProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmar orçamento?</AlertDialogTitle>
          <AlertDialogDescription>
            Verifique os valores antes de confirmar o orçamento
          </AlertDialogDescription>
        </AlertDialogHeader>
        <BudgetResults data={data} />
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              setIsOpen(false)
              onConfirm()
            }}
            className=""
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
