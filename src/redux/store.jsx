
import { configureStore } from '@reduxjs/toolkit';
import propiedadesReducer from './propiedadesSlice';

const store = configureStore({
  reducer: {
    propiedades: propiedadesReducer
  }
});

export default store;


