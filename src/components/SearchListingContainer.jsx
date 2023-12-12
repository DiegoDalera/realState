import "./SearchListingContainer.css";
import { useSelector } from "react-redux";


const SearchListingContainer = () => {


  const propiedades = useSelector((state) => state.propiedades.propiedades);
  console.log("propiedades en search ", propiedades);
  const filtro = useSelector((state) => state.filtroPropiedad);
  console.log("filtros en search :", filtro);

  return <div className="listingContainer">

test

  </div>;
};

export default SearchListingContainer;
