import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "@/redux/slices/dashboard/adminAuthSlice";
import productSelectedForEditReducer from "@/redux/slices/dashboard/selectedProductForEdit";
import checkoutReducer from "@/redux/slices/application/checkoutSlice"

const store = configureStore({
  reducer: {
    admin: adminReducer,
    edit: productSelectedForEditReducer,
    checkout: checkoutReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
