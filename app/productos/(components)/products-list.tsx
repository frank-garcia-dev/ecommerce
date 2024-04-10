import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useAppSelector } from "@/lib/(redux)/hooks";
import { fetchAllProducts, ProductsActions } from "@/lib/(redux)/slices";
import { useAppDispatch } from "@/lib/(redux)/store";
import Image from "next/image";
import { useEffect } from "react";



export const ProductsList = () => {
  
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.productsStore.products)
  const productsPerPage = useAppSelector(state => state.productsStore.productsPerPage)
  const currentPage = useAppSelector(state => state.productsStore.currentPage)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }
  , [dispatch])

  const totalPages = Math.ceil(products.length / productsPerPage)
  const pages = Array.from({length: totalPages}, (_, i) => i + 1)
  const indexOfLastPage = currentPage * productsPerPage
  const indexOfFirstPage = indexOfLastPage - productsPerPage

  const visibleProducts = products.slice(indexOfFirstPage, indexOfLastPage)

  const handlePreviousPage = () => {
    if(currentPage !== 1) {
      dispatch(ProductsActions.previousProductsPage())
    }
  }

  const handleNextPage = () => {
    if(currentPage !== totalPages) {
      dispatch(ProductsActions.nextProductsPage())
    }
  }

  const handleCurrentPage = (page: number) => {
    dispatch(ProductsActions.onClickCurrentPage(page))
  }
  
  return (
    <div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-10">
      
      {visibleProducts?.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <br />
            <CardDescription className="max-h-[5rem] min-h-[5rem] overflow-hidden" >{product.description}</CardDescription>
            <br />
          </CardHeader>
          <CardContent>
            <div className="flex relative size-[15rem] mx-auto">
              <Image src={product.image} sizes="" alt={product.title} fill/>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">

            <p>{`Categoría: ${product.category}`}</p>
            <p>{`$${product.price}`}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePreviousPage} />
          </PaginationItem>
          {pages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink onClick={()=> handleCurrentPage.call(null, page)} isActive={page === currentPage}>
              {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      </div>
  );
};