
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Component() {
  return (
    <div className="mx-auto max-w-2xl p-4  space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Ecommerce</h1>
        <p className="text-gray-500 dark:text-gray-400">Please log in to your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="password">Password</Label>
            <Link className="ml-auto inline-block underline" href="#">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Sign in
        </Button>
      </div>
      <Separator className="w-full" />
      <div className="space-y-4">
        <Button className="w-full">Sign in with Google</Button>
        <Button className="w-full">Sign in with Facebook</Button>
      </div>
      <Separator className="my-8" />
      <div className="space-y-2">
        <p className="text-center">
          Don&apos;t have an account?
          <Link className="underline" href="#">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}