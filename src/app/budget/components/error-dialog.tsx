import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

type ErrorDialogProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function ErrorDialog({ isOpen, setIsOpen }: ErrorDialogProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Campos incorretos!</AlertDialogTitle>
          <AlertDialogDescription>
            Preencha todos os campos e verifique se seus valores estão corretos
            antes de enviar novamente
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              setIsOpen(false)
            }}
            className="bg-red-500 text-white"
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
