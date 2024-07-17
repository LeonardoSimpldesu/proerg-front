'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useState } from 'react'

const projectSubjects = [
  {
    question: 'Projeto Elétrico',
  },
  {
    question: 'Projeto Telecom',
  },
  {
    question: 'Projeto Hidrossanitário',
  },
  {
    question: 'Lista de Material',
  },
]

const projectDescription = [
  {
    question: 'Área total do Apartamento em metros²:',
  },
  {
    question: 'Quantidade de Lavabos:',
  },
  {
    question: 'Quantidade de Banho com Banheira:',
  },
  {
    question: 'Quantidade de Banho:',
  },
  {
    question: 'Quantidade de Cozinha:',
  },
  {
    question: 'Quantidade Área de Serviço:',
  },
  {
    question: 'Quantidade Área Gourmet:',
  },
  {
    question: 'Quantidade de SPA:',
  },
]

const architectureModification = [
  {
    question:
      'É um apartamento aonde tem transição de instalações hidráulicas?',
  },
  {
    question: 'É um apartamento de Cobertura? (Duplex)',
  },
  {
    question: 'O projeto original foi feito em RVT?',
  },
  {
    question: 'Área total dos ambientes modificados: ',
  },
  {
    question: 'Quantidade lavabos alteração layout:',
  },
  {
    question: 'Quantidade banho c/Banheira alteração layout:',
  },
  {
    question: 'Quantidade banho alteração layout:',
  },
  {
    question: 'Quantidade cozinha alteração layout:',
  },
  {
    question: 'Quantidade A. Serviço alteração layout:',
  },
  {
    question: 'Quantidade A. Goumert alteração layout:',
  },
  {
    question: 'Quantidade SPA Mudança de posição:',
  },
]

const budgetNewAreas = [
  {
    question: 'Quantidade Lavabos:',
  },
  {
    question: 'Quantidade Banhos:',
  },
  {
    question: 'Quantidade Quartos:',
  },
  {
    question: 'Quantidade SPA:',
  },
  {
    question: 'Quantidade Áreas com instalações hidráulicas:',
  },
]

const budgetManagement = [
  {
    question: 'O projeto de automação e luminoténico estarão compatibilizados?',
  },
  {
    question: 'Terá uma lista de equipamentos elétricos específicos?',
  },
  {
    question: 'A lista tem informações técnicas como potência e tensão?',
  },
  {
    question: 'Haverá projeto Marcenaria da cozinha?',
  },
  {
    question:
      'Haverá detalhamento das áreas molhadas fornecido pela arquitetura?(Ex: vistas de parede com alturas de pontos definidas):',
  },
  {
    question:
      'Haverá necessidade de atualização de arquitetura durante a execução dos projetos? Caso positivo, quantas atualizações?',
  },
  {
    question: 'Quantidade de reuniões necessárias?',
  },
  {
    question: 'Quantidade de análises do Cliente (Final ou construtora):',
  },
  {
    question: 'Haverá projeto de automação?',
  },
  {
    question: 'Haverá projeto Luminotécnico?',
  },
]

const budgetHydrosanitaryInstallation = [
  {
    question: 'Teve alteração no projeto de ar condicionado?',
  },
  {
    question:
      'Haverá louças e equipamentos com vazões diferentes da norma?ou com diâmetro, e posição dos pontos AF e AQ diferente do original?',
  },
  {
    question:
      'Será necessário indicação de todas as peças nos detalhes de esgoto?',
  },
  {
    question:
      'Quantidade de Banhos/ Lavabos que mudaram somente a posição do lavatório?',
  },
  {
    question: 'Qual o material da água do projeto original?',
  },
]

export function BudgetApartment() {
  const [selectedCategory, setCategory] = useState('subjectsToBeTaken')
  let category

  switch (selectedCategory) {
    case 'descriptionOfTheOriginalProjectToBeModified':
      category = projectDescription
      break
    case 'architectureModificationDescription':
      category = architectureModification
      break
    case 'additionOfNewAreas':
      category = budgetNewAreas
      break
    case 'descriptionOfManagement':
      category = budgetManagement
      break
    case 'premisesHydrosanitaryInstallations':
      category = budgetHydrosanitaryInstallation
      break

    default:
      category = projectSubjects
      break
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dados do apartamento</CardTitle>
        <CardDescription>
          Verifique os dados do apartamento e da proposta
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select defaultValue="subjectsToBeTaken" onValueChange={setCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="subjectsToBeTaken">
              Disciplinas a serem contratadas
            </SelectItem>
            <SelectItem value="descriptionOfTheOriginalProjectToBeModified">
              Descrição do projeto original a ser modificado
            </SelectItem>
            <SelectItem value="architectureModificationDescription">
              Descrição de modificação da arquitetura
            </SelectItem>
            <SelectItem value="additionOfNewAreas">
              Acréscimo de áreas novas
            </SelectItem>
            <SelectItem value="descriptionOfManagement">
              Descrição da gestão
            </SelectItem>
            <SelectItem value="premisesHydrosanitaryInstallations">
              Premissas instalações hidrossanitárias
            </SelectItem>
          </SelectContent>
        </Select>
        <Table className="block max-h-[500px] overflow-y-scroll custom-scroll">
          <TableHeader className="sticky top-0 bg-white">
            <TableRow>
              <TableHead className="w-full">Questão</TableHead>
              <TableHead className="text-right">Resposta</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {category.map(({ question }, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium w-full">{question}</TableCell>
                <TableCell className="text-center">SIM</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
