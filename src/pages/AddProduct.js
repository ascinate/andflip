import React , { useState, useEffect }from 'react';
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import SubBanner from './components/SubBanner';
import { FaCloudUploadAlt, FaInfoCircle } from "react-icons/fa";
import LoginHeader from '../LoginHeader';
import Founderpic from './components/products/Founderpic';



function AddProduct() {
  document.title="AndFilp - Add Products"
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    

    const [plans, setPlans] = useState("");

    function onChangeValue(event) {
      setPlans(event.target.value);
      console.log(event.target.value);
    }


    const [feature, setFeature] = useState("");

    function radioHandler(event) {
      setFeature(event.target.value);
      console.log(event.target.value);
    }


    const [deals, setDeals] = useState("");

    function handleRadioChange(event) {
      setDeals(event.target.value);
      console.log(event.target.value);
    }



 

    return(
      <>
      <LoginHeader/>
      <SubBanner indexpage="Dashboard" indexvisit="/" activepage="Add Product"/>
      <main className="float-start w-100 body-part-main mb-5 dsh-page">
         <div className='container'>
            <div className='comon-setps d-inline-block w-100'>
              <h2 className='get-titels'> Getting listed is just a few click!</h2>
              <form method='get' action='acp'>
                <div className='row row-cols-1 row-cols-lg-2 g-5'>
                    
                    <div className='col'>
                        <div className='form-group'>
                            <label> Tool name *    </label>
                            <input
                            type="text"
                            name="name"
                            className='form-control' required
                            
                            />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                          <label> Tool Website URL * </label>
                          <input
                          type="text"
                          name="name"
                          className='form-control' required
                          />
                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                          <label> How can you best describe your tool under 2 lines?* </label>
                          <textarea name="name" class="form-control" placeholder= "We'd love to hear your creative and concise take on describing your tool in just two lines. Make it engaging and clear, like a mini-superpower pitch!" required ></textarea>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                          <label> 5 Pros that set you apart from your competitors * </label>
                          <textarea name="name" class="form-control" placeholder= "Describe your tool in two lines, highlighting the five key advantages that make you stand out from the competition. Go ahead and give us your quick and awesome pitch!" required ></textarea>
                        </div>
                    </div>


                    <div className='col'>
                        <div className='form-group'>
                          <label> 5 use-cases for your ideal consumer *  </label>
                          <textarea name="name" class="form-control" placeholder= "We're looking for five specific scenarios where your ideal consumers can put your product to great use. Think of it as painting a picture of the perfect situations where your offering shines the brightest!" required ></textarea>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                          <label> An awesome screenshot of your website's landing page * </label>
                          <div className='img-spoi'>
                              <label>  Click to choose a file </label>
                              <img src={file} id="smj"/>
                              <input type="file" className='flio' onChange={handleChange} />
                          </div>
                          
                         
                        </div>
                    </div>


                    <div className='col'>
                        <div className='form-group'>
                          <label> Tool Pricing * </label>
                          <div onChange={onChangeValue}>
                          <div class="form-check">
                              <input type="radio" value="Free" id='free' name="plans" checked={plans === "Free"} /> 
                              <label class="form-check-label" htmlFor='free'>
                              Free
                              </label>
                          </div>

                          <div class="form-check">
                              <input type="radio" value="mium" id='mium' name="plans" checked={plans === "mium"} /> 
                              <label class="form-check-label" htmlFor='mium'>
                                 Freemium
                              </label>
                          </div>


                          <div class="form-check">
                              <input type="radio" value="Freetrail" id='freetrail' name="plans" checked={plans === "Freetrail"} /> 
                              <label class="form-check-label" htmlFor='freetrail'>
                              Free Trail
                              </label>
                          </div>

                          <div class="form-check">
                              <input type="radio" value="Paid" id='paid' name="plans" checked={plans === "Paid"}  /> 
                              <label class="form-check-label" htmlFor='paid'>
                              Paid
                              </label>
                          </div>
                          
                          </div>
                        </div>
                    </div>


                    <div className='col'>
                        <div className='form-group'>
                          <label> Do you want to feature your tool? * </label>
                          <div onChange={radioHandler}>
                          <div class="form-check">
                              <input type="radio" value="Free" id='abu' name="feature" checked={feature === "Free"} /> 
                              <label class="form-check-label" htmlFor='abu'>
                              Absolutely, YES!
                              </label>
                          </div>

                          <div class="form-check">
                              <input type="radio" value="mium" id='no' name="feature" checked={feature === "mium"} /> 
                              <label class="form-check-label" htmlFor='no'>
                              No, Thank you.
                              </label>
                          </div>


                          </div>
                        </div>
                    </div>


                    <div className='col'>
                        <div className='form-group'>
                          <label> Do you want to list your tool for LIFE TIME DEALS? * </label>
                              <div class="form-check">
                                  <input type="radio" value="sound" id='sound' name="deals"  /> 
                                  <label class="form-check-label" htmlFor='sound'>
                                  Sounds Exciting. Let's hop on a call and discuss!
                                  </label>
                              </div>

                              <div class="form-check">
                                  <input type="radio" value="na" id='ns' name="deals" /> 
                                  <label class="form-check-label" htmlFor='ns'>
                                  Naah.
                                  </label>
                              </div>


                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                          <label> Founder's Name * </label>
                          <input
                          type="text"
                          name="name"
                          className='form-control' required
                          />
                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                          <label> A short note from the founder </label>
                          <textarea name="name" class="form-control" placeholder= "Describe your tool in two lines, highlighting the five key advantages that make you stand out from the competition. Go ahead and give us your quick and awesome pitch!" required ></textarea>
                        </div>
                    </div>


                    <div className='col'>
                        <div className='form-group'>
                          <label> Founder's Picture </label>
                          

                          <Founderpic/>
                         
                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                          <label> Some final details, We Promise! </label>
                          <div className='row row-cols-2'>
                             <div className='col'>
                                <input
                                type="text"
                                name="name"
                                className='form-control' required
                                />
                             </div>
                             <div className='col'>
                                <input
                                type="text"
                                name="name"
                                className='form-control' required
                                />
                             </div>
                          </div>
                         
                         
                        </div>
                    </div>

                    


                   
                   
                </div>

                <input type='submit' className='btn btn-subnm' value="Submit Tools"/>
                  
              </form>
            </div>
         </div>
      </main>
      
      </>
    );
}
export default AddProduct;