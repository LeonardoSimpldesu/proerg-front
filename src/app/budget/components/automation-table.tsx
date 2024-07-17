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
import { Settings } from 'lucide-react'

export function AutomationTable() {
  return (
    <Dialog>
      <DialogTrigger className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 py-2 font-semibold text-white">
        <Settings size={18} />
        Nível de automação
      </DialogTrigger>
      <DialogContent className="min-w-fit max-w-[80vw]">
        <DialogHeader>
          <DialogTitle>Tabela de nivéis da Automação</DialogTitle>
        </DialogHeader>
        <div className="overflow-hidden rounded-b-lg rounded-t-lg">
          <Table className="table-auto">
            <TableHeader className="border-primary bg-primary ">
              <TableRow className="hover:bg-primary/50">
                <TableHead
                  rowSpan={2}
                  className="w-fit border text-center text-white"
                >
                  AUTOMAÇÃO
                </TableHead>
                <TableHead colSpan={4} className="text-center text-white">
                  CONTEMPLA
                </TableHead>
              </TableRow>
              <TableRow className="hover:bg-primary/50">
                <TableHead className="w-max text-center text-white">
                  A
                </TableHead>
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
                  Iluminação sala e jantar
                </TableCell>
                <TableCell className="text-center font-medium"></TableCell>
                <TableCell className="text-center font-medium">
                  Sonorização
                </TableCell>
                <TableCell className="text-center font-medium"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center font-medium">
                  NÍVEL 2
                </TableCell>
                <TableCell className="text-center font-medium">
                  Iluminação sala e jantar
                </TableCell>
                <TableCell className="text-center font-medium">
                  Iluminação área social e circulações
                </TableCell>
                <TableCell className="text-center font-medium">
                  Sonorização
                </TableCell>
                <TableCell className="text-center font-medium">
                  Comando de cortidas e persianas
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center font-medium">
                  NÍVEL 3
                </TableCell>
                <TableCell className="text-center font-medium">
                  Iluminação completa
                </TableCell>
                <TableCell className="text-center font-medium"></TableCell>
                <TableCell className="text-center font-medium">
                  Sonorização
                </TableCell>
                <TableCell className="text-center font-medium">
                  Comando de cortidas e persianas
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}
