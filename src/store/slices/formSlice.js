import { createSlice } from "@reduxjs/toolkit";
import { addcar } from "./CarsSlice";
const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addcar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});
console.log(addcar.toString());

export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
