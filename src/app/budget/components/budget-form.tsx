'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Input } from '@/components/ui/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { Info } from 'lucide-react'
import { FieldErrors, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Checkbox } from '@/components/ui/checkbox'
import { twJoin } from 'tailwind-merge'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export const formSchema = z.object({
  // BudgetSubjects
  projetoEletrico: z.boolean().default(false),
  projetoTelecom: z.boolean().default(false),
  projetoHidrossanitario: z.boolean().default(false),
  listaDeMaterial: z.boolean().default(false),

  // BudgetOriginalProject
  areaTotalApartamento: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeDeLavabos: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeDeBanhoComBanheira: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeBanho: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeCozinha: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quandidadeAreaServico: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeAreaGourmet: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeDeSpa: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),

  // BudgetModifications
  transicaoDeInstalacoesHidraulicas: z.boolean().default(false),
  duplex: z.boolean().default(false),
  projetoOriginalRVT: z.boolean().default(false),
  areaTotalDosAmbientesModificados: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeLavabosAlteracao: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeBanhoComBanheiraAlteracao: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeBanhoAlteracao: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeCozinhaAlteracao: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeAreaServicoAlteracao: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeAreaGoumertAlteracao: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeSpaMudancaPosicao: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),

  // BudgetNewAreas
  quantidadeNovosLavabos: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeNovosBanhos: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeNovosQuartos: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeNovosSpa: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  qunantidadeNovasAreasComHidraulica: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),

  // BudgetManagement
  atualizacaoArquiteturaDuranteExecucao: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeReunioesNecessarias: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  quantidadeAnalisesCliente: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  detalhamentoDasAreasMolhadas: z.boolean().default(false),
  projetoMarcenariaDaCozinha: z.boolean().default(false),
  projetoAutomacao: z.enum(['nivel0', 'nivel1', 'nivel2', 'nivel3'], {
    message: 'Por favor selecione uma das opções',
  }),
  projetoLuminotecnico: z.enum(['nivel0', 'nivel1', 'nivel2', 'nivel3'], {
    message: 'Por favor selecione uma das opções',
  }),
  projetoAutomacaoLuminotecnicoCompatibilizados: z.boolean().default(false),
  listaDeEquipamentosEletricosEspecificos: z.boolean().default(false),
  listaComInformacoesTecnicas: z.boolean().default(false),

  // BudgetHydrosanitaryInstallation
  materialDaAguaDoProjetoOriginal: z.enum(['FLEXIVEL', 'RIGIDO'], {
    message: 'Por favor selecione uma das opções',
  }),
  alteracaoProjetoArCondicionado: z.boolean().default(false),
  loucasEquipamentosComVazoesDiferentesDaNorma: z.boolean().default(false),
  quantidadeBanhosQueMudaramSomentePosicaoDoLavatorio: z.coerce
    .number({ message: 'Coloque apenas números' })
    .nonnegative({ message: 'Insira um valor positivo' }),
  indicacaoDeTodasAsPecasDeEsgoto: z.boolean().default(false),
})

type BudgetFormProps = {
  currentPage: number
  onSubmit: (values: z.infer<typeof formSchema>) => void
  onError: (values: FieldErrors) => void
  handlePlusClick: () => void
  handleMinusClick: () => void
  handleResults: (values: z.infer<typeof formSchema>) => void
}

