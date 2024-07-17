import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Toaster richColors closeButton />
      <Header />
      {children}
    </>
  )
}
