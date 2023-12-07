import "./HomeContactContainer.css";

const HomeContactContainer = () => {
  return (
    <div className="contactContainer">
      <div className="innercontactContainer">
        <div className="contactTitle">
          <h2>Contacatanos</h2>
        </div>
        <div className="contactSection">
          <div className="leftColumn">left</div>

          <div className="rigthColumn">

            <form className="form_Container">

              <div className="form_FormGroup">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="formInput"
                ></input>
              </div>

              <div className="form_FormGroup">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="formInput"
                ></input>
              </div>

              <div className="form_FormGroup">
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="formInput"
                ></input>
              </div>

              <div className="form_FormGroup">
                <textarea
                  placeholder="Your Message"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="formTextArea"
                ></textarea>
              </div>

              <div className="form_FormGroup">
                <input
                  type="submit"
                  className="formSubmitInput"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactContainer;
