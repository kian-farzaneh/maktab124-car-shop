import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface productState {
  selectedProductForEdit: null | any;
}

interface CarFormData {
  name: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  discountPercentage: string;
  discountedPrice: string;
  category: string;
  colors: string;
  stock: string;
  condition: string;
  image: string;
  gallery: string[];
  description: string;
  fuelType: string;
  gearbox: string;
  seats: string;
  isAvailable: boolean;
}

const initialState: productState = {
  selectedProductForEdit: null,
};

const productForEditSlice = createSlice({
  name: "productForEdit",
  initialState,
  reducers: {
    setSelectedProductForEdit: (state, action: PayloadAction<CarFormData>) => {
      state.selectedProductForEdit = action.payload;
    },
  },
});

export const { setSelectedProductForEdit } = productForEditSlice.actions;
export default productForEditSlice.reducer