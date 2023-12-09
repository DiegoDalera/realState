import NavContainer from "./NavContainer";
import "./HeaderContainer.css";
import { useState } from "react";

import { useDispatch } from 'react-redux';
import { setFiltroPropiedades } from '../redux/filtroPropiedadesSlice'; 

const HeaderContainer = () => {

  const dispatch = useDispatch();

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = {
    tipoOperacion,
    tipoPropiedad,
    ubicacion,
    ambientes,
    valorRango,
  };

  // Despacha una acción a Redux con los datos del formulario
  
  dispatch(setFiltroPropiedades(formData));
};

  const [tipoOperacion, setTipoOperacion] = useState("");
  const [tipoPropiedad, setTipoPropiedad] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [ambientes, setAmbientes] = useState("");
  const [valorRango, setValorRango] = useState(0);

  const handleTipoOperacionChange = (event) => {
    setTipoOperacion(event.target.value);
  };

  const handleTipoPropiedadChange = (event) => {
    setTipoPropiedad(event.target.value);
  };

  const handleUbicacionChange = (event) => {
    setUbicacion(event.target.value);
  };

  const handleAmbientesChange = (event) => {
    setAmbientes(event.target.value);
  };

  const handleRangoChange = (event) => {
    setValorRango(event.target.value);
  };



  return (
    <header className="header">
      <div className="nav-container">
        <NavContainer />
      </div>

      <div className="header-container">
        <div className="header-title">
          <h1> La propiedad de tus sueños</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            consequuntur voluptatem hic vero, quos aperiam omnis reprehenderit
            ducimus, tempora magnam quo quibusdam numquam. Debitis mollitia sit
            nobis. Nostrum, sit at.
          </p>
        </div>

        <div className="search-form">
          <form className="formContainer" onSubmit={handleSubmit}>
            <div className="formFormGroup">
              <select
                className="formSelect"
                value={tipoOperacion}
                onChange={handleTipoOperacionChange}
              >
                <option className="formOption">Tipo de operacion</option>
                <option className="formOption">Alquiler</option>
                <option className="formOption">Venta</option>
                <option className="formOption">Alquiler temporario</option>
              </select>
            </div>

            <div className="formFormGroup">
              <select
                className="formSelect"
                value={tipoPropiedad}
                onChange={handleTipoPropiedadChange}
              >
                <option className="formOption">Tipo de Propiedad</option>
                <option className="formOption">Casas</option>
                <option className="formOption">Departamentos</option>
              </select>
            </div>

            <div className="formFormGroup">
              <select
                className="formSelect"
                value={ubicacion}
                onChange={handleUbicacionChange}
              >
                <option className="formOption">Ubicacion</option>
                <option className="formOption">Capital Federal</option>
                <option className="formOption">Buenos Aires</option>
                <option className="formOption">Cordoba</option>
              </select>
            </div>

            <div className="formFormGroup">
              <select
                className="formSelect"
                value={ambientes}
                onChange={handleAmbientesChange}
              >
                <option className="formOption">Cantidad de ambientes</option>
                <option className="formOption">+1</option>
                <option className="formOption">+2</option>
                <option className="formOption">+3</option>
              </select>
            </div>

            <div className="formFormGroup">
              <div className="inputrange">
                <label className="formRange" htmlFor="rangoPrecio">
                  Precio Maximo U$S{valorRango}
                </label>
                <input
                  type="range"
                  id="rangoPrecio"
                  name="rangoPrecio"
                  min="0"
                  max="1000000"
                  value={valorRango}
                  onChange={handleRangoChange}
                />
              </div>
            </div>

            <div className="formFormGroup">
              <input
                type="submit"
                className="formSubmitInput"
                value="Buscar"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
