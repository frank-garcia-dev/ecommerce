"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center bg-secondary md:max-w-[1440px] justify-center md:p-4 gap-40">
      <div className="grid gap-2 md:grid-cols-2">

      <h1 className="md:text-2xl text-center text-lg">Ecommerce</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button asChild>
                <Link href="/">Home</Link>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button asChild>
                <Link href="/productos">Productos</Link>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button asChild>
                <Link href="/cart">Carrito</Link>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button asChild>
                <Link href="/auth">Iniciar sesión</Link>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </header>
  );
};
