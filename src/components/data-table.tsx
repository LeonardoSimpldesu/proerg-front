'use client'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { File, Plus } from 'lucide-react'
import { UserForm } from '@/app/dashboard/user/components/userForm'
import Link from 'next/link'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  route: 'USERS' | 'BUDGETS'
}

export function DataTable<TData, TValue>({
  columns,
  data,
  route,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="">
      {route === 'USERS' ? (
        <div className="flex items-center gap-6 py-4 flex-col w-full lg:flex-row">
          <Input
            placeholder="Filtre por nome..."
            value={
              (table.getColumn('userName')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('userName')?.setFilterValue(event.target.value)
            }
            className="w-full lg:max-w-xs"
          />
          <Input
            placeholder="Filtre por email..."
            value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('email')?.setFilterValue(event.target.value)
            }
            className="w-full lg:max-w-xs"
          />
          <Select
            onValueChange={(event) =>
              event === ' '
                ? table.getColumn('role')?.setFilterValue('')
                : table.getColumn('role')?.setFilterValue(event)
            }
          >
            <SelectTrigger className="w-full lg:max-w-xs">
              <SelectValue placeholder="Cargo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=" ">Todos</SelectItem>
              <SelectItem value="CLIENT">Cliente</SelectItem>
              <SelectItem value="ADMIN">Administrador</SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(event) =>
              event === ' '
                ? table.getColumn('status')?.setFilterValue('')
                : table.getColumn('status')?.setFilterValue(event)
            }
          >
            <SelectTrigger className="w-full lg:max-w-xs">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=" ">Todos</SelectItem>
              <SelectItem value="ACTIVE">Ativo</SelectItem>
              <SelectItem value="DEACTIVATE">Desativado</SelectItem>
            </SelectContent>
          </Select>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="ml-auto gap-2 w-fit">
                <Plus size={18} />
                Novo Usuário
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cadastre um novo usuário</DialogTitle>
                <DialogDescription>
                  Adicione as informações necessárias do usuário e clique em
                  salvar
                </DialogDescription>
              </DialogHeader>
              <UserForm />
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div className="flex items-center gap-6 py-4 flex-col w-full lg:flex-row">
          <Input
            placeholder="Filtre por nome..."
            value={
              (table.getColumn('budgetName')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('budgetName')?.setFilterValue(event.target.value)
            }
            className="w-full lg:max-w-xs"
          />
          <Input
            placeholder="Filtre por cliente..."
            value={
              (table.getColumn('client')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('client')?.setFilterValue(event.target.value)
            }
            className="w-full lg:max-w-xs"
          />
          <Select
            onValueChange={(event) =>
              event === ' '
                ? table.getColumn('status')?.setFilterValue('')
                : table.getColumn('status')?.setFilterValue(event)
            }
          >
            <SelectTrigger className="w-full lg:max-w-xs">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=" ">Todos os status</SelectItem>
              <SelectItem value="APROVADO">Aprovado</SelectItem>
              <SelectItem value="RECUSADO">Recusado</SelectItem>
              <SelectItem value="PENDENTE">Pendente</SelectItem>
              <SelectItem value="CONCLUIDO">Concluido</SelectItem>
            </SelectContent>
          </Select>

          <Button className="ml-auto gap-2 w-full xl:w-fit" asChild>
            <Link href={'/budget'}>
              <File size={18} />
              Nova Proposta
            </Link>
          </Button>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Sem resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center">
        <div className="text-sm text-muted-foreground">
          Total de {Math.round(data.length / 10)} páginas
        </div>
        <div className="text-sm text-muted-foreground ml-5">
          Total de {data.length} items
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}
