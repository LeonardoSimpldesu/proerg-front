'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, Check, MoreHorizontal, X } from 'lucide-react'

import { IBudget } from '../page'
import { BudgetStatusLabel } from './budget-status-label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenu,
} from '@/components/ui/dropdown-menu'
import { BudgetData } from './budget-data'
export const columns: ColumnDef<IBudget>[] = [
  {
    accessorKey: 'id',
    header: 'Identificador',
  },
  {
    accessorKey: 'budgetName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="p-0 hover:bg-transparent"
        >
          Nome da Proposta
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="w-[16rem]">{row.getValue('budgetName')}</div>
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status: 'APROVADO' | 'RECUSADO' | 'PENDENTE' | 'CONCLUIDO' =
        row.getValue('status')

      return <BudgetStatusLabel status={status} />
    },
  },
  {
    accessorKey: 'client',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="p-0 hover:bg-transparent"
        >
          Cliente
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'total',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="p-0 hover:bg-transparent"
        >
          Total
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const total = parseFloat(row.getValue('total'))
      const formatted = total.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })
      return <div className="">{formatted}</div>
    },
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) => {
      const status = row.original.status
      const usuario = row.original
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
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Verificar Proposta
                </DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuSeparator />
              {status === 'APROVADO' ? (
                <DropdownMenuItem className="text-primary">
                  <Check className="mr-2 h-3 w-3" />
                  Concluir Proposta
                </DropdownMenuItem>
              ) : status === 'PENDENTE' ? (
                <>
                  <DropdownMenuItem className="text-primary">
                    <Check className="mr-2 h-3 w-3" />
                    Aceitar Proposta
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <X className="mr-2 h-3 w-3" />
                    Recusar Proposta
                  </DropdownMenuItem>
                </>
              ) : (
                <></>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(usuario.id)}
              >
                Baixar PDF
              </DropdownMenuItem>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dados da proposta</DialogTitle>
                  <DialogDescription>
                    Verifique os dados da proposta
                  </DialogDescription>
                </DialogHeader>
                <BudgetData />
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
