import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Building, Calendar, User } from 'lucide-react'
import { BudgetApartment } from './budget-apartment'

export function BudgetData() {
  return (
    <Tabs defaultValue="informations" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="informations">
          Informações
        </TabsTrigger>
        <TabsTrigger className="w-full" value="resume">
          Resumo
        </TabsTrigger>
        <TabsTrigger className="w-full" value="apartment">
          Apartamento
        </TabsTrigger>
      </TabsList>
      <TabsContent value="resume">
        <Card>
          <CardHeader>
            <CardTitle>Resumo da proposta</CardTitle>
            <CardDescription>
              Verifique as informações principais da proposta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead colSpan={3} className="w-[100px]">
                    Projetos
                  </TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} className="font-medium">
                    Projeto elétrico
                  </TableCell>
                  <TableCell className="text-right">
                    {(12863.37).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className="font-medium">
                    Projeto Telecom
                  </TableCell>
                  <TableCell className="text-right">
                    {(674.94).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className="font-medium">
                    Projeto hidrossanitário
                  </TableCell>
                  <TableCell className="text-right">
                    {(21706.1).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className="font-medium">
                    Lista de material
                  </TableCell>
                  <TableCell className="text-right">
                    {(4583.94).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">
                    {(39828.35).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="informations">
        <Card>
          <CardHeader>
            <CardTitle>Informações da proposta</CardTitle>
            <CardDescription>
              Verifique os dados do contratante e da proposta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="">
              <p className="font-medium">Empreendimento:</p>
              <div className="flex gap-2 py-2 px-4 border rounded-lg w-full">
                <Building />
                <p>Apartamento Meu pau no seu cu</p>
              </div>
            </div>
            <div className="">
              <p className="font-medium">Elaborado por:</p>
              <div className="flex gap-2 py-2 px-4 border rounded-lg w-full">
                <User />
                <p>Usuário com nome muito merda</p>
              </div>
            </div>
            <div className="">
              <p className="font-medium">Data de Emissão:</p>
              <div className="flex gap-2 py-2 px-4 border rounded-lg w-full">
                <Calendar />
                <p>
                  {new Date().toLocaleDateString('pt-br', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex py-4 h-full w-full justify-between border-t bg-muted">
            <p className="font-bold">Valor total da proposta</p>
            <p>
              {(39828.35).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="apartment">
        <BudgetApartment />
      </TabsContent>
    </Tabs>
  )
}
