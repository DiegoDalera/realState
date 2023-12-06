import "./FeaturedAgentsContainer.css";
import propiedadesDesdeArchivo from "../data/properties";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPropiedades } from "../redux/propiedadesSlice";

import { selectUniqueAgentes } from "../redux/selectors";

const FeaturedAgentsContainer = () => {
  const agentesUnicos = useSelector(selectUniqueAgentes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPropiedades(propiedadesDesdeArchivo));
  }, [dispatch]);

  return (
    <div className="agentsContainer">
      <div className="listingAgentsHeader">
        <h2 className="AgentsTitle">Our Featured Listing</h2>
      </div>

      <div className="agentsCards">
        {agentesUnicos.map((agente) => (
          <div key={agente.id} className="agentCard">
            <div className="agentthumb">
              <img
                src={`/images/agents/${agente.imagen}`}
                alt="Agent"
                className="agentImg"
              />
            </div>
            <h3>{agente.nombre}</h3>
            <p>{agente.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAgentsContainer;
