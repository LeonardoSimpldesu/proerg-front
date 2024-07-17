import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Building } from 'lucide-react'

export default function Login() {
  return (
    <main className="grid min-h-screen grid-cols-2 justify-center items-center">
      <div className="hidden lg:flex h-full flex-col justify-between border-r border-foreground/5 bg-primary p-10 text-white">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Building className="h-5 w-5" color="#fff" />
          <span className="font-semibold text-white">PROERG</span>
        </div>
        <footer className="text-sm">
          Painel &copy; proerg - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="col-span-2 flex flex-col items-center justify-center lg:col-span-1">
        <div className="p-8 ">
          <div className="flex w-[350px] flex-col justify-center gap-6">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="tracking-tigh text-2xl font-semibold">
                Acessar Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Acompanhe as propostas e informações da empresa
              </p>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input id="email" type="email" />
              </div>
              <Button
                type="submit"
                variant="default"
                className="w-full bg-primary"
              >
                Acessar Dashboard
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
