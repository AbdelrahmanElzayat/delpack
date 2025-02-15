import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import counterReducer from "./slices/counterSlice"; // مثال على Reducer
import CartSlice from "./slices/cartslice";
import { clientsApi } from "./slices/clients";
import { bannersApi } from "./slices/banners";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    counter: counterReducer, // أضف الريدويسر هنا
    [clientsApi.reducerPath]: clientsApi.reducer,
    [bannersApi.reducerPath]: bannersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(clientsApi.middleware)
      .concat(bannersApi.middleware),
});

// أنواع الـ Dispatch والـ Selector

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
