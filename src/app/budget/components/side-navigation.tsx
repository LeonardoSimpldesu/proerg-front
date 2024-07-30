import { twJoin } from 'tailwind-merge'

import { Separator } from '@/components/ui/separator'

type SideNavigationProps = {
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

export function SideNavigation({
  pageCurrent,
  errors,
  navigationChangePage,
}: SideNavigationProps) {
  return (
    <nav className=" ">
      <ul className="">
        <li
          className={twJoin(
            ' cursor-pointer rounded-md px-6 py-4 font-medium',
            pageCurrent === 1 ? 'bg-primary text-white' : 'hover:underline',
          )}
          onClick={() => navigationChangePage(1)}
        >
          Notas
        </li>
        <li
          className={twJoin(
            'cursor-pointer rounded-md px-6 py-4 font-medium',
            pageCurrent === 2 ? 'bg-primary text-white' : 'hover:underline',
          )}
          onClick={() => navigationChangePage(2)}
        >
          Observações
        </li>

        <Separator className="my-4" />

        <li
          className={twJoin(
            'cursor-pointer rounded-md px-6 py-4 font-medium',
            pageCurrent === 3 ? 'bg-primary text-white' : 'hover:underline',
          )}
          onClick={() => navigationChangePage(3)}
        >
          Disciplinas
        </li>
        <li
          className={twJoin(
            'cursor-pointer rounded-md px-6 py-4 font-medium',
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
            'cursor-pointer rounded-md px-6 py-4 font-medium',
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
            'cursor-pointer rounded-md px-6 py-4 font-medium',
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
            'cursor-pointer rounded-md px-6 py-4 font-medium',
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
            'cursor-pointer rounded-md px-6 py-4 font-medium',
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
  )
}
