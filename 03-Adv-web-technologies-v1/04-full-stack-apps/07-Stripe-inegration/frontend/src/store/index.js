import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice.js";
import cart from "./cartSlice.js";

const store = configureStore({
  reducer: { user, cart },
});

export default store;
