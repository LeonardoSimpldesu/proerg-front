import { twJoin } from 'tailwind-merge'

import { Separator } from '@/components/ui/separator'

export function SideNavigation({
  pageCurrent,
  navigationChangePage,
}: {
  pageCurrent: number
  navigationChangePage: (page: number) => void
}) {
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
            pageCurrent === 4 ? 'bg-primary text-white' : 'hover:underline',
          )}
          onClick={() => navigationChangePage(4)}
        >
          Projeto original
        </li>
        <li
          className={twJoin(
            'cursor-pointer rounded-md px-6 py-4 font-medium',
            pageCurrent === 5 ? 'bg-primary text-white' : 'hover:underline',
          )}
          onClick={() => navigationChangePage(5)}
        >
          Modificações
        </li>
        <li
          className={twJoin(
            'cursor-pointer rounded-md px-6 py-4 font-medium',
            pageCurrent === 6 ? 'bg-primary text-white' : 'hover:underline',
          )}
          onClick={() => navigationChangePage(6)}
        >
          Áreas novas
        </li>
        <li
          className={twJoin(
            'cursor-pointer rounded-md px-6 py-4 font-medium',
            pageCurrent === 7 ? 'bg-primary text-white' : 'hover:underline',
          )}
          onClick={() => navigationChangePage(7)}
        >
          Descrição da gestão
        </li>
        <li
          className={twJoin(
            'cursor-pointer rounded-md px-6 py-4 font-medium',
            pageCurrent === 8 ? 'bg-primary text-white' : 'hover:underline',
          )}
          onClick={() => navigationChangePage(8)}
        >
          Instalações hidrossanitárias
        </li>
      </ul>
    </nav>
  )
}
