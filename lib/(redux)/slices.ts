import { createSlice } from "@reduxjs/toolkit";


export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface InitialState {
  products: Product[];
  productsPerPage: number;
  currentPage: number;
}

const initialState: InitialState = {
  products: [],
  productsPerPage: 5,
  currentPage: 1,
};



export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state , action) => {
      state.products = [...action.payload]
    },
    nextProductsPage: (state) => {
      state.currentPage ++
    },
    previousProductsPage: (state) => {
      state.currentPage --
    },
    onChangeProductsPerPage: (state, action) => {
      state.productsPerPage = action.payload
    },
    onClickCurrentPage: (state, action) => {
state.currentPage = action.payload
    },
  },
});

const fetchAllProducts = () => {
  return async (dispatch: (arg0: { payload: any; type: "products/fetchProducts"; }) => void) => {
    const fetchProductsApi = async () => {
      const response = await fetch('https://fakeapidata.com/products')
      return response
    };

    try {
      const res = await fetchProductsApi()
      const products = await res.json()
      dispatch(ProductsActions.fetchProducts(products))
    } catch (error) {
      console.log(`Este es el error: ${error}`)
    }
    
  }
}

export { fetchAllProducts };
export const ProductsActions = productsSlice.actions;