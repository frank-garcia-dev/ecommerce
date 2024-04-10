
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ShoppingBag } from "lucide-react"

export default function Component() {
  return (
    <div className="px-4 py-6 md:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Atrás</span>
            </Button>
            <h1 className="font-semibold text-lg md:text-xl">Checkout</h1>
          </div>
          <div className="rounded-lg border overflow-hidden">
            <div className="flex items-center p-4 border-b">
              <ShoppingBag className="h-6 w-6" />
              <div className="ml-4 text-sm font-medium">Tu órden</div>
              <div className="ml-auto text-sm font-medium">2 productos</div>
            </div>
            <div className="p-4 border-b">
              <div className="grid gap-2 text-sm">
                <div className="font-medium">Ejemplo de producto</div>
                <div>2x</div>
                <div className="font-medium">$120.00</div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid gap-2 text-sm">
                <div>Subtotal</div>
                <div>Descuento</div>
                <div className="font-medium">Total</div>
                <div>$169.00</div>
                <div>-$19.00</div>
                <div className="font-medium">$150.00</div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="font-semibold">Información de envío</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Ingresa la información para tu envío</div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" placeholder="Ingresa tu nombre completo" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" placeholder="Ingresa tu correo electrónico" type="email" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" placeholder="Ingresa tu dirección" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">Ciudad</Label>
                <Input id="city" placeholder="Ingresa tu ciudad" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">Estado</Label>
                <Input id="state" placeholder="Ingresa tu estado" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="zip">Código postal</Label>
                <Input id="zip" placeholder="Aquí tu código postal" />
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="font-semibold">Información de pago</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Ingresa la información de pago</div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="card">Tarjeta de crédito</Label>
                <Input id="card" placeholder="Ingresa tu tarjeta de crédito" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" placeholder="Ingresa tu nombre completo" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" placeholder="Ingresa tu dirección" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">Ciudad</Label>
                <Input id="city" placeholder="Ingresa tu ciudad" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">Estado</Label>
                <Input id="state" placeholder="Ingresa tu estado" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="zip">Código postal</Label>
                <Input id="zip" placeholder="Ingresa tu código postal" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button>Confirmar órden</Button>
            <Button variant="outline">Regresar a tu carrito</Button>
          </div>
        </div>
      </div>
    </div>
  )
}