export function BudgetForm({
  currentPage,
  onSubmit,
  onError,
  handleMinusClick,
  handlePlusClick,
  handleResults,
}: BudgetFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      alteracaoProjetoArCondicionado: false,
      areaTotalApartamento: 0,
      areaTotalDosAmbientesModificados: 0,
      atualizacaoArquiteturaDuranteExecucao: 0,
      detalhamentoDasAreasMolhadas: false,
      duplex: false,
      indicacaoDeTodasAsPecasDeEsgoto: false,
      listaComInformacoesTecnicas: false,
      listaDeEquipamentosEletricosEspecificos: false,
      listaDeMaterial: false,
      loucasEquipamentosComVazoesDiferentesDaNorma: false,
      materialDaAguaDoProjetoOriginal: undefined,
      projetoAutomacao: undefined,
      projetoAutomacaoLuminotecnicoCompatibilizados: false,
      projetoEletrico: false,
      projetoHidrossanitario: false,
      projetoLuminotecnico: undefined,
      projetoMarcenariaDaCozinha: false,
      projetoOriginalRVT: false,
      projetoTelecom: false,
      quandidadeAreaServico: 0,
      quantidadeAnalisesCliente: 0,
      quantidadeAreaGoumertAlteracao: 0,
      quantidadeAreaGourmet: 0,
      quantidadeAreaServicoAlteracao: 0,
      quantidadeBanho: 0,
      quantidadeBanhoAlteracao: 0,
      quantidadeBanhoComBanheiraAlteracao: 0,
      quantidadeBanhosQueMudaramSomentePosicaoDoLavatorio: 0,
      quantidadeCozinha: 0,
      quantidadeCozinhaAlteracao: 0,
      quantidadeDeBanhoComBanheira: 0,
      quantidadeDeLavabos: 0,
      quantidadeDeSpa: 0,
      quantidadeLavabosAlteracao: 0,
      quantidadeNovosBanhos: 0,
      quantidadeNovosLavabos: 0,
      quantidadeNovosQuartos: 0,
      quantidadeNovosSpa: 0,
      quantidadeReunioesNecessarias: 0,
      quantidadeSpaMudancaPosicao: 0,
      qunantidadeNovasAreasComHidraulica: 0,
      transicaoDeInstalacoesHidraulicas: false,
    },
  })

  useEffect(() => {
    const subscription = form.watch((data) => {
      handleResults(data)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [form.watch()])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="flex flex-1 flex-col justify-between space-y-4"
      >
        <div
          className={twJoin(
            'grid grid-cols-1 gap-4',
            currentPage === 3 ? '' : 'hidden',
          )}
        >
          <FormField
            control={form.control}
            name="projetoEletrico"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Projeto elétrico</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projetoTelecom"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Projeto telecom</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projetoHidrossanitario"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Projeto hidrossanitário</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="listaDeMaterial"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Lista de material</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div
          className={twJoin(
            'grid grid-cols-2 gap-4',
            currentPage === 4 ? '' : 'hidden',
          )}
        >
          <FormField
            control={form.control}
            name="areaTotalApartamento"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Área total do apartamento em metros²:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a area total do apartamento em metros²"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quandidadeAreaServico"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Quantidade de áreas de serviço:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de áreas de serviço"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeDeBanhoComBanheira"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <div className="flex gap-2">
                  <FormLabel>Quantidade de banhos com banheira:</FormLabel>
                  <FormDescription>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={16} color="#2563eb" strokeWidth={3} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[40ch]">
                            Se o Banho tiver layout senhor e senhora, com peças
                            duplicadas, gentileza considerar dois banheiros,
                            sendo um com banheira e outro sem.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormDescription>
                </div>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de banhos com banheira"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeBanho"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1 flex flex-col justify-between">
                <div className="flex gap-2 mb-auto">
                  <FormLabel>Quantidade de banhos:</FormLabel>
                  <FormDescription>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={16} color="#2563eb" strokeWidth={3} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[40ch]">
                            Se o Banho tiver layout senhor e senhora, com peças
                            duplicadas, gentileza considerar dois banheiros.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormDescription>
                </div>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de banhos"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeCozinha"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Quantidade de cozinhas:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de cozinhas"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeDeLavabos"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Quantidade de lavabos:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de lavabos"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeAreaGourmet"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Quantidade de áreas gourmet:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de áreas gourmet"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeDeSpa"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Quantidade de Spas:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de Spas"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div
          className={twJoin(
            'grid grid-cols-2 gap-6',
            currentPage === 5 ? '' : 'hidden',
          )}
        >
          <FormField
            control={form.control}
            name="transicaoDeInstalacoesHidraulicas"
            render={({ field }) => (
              <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    É um apartamento aonde tem transição de instalações
                    hidráulicas
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duplex"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>É um apartamento de Cobertura (Duplex)</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projetoOriginalRVT"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>O projeto original foi feito em RVT</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeAreaGoumertAlteracao"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-2 ">
                <FormLabel>Quantidade A. Goumert alteração layout:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de áreas gourmet alteração layout"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeBanhoAlteracao"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="flex gap-2">
                  Quantidade banho alteração layout:
                  <FormDescription>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={16} color="#2563eb" strokeWidth={3} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[40ch]">
                            Se o Banho tiver layout senhor e senhora, com peças
                            duplicadas, gentileza considerar dois banheiros
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormDescription>
                </FormLabel>

                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de banhos alteração layout"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="areaTotalDosAmbientesModificados"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1 mt-auto">
                <FormLabel className="flex gap-2">
                  Área total dos ambientes modificados:
                  <FormDescription>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={16} color="#2563eb" strokeWidth={3} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-fit">Ver Aba de Observações</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormDescription>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="(Sala, Estar intimo, quarto e varanda) - Modificações elétricas e de telecom"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeBanhoComBanheiraAlteracao"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1 ">
                <FormLabel className="flex gap-2">
                  Quantidade banho c/Banheira alteração layout:
                  <FormDescription>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={16} color="#2563eb" strokeWidth={3} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[40ch]">
                            Banheiros, sendo um com banheira e outro sem
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormDescription>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de banhos com banheira com alteração layout"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeLavabosAlteracao"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1 ">
                <FormLabel>Quantidade lavabos alteração layout:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de lavabos"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeAreaServicoAlteracao"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1 ">
                <FormLabel>Quantidade A. Serviço alteração layout:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de áreas de serviço alteração layout"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeSpaMudancaPosicao"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1 ">
                <FormLabel>Quantidade SPA Mudança de posição:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de SPAs alteração layout"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeCozinhaAlteracao"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1 ">
                <FormLabel>Quantidade cozinha alteração layout:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de cozinhas alteração layout"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div
          className={twJoin(
            'grid grid-cols-1 gap-4',
            currentPage === 6 ? '' : 'hidden',
          )}
        >
          <FormField
            control={form.control}
            name="quantidadeNovosLavabos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade de novos lavabos:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de novos lavabos"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeNovosBanhos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade de novos banhos:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de novos banhos"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeNovosQuartos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade de novos quartos:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de novos quartos"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeNovosSpa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade de novos SPAs:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de novos SPAs"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="qunantidadeNovasAreasComHidraulica"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>
                  Quantidade de novas áreas com instalações hidráulicas:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de novas áreas com instalações hidráulicas:"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div
          className={twJoin(
            'grid grid-cols-2 gap-6',
            currentPage === 7 ? '' : 'hidden',
          )}
        >
          <FormField
            control={form.control}
            name="projetoAutomacaoLuminotecnicoCompatibilizados"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 col-span-2 md:col-span-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    O projeto de automação e luminoténico estarão
                    compatibilizados
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="listaDeEquipamentosEletricosEspecificos"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 col-span-2 md:col-span-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Terá uma lista de equipamentos elétricos específicos
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="listaComInformacoesTecnicas"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 col-span-2 md:col-span-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    A lista tem informações técnicas como potência e tensão
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projetoMarcenariaDaCozinha"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 col-span-2 md:col-span-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Haverá projeto Marcenaria da cozinha</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detalhamentoDasAreasMolhadas"
            render={({ field }) => (
              <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Haverá detalhamento das áreas molhadas fornecido pela
                    arquitetura (Ex: vistas de parede com alturas de pontos
                    definidas):
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="atualizacaoArquiteturaDuranteExecucao"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>
                  Haverá necessidade de atualização de arquitetura durante a
                  execução dos projetos? Caso positivo, quantas atualizações:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de atualizações de arquitetura, caso contrário adicione 0"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeReunioesNecessarias"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Quantidade de reuniões necessárias:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de reuniões necessárias"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeAnalisesCliente"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>
                  Quantidade de análises do Cliente (Final ou construtora):
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de análises do cliente"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projetoAutomacao"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <div className="flex gap-2">
                  <FormLabel>Haverá projeto automação:</FormLabel>
                  <FormDescription>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={16} color="#2563eb" strokeWidth={3} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-fit">Ver Aba de Observações</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormDescription>
                </div>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Clique para selecionar o nível" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="nivel0">NÃO</SelectItem>
                    <SelectItem value="nivel1">SIM - NÍVEL 1</SelectItem>
                    <SelectItem value="nivel2">SIM - NÍVEL 2</SelectItem>
                    <SelectItem value="nivel3">SIM - NÍVEL 3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projetoLuminotecnico"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <div className="flex gap-2">
                  <FormLabel>Haverá projeto luminotécnico:</FormLabel>
                  <FormDescription>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={16} color="#2563eb" strokeWidth={3} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-fit">Ver Aba de Observações</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormDescription>
                </div>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Clique para selecionar o nível" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="nivel0">NÃO</SelectItem>
                    <SelectItem value="nivel1">SIM - NÍVEL 1</SelectItem>
                    <SelectItem value="nivel2">SIM - NÍVEL 2</SelectItem>
                    <SelectItem value="nivel3">SIM - NÍVEL 3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div
          className={twJoin(
            'grid grid-cols-2 gap-4',
            currentPage === 8 ? '' : 'hidden',
          )}
        >
          <FormField
            control={form.control}
            name="alteracaoProjetoArCondicionado"
            render={({ field }) => (
              <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Teve alteração no projeto de ar condicionado
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="indicacaoDeTodasAsPecasDeEsgoto"
            render={({ field }) => (
              <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Será necessário indicação de todas as peças nos detalhes de
                    esgoto
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="loucasEquipamentosComVazoesDiferentesDaNorma"
            render={({ field }) => (
              <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Haverá louças e equipamentos com vazões diferentes da norma?
                    ou com diâmetro, e posição dos pontos AF e AQ diferente do
                    original:
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantidadeBanhosQueMudaramSomentePosicaoDoLavatorio"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>
                  Quantidade de banhos/bavabos que mudaram somente a posição do
                  lavatório:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adicione a quantidade de banhos/lavabos que mudaram somente a posição"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="materialDaAguaDoProjetoOriginal"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <div className="flex gap-2">
                  <FormLabel>
                    Qual o material da água do projeto original:
                  </FormLabel>
                </div>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo do material" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="FLEXIVEL">FLEXÍVEL</SelectItem>
                    <SelectItem value="RIGIDO">RÍGIDO</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=" justify-self-end place-self-end self-end flex gap-8 mt-auto">
          <Button
            type="button"
            className={currentPage === 1 ? 'hidden' : 'mr-auto text-white'}
            onClick={handleMinusClick}
          >
            Voltar
          </Button>
          <Button
            type="button"
            className={currentPage === 8 ? 'hidden' : 'ml-auto text-white'}
            onClick={handlePlusClick}
          >
            Próximo
          </Button>
          <Button type="submit" className="text-white">
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  )
}
