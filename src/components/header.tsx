'use client'

import {
  Building,
  NotepadText,
  Users,
  ChevronDown,
  LogOut,
  User,
} from 'lucide-react'
import { Separator } from './ui/separator'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twJoin } from 'tailwind-merge'
import { toast } from 'sonner'

export function Header() {
  const pathname = usePathname()
  return (
    <div className="border-b w-full">
      <div className="flex h-16 items-center gap-6 px-6">
        <Building className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link
            href="/dashboard"
            className={twJoin(
              'flex items-center gap-1.5 text-sm font-medium hover:text-foreground',
              pathname === '/dashboard'
                ? 'text-foreground'
                : 'text-muted-foreground',
            )}
          >
            <NotepadText className="h-4 w-4" />
            Propostas
          </Link>
          <Link
            href="/dashboard/user"
            className={twJoin(
              'flex items-center gap-1.5 text-sm font-medium hover:text-foreground',
              pathname === '/dashboard/user'
                ? 'text-foreground'
                : 'text-muted-foreground',
            )}
          >
            <Users className="h-4 w-4" />
            Usuários
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex select-none items-center gap-2"
              >
                <User />
                <span>Leonardo de Souza</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span>Leonardo de Souza</span>
                <span className="text-xs font-normal text-muted-foreground">
                  LeonardodeSouza@email.com
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-rose-500 dark:text-rose-400"
                onClick={() => toast.success('Desconectado com sucesso')}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
