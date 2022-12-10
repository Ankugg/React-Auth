import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthApi } from "../services/UserAuthApi";

export const Store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware),
});

setupListeners(Store.dispatch);
