import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/features/cart/cartSlice";
import userSlice from "./slices/features/user/userSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    userSlice: userSlice,
  },
});
