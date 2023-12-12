import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propiedades: [],
};

const propiedadesSlice = createSlice({
  name: "propiedades",
  initialState,
  reducers: {
    setPropiedades(state, action) {
      console.log('Action payload: propiedades', action.payload); 
      state.propiedades = action.payload;
    },
  },
});

export const { setPropiedades } = propiedadesSlice.actions;
export default propiedadesSlice.reducer;
