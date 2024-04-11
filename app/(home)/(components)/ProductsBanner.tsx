'use client';
import { ProductsSlider } from "@/app/(home)/(components)/ProductsSlider";
import store from "@/lib/(redux)/store";
import { Provider } from "react-redux";

export const ProductsBanner = () => {
  return (
    <div className="w-full" >
      <br />
      <h2 className="text-center text-white text-2xl md:text-4xl">¡Echale un vistazo a nuestros nuevos productos!</h2>
      <Provider store={store}>
        <ProductsSlider/>
      </Provider>
    </div>
  );
}