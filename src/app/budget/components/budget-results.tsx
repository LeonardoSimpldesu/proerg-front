import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export type TBudgetResults = {
  electricalProject: number
  telecomProject: number
  hydrosanitary: number
  materialList: number
  total: number
}

type BudgetResultsProps = {
  data: TBudgetResults
}

export function BudgetResults({ data }: BudgetResultsProps) {
  return (
    <div className="overflow-hidden rounded-b-lg rounded-t-md">
      <Table className="w-full border">
        <TableHeader className="border border-primary">
          <TableRow className="bg-primary hover:bg-primary">
            <TableHead colSpan={2} className="h-10 text-center text-white">
              Valor da proposta
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHead className="">Projeto elétrico</TableHead>
            <TableCell className=" text-right">
              {data.electricalProject.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Projeto telecom</TableHead>
            <TableCell className=" text-right">
              {data.telecomProject.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Hidrossanitário</TableHead>
            <TableCell className=" text-right">
              {data.hydrosanitary.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Lista de material</TableHead>
            <TableCell className=" text-right">
              {data.materialList.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TableCell>
          </TableRow>
          <TableRow className="border border-primary bg-primary text-white hover:bg-primary">
            <TableHead className="h-10 text-white">Total:</TableHead>
            <TableCell className="py-0 text-right">
              {data.total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
