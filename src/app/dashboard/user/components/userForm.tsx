import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const formSchema = z.object({
  userName: z.string().min(2, {
    message: 'O nome do usuário precisa de no minímo 2 caracteres.',
  }),
  email: z.string().email({ message: 'É preciso ser um email' }),
  role: z.enum(['CLIENT', 'ADMIN'], {
    message: 'O usuário precisa ser um admin ou um cliente',
  }),
})

type IUserForm = {
  userName?: string
  email?: string
  role?: 'CLIENT' | 'ADMIN'
}

export function UserForm({
  userName = '',
  role = 'CLIENT',
  email = '',
}: IUserForm) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName,
      email,
      role,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success('Usuário criado com sucesso')
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do usuário</FormLabel>
              <FormControl>
                <Input placeholder="Escreva o nome do usuário" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Escreva o email do usuário" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cargo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o cargo do usuário" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="CLIENT">Cliente</SelectItem>
                  <SelectItem value="ADMIN">Administrador</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  )
}
