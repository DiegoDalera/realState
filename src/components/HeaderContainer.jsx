import NavContainer from "./NavContainer";
import "./HeaderContainer.css";
import { useState } from "react";

const HeaderContainer = () => {
  const [valorRango, setValorRango] = useState(0);

  // Manejador para actualizar el estado cuando el rango cambia
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
          <form className="formContainer">
            <div className="formFormGroup">
              <select className="formSelect">
                <option className="formOption">Tipo de operacion</option>
                <option className="formOption">Alquiler</option>
                <option className="formOption">Venta</option>
                <option className="formOption">Alquiler temporario</option>
              </select>
            </div>

            <div className="formFormGroup">
              <select className="formSelect">
                <option className="formOption">Tipo de</option>
                <option className="formOption">Casa</option>
                <option className="formOption">Departamento</option>
              </select>
            </div>

            <div className="formFormGroup">
              <select className="formSelect">
                <option className="formOption">Ubicacion</option>
                <option className="formOption">Capital Federal</option>
                <option className="formOption">Bs As</option>
                <option className="formOption">Cordoba</option>
              </select>
            </div>

            <div className="formFormGroup">
              <select className="formSelect">
                <option className="formOption">Ambientes</option>
                <option className="formOption">+1</option>
                <option className="formOption">+2</option>
                <option className="formOption">+3</option>
              </select>
            </div>

            <div className="formFormGroup">
              <div className="inputrange">
                <label className="formRange" htmlFor="rangoPrecio">
                  Precio Maximo ${valorRango}
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
