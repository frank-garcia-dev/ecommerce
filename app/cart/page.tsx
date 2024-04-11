'use client'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(3, {message: 'Nombre completo requerido'}),
  email: z.string().email({message: 'Correo electrónico inválido'}),
  address: z.string().min(3, {message: 'Dirección requerida'}),
  city: z.string().min(3, {message: 'Ciudad requerida'}),
  state: z.string().min(3, {message: 'Estado requerido'}),
  zip: z.string().min(3, {message: 'Código postal requerido'}),
  card: z.string().min(3, {message: 'Tarjeta de crédito requerida'}),
  cardName: z.string().min(3, {message: 'Nombre en tarjeta requerido'}),
  cardAddress: z.string().min(3, {message: 'Dirección en tarjeta requerida'}),
  cardCity: z.string().min(3, {message: 'Ciudad en tarjeta requerida'}),
  cardState: z.string().min(3, {message: 'Estado en tarjeta requerido'}),
  cardZip: z.string().min(3, {message: 'Código postal en tarjeta requerido'}),
})

export default function Component() {
  const watch = useForm<z.infer<typeof formSchema>>().watch
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      card: '',
      cardName: '',
      cardAddress: '',
      cardCity: '',
      cardState: '',
      cardZip: '',
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-4 md:grid-cols-2">

                <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu nombre completo" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                
                />

                <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu correo electrónico" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                
                />
                <FormField
                control={form.control}
                name="address"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Dirección</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu dirección" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                
                />
                <FormField
                control={form.control}
                name="city"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu ciudad" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                
                />
                <FormField
                control={form.control}
                name="state"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu estado" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                
                />
                <FormField
                control={form.control}
                name="zip"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Código postal</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu código postal" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                
                />
                <div className="grid col-span-2 gap-2">
                  <h3 className="font-semibold">Información de pago</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ingresa la información de pago</p>
                </div>

                <FormField
                control={form.control}
                name="card"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Tarjeta de crédito</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu tarjeta de crédito" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="cardName"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa el nombre que aparece en tu tarjeta" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="cardAddress"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Dirección</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa la dirección de tu tarjeta" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="cardCity"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu ciudad" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="cardState"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu estado" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="cardZip"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Código postal</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu código postal" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />

                </div>
                <div className="flex flex-col py-4 gap-2">
            <Button type='submit'>Confirmar órden</Button>
            <Button variant="outline"><Link href='/'>Regresar a tu carrito</Link></Button>
          </div>
              </form>
            </Form>
          </div>
          {JSON.stringify(form.getValues(), null, 2)}
        </div>
      </div>
    </div>
  )
}



