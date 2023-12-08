
import { createSlice } from "@reduxjs/toolkit";

export const agentesSlice = createSlice({
    name: 'agentes',
    initialState: {
      agentes: [],
    },
    reducers: {
      setAgentes: (state, action) => {
        state.agentes = action.payload;
      },
    },
  });
  
  export const { setAgentes } = agentesSlice.actions;
  export default agentesSlice.reducer;
  