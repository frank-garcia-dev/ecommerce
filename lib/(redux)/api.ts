import { Product } from "@/lib/(redux)/slices";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakeapidata.com/products?limit=20",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], number>({
      queryFn: async (page) => {
        const response = await fetch(
          `https://fakeapidata.com/products?limit=20`,
        ).then((res) => res.json());
        switch (page) {
          case 1:
            return response.json().slice(0, 4);
          case 2:
            return response.json().slice(5, 10);
          case 3:
            return response.json().slice(11, 15);
          case 4:
            return response.json().slice(16, 20);
          default:
            return response.json();
        }
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
