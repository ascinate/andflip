import React,{ useState } from "react";

function Landingscreenshot () {
    const [feature, setFeature] = useState("");

    function handleRadioChange(event) {
      setFeature(event.target.value);
      console.log(event.target.value);
    }
    return(
        <>
        <div className='form-group'>
          <label> Do you want to list your tool for LIFE TIME DEALS? * </label>
          <div onChange={handleRadioChange}>
          <div class="form-check">
              <input type="radio" value="sound" id='sound4' name="feature" checked={feature === "Sound"} /> 
              <label class="form-check-label" htmlFor='sound4'>
              Sounds Exciting. Let's hop on a call and discuss!
              </label>
          </div>

          <div class="form-check">
              <input type="radio" value="na" id='ns' name="feature" checked={feature === "naa"} /> 
              <label class="form-check-label" htmlFor='ns'>
              Naah.
              </label>
          </div>


          </div>
        </div>
        </>
    );
}
export default Landingscreenshot ;