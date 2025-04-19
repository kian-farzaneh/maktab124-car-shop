import adminReducer from "@/redux/slices/dashboard/adminAuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import productSelectedForEditReducer from "@/redux/slices/dashboard/selectedProductForEdit";

const store = configureStore({
  reducer: {
    admin: adminReducer,
    edit: productSelectedForEditReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
