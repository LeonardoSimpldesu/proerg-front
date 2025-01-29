import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, Check, Dot } from 'lucide-react'
import Image from 'next/image'

export function Observations() {
  return (
    <div className="">
      <div className="mb-8 space-y-4">
        <Alert variant="avaliable" className="bg-primary/10">
          <Check className="h-4 w-4" />
          <AlertTitle>Considerar</AlertTitle>
          <AlertDescription>
            <p>
              <Dot className="inline-block" />
              Áreas completas que foram modificadas o layout interno. Marcação
              Azul claro
            </p>
          </AlertDescription>
        </Alert>
        <Alert variant="destructive" className="bg-destructive/10">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Não Considerar</AlertTitle>
          <AlertDescription>
            <p>
              <Dot className="inline-block" />
              Áreas molhadas como banheiro, lavabo, cozinha, área de serviço,
              spa e etc. Marcações em azul.
            </p>
            <p>
              <Dot className="inline-block" />
              Área do condomínio como elevadores, caixa de escada e hall.
              Marcações em vermelho
            </p>
          </AlertDescription>
        </Alert>
      </div>
      <Image src={'/formImages/imageB.jpg'} alt="" width={800} height={800} />
      <Image src={'/formImages/imageA.jpg'} alt="" width={800} height={800} />
    </div>
  )
}
