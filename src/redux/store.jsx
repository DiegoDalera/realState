import { configureStore } from '@reduxjs/toolkit';
import propiedadesReducer from './propiedadesSlice';
import agentesReducer from './agentesSlice'; 
import filtroPropiedadReducer from './filtroPropiedadesSlice'


const store = configureStore({
  reducer: {
    propiedades: propiedadesReducer,
    agentes: agentesReducer, 
    filtroPropiedad:filtroPropiedadReducer,
  }
});

export default store;



