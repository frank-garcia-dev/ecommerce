
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Component() {
  return (
    <div className="mx-auto max-w-2xl p-4  space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Bienvenid@ a Ecommerce</h1>
        <p className="text-gray-500 dark:text-gray-400">Por favor inicia sesión en tu cuenta</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="password">Contraseña</Label>
            <Link className="ml-auto inline-block underline" href="#">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Iniciar sesión
        </Button>
      </div>
      <Separator className="w-full" />
      <div className="space-y-4">
        <Button className="w-full">Iniciar sesión con Google</Button>
        <Button className="w-full">Iniciar sesión con Facebook</Button>
      </div>
      <Separator className="my-8" />
      <div className="space-y-2">
        <p className="text-center">
          ¿No tienes una cuenta? {" "}
          <Link className="underline" href="#">
            Crear una cuenta
          </Link>
        </p>
      </div>
    </div>
  )
}