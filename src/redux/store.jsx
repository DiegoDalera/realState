import { configureStore } from '@reduxjs/toolkit';
import propiedadesReducer from './propiedadesSlice';
import agentesReducer from './agentesSlice'; 

const store = configureStore({
  reducer: {
    propiedades: propiedadesReducer,
    agentes: agentesReducer, 
  }
});

export default store;



