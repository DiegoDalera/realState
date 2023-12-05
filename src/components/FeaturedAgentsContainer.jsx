
import "./FeaturedAgentsContainer.css";
import propiedadesDesdeArchivo from "../data/properties";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPropiedades } from "../redux/propiedadesSlice";

const FeaturedAgentsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPropiedades(propiedadesDesdeArchivo));
  }, [dispatch]);

  const propiedades = useSelector((state) => state.propiedades.propiedades);

  return (
    <div className="agentsContainer">
      <div className="listingAgentsHeader">
        <h2 className="AgentsTitle">Our Featured Listing</h2>
      </div>

      <div className="agentsCards">
        {propiedades.map((propiedad) => (
          <div key={propiedad.id} className="agentCard">
            <div className="agentthumb">
              <img
                src={`/images/agents/${propiedad.agente.imagen}`}
                alt="Agent"
                className="agentImg"
              />
            </div>
            <h3>{propiedad.agente.nombre}</h3>
            <p>{propiedad.agente.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAgentsContainer;