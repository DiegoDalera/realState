import "./FeaturedAgentsContainer.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { setAgentes } from "../redux/agentesSlice";


const FeaturedAgentsContainer = () => {
  const agentes = useSelector((state) => state.agentes.agentes);
  const dispatch = useDispatch();

  useEffect(() => {
    
    fetch("https://randomuser.me/api/?results=5") // Obtener 5 agentes
      .then((response) => response.json())
      .then((data) => {
        const agentesTransformados = data.results.map(agenteApi => ({
          id: agenteApi.login.uuid,
          nombre: `${agenteApi.name.first} ${agenteApi.name.last}`,
          imagen: agenteApi.picture.large,
        }));
        dispatch(setAgentes(agentesTransformados));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div className="agentsContainer">
      <div className="listingAgentsHeader">
        <h2 className="AgentsTitle">Our Featured Listing</h2>
      </div>
      <div className="agentsCards">
        {agentes.map((agente) => (
          <div key={agente.id} className="agentCard">
            <div className="agentthumb">
              <img
                src={agente.imagen}
                alt={`Agent ${agente.nombre}`}
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
