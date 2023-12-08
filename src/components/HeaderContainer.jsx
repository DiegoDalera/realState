import NavContainer from "./NavContainer";
import "./HeaderContainer.css";

const HeaderContainer = () => {
  return (
    <header className="header">
      <NavContainer />
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
                <option className="formOption">Types</option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  rentals
                </option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  Sales
                </option>
              </select>
            </div>

            <div className="formFormGroup">
              <select className="formSelect">
                <option className="formOption">Types</option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  rentals
                </option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  Sales
                </option>
              </select>
            </div>

            <div className="formFormGroup">
              <select className="formSelect">
                <option className="formOption">Types</option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  rentals
                </option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  Sales
                </option>
              </select>
            </div>

            <div className="formFormGroup">
              <select className="formSelect">
                <option className="formOption">Types</option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  rentals
                </option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  Sales
                </option>
              </select>
            </div>

            <div className="formFormGroup">
              <select className="formSelect">
                <option className="formOption">Types</option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  rentals
                </option>
                <option className="form__Option-sc-6kozr0-3 bmgawS">
                  Sales
                </option>
              </select>
            </div>

            <div className="formFormGroup">
              <input
                type="range"
                min="25000"
                max="350000"
                className="form__RangeInput"
                value="162887"
              ></input>
            </div>

            <div className="formFormGroup">
              <input
                type="submit"
                className="formSubmitInput"
                value="Search"
              ></input>
            
            </div>
          </form>

        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
