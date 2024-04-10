import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetProductsQuery } from "@/lib/(redux)/api";
import Image from "next/image";

export const ProductsList = () => {
  const { data } = useGetProductsQuery(1);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-10">
      {data?.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="size-[15rem]">
              <Image src={product.image} alt={product.title} fill />
            </div>
          </CardContent>
          <CardFooter>
            <p>{product.category}</p>
            <p>{product.price}</p>
          </CardFooter>
        </Card>
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
