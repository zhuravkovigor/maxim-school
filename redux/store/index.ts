import { configureStore } from "@reduxjs/toolkit";

import { basketReducer } from "./slices/basket";
import { productApi } from "./services/product";

const store = configureStore({
  reducer: {
    basket: basketReducer,

    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
