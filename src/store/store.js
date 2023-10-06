import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shippingCart/cartSlice";
import cartUiSlice from "./shippingCart/cartUISlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
