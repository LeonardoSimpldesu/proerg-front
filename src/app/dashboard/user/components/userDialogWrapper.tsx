import { ReactNode, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { UserForm } from './userForm'
import { IUser } from '../page'

type DialogWrapperProps = {
  children: ReactNode
  dialogTitle: string
  dialogDescription: string
  userData?: IUser
}

export function UserDialogWrapper({
  children,
  dialogTitle,
  dialogDescription,
  userData,
}: DialogWrapperProps) {
  const [open, setOpen] = useState(false)

  const handleCloseDialog = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        onInteractOutside={(event) => {
          event.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <UserForm
          onCloseDialog={handleCloseDialog}
          email={userData?.email}
          userName={userData?.userName}
          role={userData?.role}
        />
      </DialogContent>
    </Dialog>
  )
}
