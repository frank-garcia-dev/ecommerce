'use client';
import { ProductsSlider } from "@/app/(home)/(components)/ProductsSlider";
import store from "@/lib/(redux)/store";
import { Provider } from "react-redux";

export const ProductsBanner = () => {
  return (
    <div className="w-full" >
      <br />
      <h2 className="text-center text-white text-4xl">¡Checkout our newest products!</h2>
      <Provider store={store}>
        <ProductsSlider/>
      </Provider>
    </div>
  );
}