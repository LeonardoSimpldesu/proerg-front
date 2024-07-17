import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Lightbulb } from 'lucide-react'

export function LightingTable() {
  return (
    <Dialog>
      <DialogTrigger className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 py-2 font-semibold text-white">
        <Lightbulb size={18} />
        Nível do luminotécnico
      </DialogTrigger>
      <DialogContent className="w-full md:min-w-fit">
        <DialogHeader>
          <DialogTitle>Tabela de nivéis do Luminotécnico</DialogTitle>
        </DialogHeader>
        <div className="overflow-hidden rounded-b-lg rounded-t-lg shadow-lg">
          <Table className="table-auto">
            <TableHeader className="border-primary bg-primary">
              <TableRow className="hover:bg-primary/50">
                <TableHead
                  rowSpan={2}
                  className="w-fit border text-center text-white"
                >
                  LUMINOTÉCNICO
                </TableHead>
                <TableHead colSpan={4} className="text-center text-white">
                  CONTEMPLA
                </TableHead>
              </TableRow>
              <TableRow className="hover:bg-primary/50">
                <TableHead className="text-center text-white">A</TableHead>
                <TableHead className="text-center text-white">B</TableHead>
                <TableHead className="text-center text-white">C</TableHead>
                <TableHead className="text-center text-white">D</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border">
              <TableRow>
                <TableCell className="text-center font-medium">
                  NÍVEL 1
                </TableCell>
                <TableCell className="text-center font-medium">
                  Poucos cômodos
                </TableCell>
                <TableCell className="text-center font-medium">
                  Poucas seções de acionamentos
                </TableCell>
                <TableCell className="text-center font-medium"></TableCell>
                <TableCell className="text-center font-medium"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center font-medium">
                  NÍVEL 2
                </TableCell>
                <TableCell className="text-center font-medium">
                  Em toda a unidade
                </TableCell>
                <TableCell className="text-center font-medium">
                  Com um número de acendimentos mediano
                </TableCell>
                <TableCell className="text-center font-medium"></TableCell>
                <TableCell className="text-center font-medium"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center font-medium">
                  NÍVEL 3
                </TableCell>
                <TableCell className="text-center font-medium">
                  Com muitas seções de acionamentos
                </TableCell>
                <TableCell className="text-center font-medium">
                  Automatizado
                </TableCell>
                <TableCell className="text-center font-medium"></TableCell>
                <TableCell className="text-center font-medium"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}
