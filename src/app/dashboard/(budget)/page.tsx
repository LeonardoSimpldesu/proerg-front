import { DataTable } from '@/components/data-table'
import { columns } from './components/columns'

export type IBudget = {
  id: string
  budgetName: string
  status: 'APROVADO' | 'RECUSADO' | 'PENDENTE' | 'CONCLUIDO'
  client: string
  total: number
}

const budgets: IBudget[] = [
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Website Development',
    status: 'APROVADO',
    client: 'Tech Corp',
    total: 5000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Mobile App Development',
    status: 'PENDENTE',
    client: 'Mobile Innovations',
    total: 10000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'SEO Optimization',
    status: 'PENDENTE',
    client: 'Search Solutions',
    total: 1500,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Social Media Marketing',
    status: 'RECUSADO',
    client: 'Social Buzz',
    total: 2500,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Cloud Migration',
    status: 'CONCLUIDO',
    client: 'Cloud Masters',
    total: 8000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'IT Support',
    status: 'APROVADO',
    client: 'Support Gurus',
    total: 3000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'E-commerce Platform',
    status: 'PENDENTE',
    client: 'Shopify Experts',
    total: 12000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Data Analysis',
    status: 'PENDENTE',
    client: 'Data Insights',
    total: 4500,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Content Creation',
    status: 'RECUSADO',
    client: 'Creative Minds',
    total: 2000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Network Security',
    status: 'CONCLUIDO',
    client: 'Secure Networks',
    total: 6000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Custom Software Development',
    status: 'APROVADO',
    client: 'Custom Solutions',
    total: 15000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Digital Transformation',
    status: 'PENDENTE',
    client: 'Digital Dynamics',
    total: 9000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Blockchain Development',
    status: 'PENDENTE',
    client: 'Blockchain Innovators',
    total: 20000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'UI/UX Design',
    status: 'RECUSADO',
    client: 'Design Hub',
    total: 3500,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Cybersecurity Audit',
    status: 'CONCLUIDO',
    client: 'Security Check',
    total: 5000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Machine Learning Model',
    status: 'APROVADO',
    client: 'AI Pioneers',
    total: 18000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Virtual Reality App',
    status: 'PENDENTE',
    client: 'VR Visionaries',
    total: 22000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Business Intelligence',
    status: 'PENDENTE',
    client: 'BI Experts',
    total: 7500,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Database Management',
    status: 'RECUSADO',
    client: 'Data Keepers',
    total: 4000,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'DevOps Consulting',
    status: 'CONCLUIDO',
    client: 'DevOps Pros',
    total: 6500,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName:
      'Ap. 202 Nascer D Sol Nome da Empresa Titulo do Produto e mais exemplos',
    status: 'PENDENTE',
    client: 'Leonardo De Souza Almeida',
    total: 149.9,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Ap. 102 Miguel Dop into',
    status: 'APROVADO',
    client: 'Matheus Henrique',
    total: 149.9,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Condominio Meu Pau Na Sua Bunda',
    status: 'RECUSADO',
    client: 'Miguel bizzi',
    total: 149.9,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Pedrio que se foda',
    status: 'PENDENTE',
    client: 'Rondrigo Bolanhos',
    total: 149.9,
  },
  {
    id: Math.floor(Math.random() * 999999).toString(),
    budgetName: 'Condominio Grand Louvre',
    status: 'CONCLUIDO',
    client: 'Calos Halbert',
    total: 149.9,
  },
]

export default function Budgets() {
  return (
    <div className="px-16 py-8">
      <DataTable columns={columns} data={budgets} route="BUDGETS" />
    </div>
  )
}
