import { productsSlice } from "@/lib/(redux)/slices";
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";





const store = configureStore({
  reducer: {
    productsStore: productsSlice.reducer,
  },
}
)

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();