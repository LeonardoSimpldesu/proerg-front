import { twJoin } from 'tailwind-merge'

import { Separator } from '@/components/ui/separator'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Building, Menu, NotepadText, ShieldAlert, X } from 'lucide-react'

type HamburguerNavigationProps = {
  errors: {
    originalProject: boolean
    modifications: boolean
    newAreas: boolean
    management: boolean
    hydrosanitaryInstallation: boolean
  }
  pageCurrent: number
  navigationChangePage: (page: number) => void
}

export function HamburguerNavigation({
  pageCurrent,
  errors,
  navigationChangePage,
}: HamburguerNavigationProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="lg:hidden">
        <Menu></Menu>
      </DrawerTrigger>
      <DrawerContent className="bg-white flex flex-col rounded-none h-full w-[70vw] mt-24 ml-auto fixed bottom-0 right-0 pt-8">
        <DrawerHeader className="flex justify-between mb-6">
          <DrawerTitle className="flex items-center gap-2">
            <Building /> PROERG
          </DrawerTitle>
          <DrawerClose asChild>
            <X className="cursor-pointer" />
          </DrawerClose>
        </DrawerHeader>
        <nav className=" ">
          <ul className="px-4 space-y-2">
            <li
              className={twJoin(
                'flex gap-2 cursor-pointer rounded-md px-4 py-2 font-medium',
                pageCurrent === 1 ? 'bg-primary text-white' : 'hover:underline',
              )}
              onClick={() => navigationChangePage(1)}
            >
              <NotepadText />
              Notas
            </li>
            <li
              className={twJoin(
                'flex gap-2 cursor-pointer rounded-md px-4 py-2 font-medium',
                pageCurrent === 2 ? 'bg-primary text-white' : 'hover:underline',
              )}
              onClick={() => navigationChangePage(2)}
            >
              <ShieldAlert></ShieldAlert>
              Observações
            </li>

            <Separator className="my-1" />

            <li
              className={twJoin(
                'flex gap-2 cursor-pointer rounded-md px-4 py-2 font-medium',
                pageCurrent === 3 ? 'bg-primary text-white' : 'hover:underline',
              )}
              onClick={() => navigationChangePage(3)}
            >
              Disciplinas
            </li>
            <li
              className={twJoin(
                'flex gap-2 cursor-pointer rounded-md px-4 py-2 font-medium',
                errors.originalProject && pageCurrent === 4
                  ? 'bg-red-500 text-white'
                  : pageCurrent === 4
                    ? 'bg-primary text-white'
                    : errors.originalProject
                      ? 'text-red-500 hover:underline'
                      : 'hover:underline',
              )}
              onClick={() => navigationChangePage(4)}
            >
              Projeto original
            </li>
            <li
              className={twJoin(
                'flex gap-2 cursor-pointer rounded-md px-4 py-2 font-medium',
                errors.modifications && pageCurrent === 5
                  ? 'bg-red-500 text-white'
                  : pageCurrent === 5
                    ? 'bg-primary text-white'
                    : errors.modifications
                      ? 'text-red-500 hover:underline'
                      : 'hover:underline',
              )}
              onClick={() => navigationChangePage(5)}
            >
              Modificações
            </li>
            <li
              className={twJoin(
                'flex gap-2 cursor-pointer rounded-md px-4 py-2 font-medium',
                errors.newAreas && pageCurrent === 6
                  ? 'bg-red-500 text-white'
                  : pageCurrent === 6
                    ? 'bg-primary text-white'
                    : errors.newAreas
                      ? 'text-red-500 hover:underline'
                      : 'hover:underline',
              )}
              onClick={() => navigationChangePage(6)}
            >
              Áreas novas
            </li>
            <li
              className={twJoin(
                'flex gap-2 cursor-pointer rounded-md px-4 py-2 font-medium',
                errors.management && pageCurrent === 7
                  ? 'bg-red-500 text-white'
                  : pageCurrent === 7
                    ? 'bg-primary text-white'
                    : errors.management
                      ? 'text-red-500 hover:underline'
                      : 'hover:underline',
              )}
              onClick={() => navigationChangePage(7)}
            >
              Descrição da gestão
            </li>
            <li
              className={twJoin(
                'flex gap-2 cursor-pointer rounded-md px-4 py-2 font-medium',
                errors.hydrosanitaryInstallation && pageCurrent === 8
                  ? 'bg-red-500 text-white'
                  : pageCurrent === 8
                    ? 'bg-primary text-white'
                    : errors.hydrosanitaryInstallation
                      ? 'text-red-500 hover:underline'
                      : 'hover:underline',
              )}
              onClick={() => navigationChangePage(8)}
            >
              Instalações hidrossanitárias
            </li>
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
