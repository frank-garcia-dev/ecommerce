"use client";
import { ProductsList } from "@/app/productos/(components)/products-list";
import store from "@/lib/(redux)/store";
import { Provider } from "react-redux";

export default function Products() {
  return (
    <section className="min-h-screen p-1 md:p-4 mx-auto ">
      <h2 className="text-4xl text-center text-foreground font-extrabold">Productos</h2>
      <Provider store={store}>
        <ProductsList />
      </Provider>
    </section>
  );
}
