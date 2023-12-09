import { createSlice } from "@reduxjs/toolkit";

export const filtroPropiedadesSlice = createSlice({
  name: "filtroPropiedades",
  initialState: {
    filtroPropiedades: [],
  },
  reducers: {
    setFiltroPropiedades: (state, action) => {
      console.log('Action payload:', action.payload); 
      state.filtroPropiedades = action.payload;
    },
  },
});


export const { setFiltroPropiedades } = filtroPropiedadesSlice.actions;

export default filtroPropiedadesSlice.reducer;

