import HeaderContainer from "../components/HeaderContainer";
import FeaturedListingContainer from "../components/FeaturedListingContainer"
import FeaturedAgentsContainer from "../components/FeaturedAgentsContainer"
import HomeContactContainer from "../components/HomeContactContainer"
import FooterContainer from "../components/FooterContainer"


const home = () => {
  return (
    <div>
      <HeaderContainer/>
      <FeaturedListingContainer />
      <FeaturedAgentsContainer />
      <HomeContactContainer />
      <FooterContainer />
    </div>
  );
};

export default home;
