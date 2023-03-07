import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addcar,
  removeCar,
  changeSearchTerm,
} from "./slices/CarsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, addcar, removeCar, changeSearchTerm };
