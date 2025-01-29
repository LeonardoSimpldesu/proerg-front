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

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function GoBack() {
  const router = useRouter()

  return (
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
  )
}
