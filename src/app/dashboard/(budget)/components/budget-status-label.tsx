export function BudgetStatusLabel({
  status,
}: {
  status: 'APROVADO' | 'RECUSADO' | 'PENDENTE' | 'CONCLUIDO'
}) {
  switch (status) {
    case 'APROVADO':
      return (
        <div className="flex w-28 items-center justify-center gap-2 rounded-lg bg-green-600 p-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="font-medium text-muted-foreground text-white">
            Aprovado
          </span>
        </div>
      )
    case 'RECUSADO':
      return (
        <div className="flex w-28 items-center justify-center gap-2 rounded-lg bg-red-600 p-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="font-medium text-muted-foreground text-white">
            Recusado
          </span>
        </div>
      )
    case 'PENDENTE':
      return (
        <div className="flex w-28 items-center justify-center gap-2 rounded-lg bg-amber-400 p-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="font-medium text-muted-foreground text-white">
            Pendente
          </span>
        </div>
      )
    case 'CONCLUIDO':
      return (
        <div className="flex w-28 items-center justify-center gap-2 rounded-lg bg-primary p-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="font-medium text-muted-foreground text-white">
            Concluído
          </span>
        </div>
      )
    default:
      return (
        <div className="flex w-28 items-center justify-center gap-2 rounded-lg bg-red-600 p-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="font-medium text-muted-foreground text-white">
            ERROR
          </span>
        </div>
      )
  }
}
