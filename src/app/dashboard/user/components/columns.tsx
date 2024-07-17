'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IUser } from '../page'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, X, Check, MoreHorizontal } from 'lucide-react'

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
      return role === 'ADMIN' ? 'ADMIN' : 'CLIENTE'
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status')
      return status === 'ACTIVE' ? (
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="font-medium text-muted-foreground">Ativo</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-600" />
          <span className="font-medium text-muted-foreground">Desativado</span>
        </div>
      )
    },
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) => {
      const status = row.original.status
      const usuario = row.original
      // console.log(row.original)
      return (
        <Dialog>
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
                <DropdownMenuItem className="text-destructive">
                  <X className="mr-2 h-3 w-3" />
                  Desativar Usuário
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem className="text-primary">
                  <Check className="mr-2 h-3 w-3" />
                  Ativar Usuário
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(usuario.id)}
              >
                Copiar Identificador
              </DropdownMenuItem>
              <DialogTrigger asChild>
                <DropdownMenuItem>Editar usuário</DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Atualize os dados do usuário</DialogTitle>
              <DialogDescription>
                Faça as alterações do usuario e clique em salvar
              </DialogDescription>
            </DialogHeader>
            <UserForm
              userName={row.original.userName}
              email={row.original.email}
              role={row.original.role}
            />
          </DialogContent>
        </Dialog>
      )
    },
  },
]