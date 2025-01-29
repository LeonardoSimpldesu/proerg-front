'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IUser } from '../page'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, X, Check, MoreHorizontal } from 'lucide-react'

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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { UserForm } from './userForm'

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: 'id',
    header: 'Identificador',
  },
  {
    accessorKey: 'userName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="p-0 hover:bg-transparent"
        >
          Usuário
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="w-[16rem] font-medium">{row.getValue('userName')}</div>
      )
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="p-0 hover:bg-transparent"
        >
          E-mail
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'role',
    header: 'Cargo',
    cell: ({ row }) => {
      const role = row.getValue('role')
      return role === 'ADMIN' ? 'Administrador' : 'Cliente'
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status')
      return status === 'ACTIVE' ? (
        <div className="flex w-20 items-center justify-center gap-2 rounded-lg bg-primary p-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="font-medium text-muted-foreground text-white">
            Ativo
          </span>
        </div>
      ) : (
        <div className="flex w-20 items-center justify-center gap-2 rounded-lg bg-red-600 p-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="font-medium text-muted-foreground text-white">
            Inativo
          </span>
        </div>
      )
    },
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) => {
      const status = row.original.status
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            {status === 'ACTIVE' ? (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground text-destructive"
                  >
                    <X className="mr-2 h-3 w-3" />
                    Desativar Usuário
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Tem certeza que deseja desativar o usuário?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta ação irá enviar um e-mail para o usuário informando
                      que seu acesso ao sistema foi removido.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Continuar</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground text-primary"
                  >
                    <Check className="mr-2 h-3 w-3" />
                    Ativar Usuário
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Tem certeza que deseja ativar este usuário?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta ação irá enviar um e-mail para o usuário informando
                      que seu acesso ao sistema foi reativado.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Continuar</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
            <DropdownMenuSeparator />
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Editar usuário
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Atualize os dados do usuário</DialogTitle>
                  <DialogDescription>
                    Faça as alterações do usuário e clique em salvar
                  </DialogDescription>
                </DialogHeader>
                <UserForm
                  userName={row.original.userName}
                  email={row.original.email}
                  role={row.original.role}
                />
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
