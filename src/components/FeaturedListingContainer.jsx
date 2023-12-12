import "./FeaturedListingContainer.css";
import propiedadesDesdeArchivo from "../data/properties";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPropiedades } from "../redux/propiedadesSlice";

const FeaturedListingContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPropiedades(propiedadesDesdeArchivo));
  }, [dispatch]);

  const propiedades = useSelector((state) => state.propiedades.propiedades);
  console.log("propiedades en home ", propiedades);
  
  return (
    <div className="listingContainer">
      <div className="listingHeader">
        <h2 className="listingTitle">Nuestras propiedades</h2>
      </div>

      <div className="listingCards">
        {propiedades.map((propiedad) => (
          <div key={propiedad.id} className="propertyCard">
            <div className="propertythumb">
              <img
                src={`/images/houses/${propiedad.imagenes[0]}`}
                alt="Property"
                className="propertyImg"
              />
            </div>
            <h3 className="title">{propiedad.titulo}</h3>
            <p className="parrafo-cortado">{propiedad.descripcion}</p>
            <p className="precio">{propiedad.price}</p>
            <button className="btn-vermas">ver mas</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListingContainer;
