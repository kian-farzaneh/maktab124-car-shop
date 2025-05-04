import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutState {
  userData: any;
  cartData: any[];
  totalPrice: number;
}

const initialState: CheckoutState = {
  userData: null,
  cartData: [],
  totalPrice: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutData: (state, action: PayloadAction<CheckoutState>) => {
      state.userData = action.payload.userData;
      state.cartData = action.payload.cartData;
      state.totalPrice = action.payload.totalPrice;
    },
    clearCheckoutData: (state) => {
      state.userData = null;
      state.cartData = [];
      state.totalPrice = 0;
    },
  },
});

export const { setCheckoutData, clearCheckoutData } = checkoutSlice.actions;
export default checkoutSlice.reducer;
