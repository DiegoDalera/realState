import { createSelector } from "@reduxjs/toolkit";

// Selector base para obtener todas las propiedades del estado
export const selectPropiedades = (state) => state.propiedades.propiedades;

// Selector para obtener una lista de agentes únicos
export const selectUniqueAgentes = createSelector(
  [selectPropiedades],
  (propiedades) => {
    const allAgentes = propiedades.map((propiedad) => propiedad.agente);
    const uniqueAgentes = Array.from(new Set(allAgentes.map((agente) => agente.nombre)))
      .map((nombre) => {
        return allAgentes.find((agente) => agente.nombre === nombre);
      });
    return uniqueAgentes;
  }
);
