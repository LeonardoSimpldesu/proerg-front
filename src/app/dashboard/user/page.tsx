import { DataTable } from '@/components/data-table'
import { columns } from './components/columns'

export type IUser = {
  id: string
  userName: string
  email: string
  role: 'CLIENT' | 'ADMIN'
  status: 'ACTIVE' | 'DEACTIVATE'
}

const users: IUser[] = [
  {
    id: '123124',
    userName: 'Leonardo De Souza Almeida',
    email: 'leonardo@gmail.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
  {
    id: '142123123',
    userName: 'Matheus',
    email: 'leonardo@gmail.com',
    role: 'ADMIN',
    status: 'DEACTIVATE',
  },
  {
    id: '132154648',
    userName: 'Alice FOdas o reseto',
    email: 'alice@gmail.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
  {
    id: '1',
    userName: 'jdoe',
    email: 'jdoe@example.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
  {
    id: '2',
    userName: 'asmith',
    email: 'asmith@example.com',
    role: 'ADMIN',
    status: 'ACTIVE',
  },
  {
    id: '3',
    userName: 'bwilson',
    email: 'bwilson@example.com',
    role: 'CLIENT',
    status: 'DEACTIVATE',
  },
  {
    id: '4',
    userName: 'cmartin',
    email: 'cmartin@example.com',
    role: 'ADMIN',
    status: 'ACTIVE',
  },
  {
    id: '5',
    userName: 'dlee',
    email: 'dlee@example.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
  {
    id: '6',
    userName: 'ewhite',
    email: 'ewhite@example.com',
    role: 'CLIENT',
    status: 'DEACTIVATE',
  },
  {
    id: '7',
    userName: 'fthomas',
    email: 'fthomas@example.com',
    role: 'ADMIN',
    status: 'ACTIVE',
  },
  {
    id: '8',
    userName: 'gjackson',
    email: 'gjackson@example.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
  {
    id: '9',
    userName: 'hwalker',
    email: 'hwalker@example.com',
    role: 'ADMIN',
    status: 'DEACTIVATE',
  },
  {
    id: '10',
    userName: 'iking',
    email: 'iking@example.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
  {
    id: '11',
    userName: 'jmorgan',
    email: 'jmorgan@example.com',
    role: 'CLIENT',
    status: 'DEACTIVATE',
  },
  {
    id: '12',
    userName: 'kclark',
    email: 'kclark@example.com',
    role: 'ADMIN',
    status: 'ACTIVE',
  },
  {
    id: '13',
    userName: 'llopez',
    email: 'llopez@example.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
  {
    id: '14',
    userName: 'mperez',
    email: 'mperez@example.com',
    role: 'ADMIN',
    status: 'DEACTIVATE',
  },
  {
    id: '15',
    userName: 'nroberts',
    email: 'nroberts@example.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
  {
    id: '16',
    userName: 'owilson',
    email: 'owilson@example.com',
    role: 'CLIENT',
    status: 'DEACTIVATE',
  },
  {
    id: '17',
    userName: 'pphillips',
    email: 'pphillips@example.com',
    role: 'ADMIN',
    status: 'ACTIVE',
  },
  {
    id: '18',
    userName: 'qallen',
    email: 'qallen@example.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
  {
    id: '19',
    userName: 'rhernandez',
    email: 'rhernandez@example.com',
    role: 'ADMIN',
    status: 'DEACTIVATE',
  },
  {
    id: '20',
    userName: 'sjackson',
    email: 'sjackson@example.com',
    role: 'CLIENT',
    status: 'ACTIVE',
  },
]

export default function User() {
  return (
    <div className="px-16 py-2">
      <DataTable columns={columns} data={users} route="USERS" />
    </div>
  )
}
