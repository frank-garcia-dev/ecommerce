// import { useGetProductsQuery } from "@/lib/(redux)/api";
// import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// interface PaginationState {
//   page: number;
//   data: Promise<Product[]>;
// }

// const products = ({
//   page,
//   products,
// }: {
//   page: number;
//   products: Product[];
// }) => {
//   const data: Product[] = products;
//   switch (page) {
//     case 1:
//       return data.slice(0, 4);
//     case 2:
//       return data.slice(5, 10);
//     case 3:
//       return data.slice(11, 15);
//     case 4:
//       return data.slice(16, 20);
//     default:
//       return data;
//   }
// };

// const initialState: PaginationState = {
//   page: 1,
//   data: products({ page: 1 }),
// } satisfies PaginationState as unknown as PaginationState;

// export const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     getProductsPage1: (state) => {
//       state.page = 1;
//       state.data = products({ page: 1 });
//     },
//     getProductsPage2: (state) => {
//       state.page = 2;
//       state.data = products({ page: 2 });
//     },
//     getProductsPage3: (state) => {
//       state.page = 3;
//       state.data = products({ page: 3 });
//     },
//     getProductsPage4: (state) => {
//       state.page = 4;
//       state.data = products({ page: 4 });
//     },
//   },
// });

// export const {
//   getProductsPage1,
//   getProductsPage2,
//   getProductsPage3,
//   getProductsPage4,
// } = productSlice.actions;

// export default productSlice.reducer;
