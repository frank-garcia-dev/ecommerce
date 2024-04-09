import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Products() {
  return (
    <section className="min-h-screen p-4 mx-auto bg-slate-500 ">
      <h2 className="text-2xl">Productos</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-10">
        <Card>
          <CardHeader>
            <CardTitle>Producto 1</CardTitle>
            <CardDescription>Descripción del producto 1</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="size-[15rem]">
              <Image src="" alt="" fill />
            </div>
          </CardContent>
          <CardFooter>
            <p>Categoría</p>
            <p>Precio</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
