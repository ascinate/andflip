import React , { useState, useEffect }from 'react';
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { FaCloudUploadAlt, FaInfoCircle } from "react-icons/fa";
import Parnteraccount from "./Parnteraccount";





const ActionButtons = (props) => {
   const handleBack = () => {
     props.previousStep();
   };
 
   const handleNext = () => {
     props.nextStep();
   };
 
   const handleFinish = () => {
     props.lastStep();
   };
 
   return (
     <div>
       <div className='row col-lg-3 spoi-div02'>
         {props.currentStep > 1 && (
           <div className='col'>
             <button onClick={handleBack} className='btn btn-back my-5'>Back</button>
           </div>
         )}
         <div className='col'>
           {props.currentStep < props.totalSteps && (
             <button onClick={handleNext} className='btn btn-next my-5'>Next</button>
           )}
           {props.currentStep === props.totalSteps && (
             <button onClick={handleFinish} className='btn btn-finish my-5'>Finish</button>
           )}
         </div>
       </div>
     </div>
   );
 };
 
 const One = (props) => {
   const [info1, setInfo1] = useState({});
 
   const onInputChanged = (event) => {
     const targetName = event.target.name;
     const targetValue = event.target.value;
 
     setInfo1((info1) => ({
       ...info1,
       [targetName]: targetValue
     }));
   };
 



   const [selected, setSelected] = useState("individual");
   const changeHandler = e => {
     setSelected(e.target.value);
   };
 

   const handleNextStep = () => {
    props.nextStep();
    props.userCallback(info1);
  };
   console.log(selected);
 
   return (
     <div>
      <div className='comon-setps d-inline-block w-100'>
         <h2 className='mb-0'>Enter Your Information</h2>
         <p className='my-4'> To ensure that you receive your payments on time,
          please enter your details as you shared them with your bank.</p>
         <form>
           <div className='col-lg-9'>
                  <div className='form-group typ-div d-flex align-items-center'>
                    <h5> Type</h5>

                    <div className='d-flex align-items-center'>
                          

                          <div class="form-check">
                              <input class="form-check-input" type="radio"
                              name="gender"
                              value="individual"
                              id="individual"
                              checked={selected === "individual"}
                              onChange={changeHandler}
                              />
                              <label class="form-check-label"  htmlFor="individual">
                                Individual
                              </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" 
                            type="radio"
                            value="company"
                            id="company"
                            checked={selected === "company"}
                            name="gender"
                            onChange={changeHandler}
                            />
                            <label class="form-check-label" htmlFor="company">
                              Company
                            </label>
                          </div>
                  
                    </div>
                  </div>




                  <div aria-hidden={selected !== "individual" ? true : false}>
                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Contact Email </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Phone Number <FaInfoCircle/> </label>
                           <div className='row phone-divu'>
                              <div className='col-2'>
                                 <select class="form-select" aria-label="Default select example">
                                  <option selected>select</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-10'>
                                  <input type='text' className='form-control'/>
                              </div>


                           </div>
                         
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> First Name </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Middle Name </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Last Name </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Company </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Street Address </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Address 2 </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> City </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Country </label>
                           <select class="form-select" aria-label="Default select example">
                              <option selected>select </option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> ZIP </label>
                           <input type='text' className='form-control'/>
                        </div>
                  </div>

                <div aria-hidden={selected !== "company" ? true : false}>
                    <div className='form-group comoni-lable d-flex align-items-center'>
                        <label> Contact Email </label>
                        <input type='text' className='form-control'/>
                    </div>

                    <div className='form-group comoni-lable d-flex align-items-center'>
                        <label> Phone Number <FaInfoCircle/> </label>
                        <div className='row phone-divu'>
                          <div className='col-2'>
                              <select class="form-select" aria-label="Default select example">
                              <option selected>select</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className='col-10'>
                              <input type='text' className='form-control'/>
                          </div>


                        </div>
                      
                    </div>

                    <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Street Address </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Address 2 </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> City </label>
                           <input type='text' className='form-control'/>
                        </div>

                        <div className='form-group comoni-lable d-flex align-items-center'>
                           <label> Country </label>
                           <select class="form-select" aria-label="Default select example">
                              <option selected>select </option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                      </div>

                 </div>


             
           </div>
            
         </form>
       </div>
       <br />
       <ActionButtons {...props} nextStep={handleNextStep} />
     </div>
   );
 };
 
 const Two = (props) => {
   const [info2, setInfo2] = useState({});
 
   const onInputChanged = (event) => {
     const targetName = event.target.name;
     const targetValue = event.target.value;
 
     setInfo2((info2) => ({
       ...info2,
       [targetName]: targetValue
     }));
   };
 
   const handleNextStep = () => {
    props.nextStep();
    props.userCallback(info2);
  };
  const [selected, setSelected] = useState("debitcard");
  const changeHandler = e => {
    setSelected(e.target.value);
  };

  console.log(selected);
 
   return (
     <div>
     <div className='comon-setps d-inline-block w-100'>
     
       <h2>Payment Method</h2>
       <p> To ensure that you receive your payments on time, please enter your details as you shared them with your bank.
       </p>

       <div className='form-group typ-div d-flex align-items-center mt-5'>
          <h5> Type</h5>

          <div className='d-flex align-items-center'>
                

                <div class="form-check">
                    <input class="form-check-input" type="radio"
                    name="payment"
                    value="internetbanking"
                    id="internetbanking"
                    checked={selected === "internetbanking"}
                    onChange={changeHandler}
                    />
                    <label class="form-check-label"  htmlFor="internetbanking">
                    Internet banking
                    </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" 
                  type="radio"
                  value="debitcard"
                  id="debitcard"
                  checked={selected === "debitcard"}
                  name="payment"
                  onChange={changeHandler}
                  />
                  <label class="form-check-label" htmlFor="debitcard">
                    Debit card
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" 
                  type="radio"
                  value="creditcards"
                  id="creditcards"
                  checked={selected === "creditcards"}
                  name="payment"
                  onChange={changeHandler}
                  />
                  <label class="form-check-label" htmlFor="creditcards">
                    Credit Card
                  </label>
                </div>
        
          </div>
        </div>
       
       <form>
         <div className='col-lg-10'>
            <div aria-hidden={selected !== "debitcard" ? true : false}>
                  <div className='form-group comoni-lable d-flex align-items-center'>
                    <label> Cardholder Name </label>
                    <input type='text' className='form-control'/>
                  </div>

                  <div className='form-group comoni-lable d-flex align-items-center'>
                    <label> Card Number </label>
                    <div className='row card-row'>
                      <div className='col-2'>
                            <select class="form-select">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                      </div>
                      <div className='col-10'>
                          <input type='text' className='form-control'/>
                      </div>
                    </div>
                    
                  </div>
                  <div className='form-group comoni-lable d-flex align-items-center'>
                     <div className='comon-lable-divuy d-flex align-items-center'>
                        <label> Card Number </label>
                        <input type='text' className='form-control' placeholder='MM/YYYY'/>
                     </div>

                     <div className='comon-lable-divuy d-flex align-items-center'>
                        <label> CVC </label>
                        <input type='text' className='form-control' placeholder='CVC'/>
                     </div>
                  
                  </div>

            </div>

            <div aria-hidden={selected !== "internetbanking" ? true : false}>

                <div className='form-group comoni-lable d-flex align-items-center'>
                  <label> Select Bank </label>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
            </div>

            <div aria-hidden={selected !== "creditcards" ? true : false}>

                <div className='form-group comoni-lable d-flex align-items-center'>
                  <label> Cardholder Name </label>
                  <input type='text' className='form-control'/>
                </div>

                <div className='form-group comoni-lable d-flex align-items-center'>
                  <label> Card Number </label>
                  <div className='row card-row'>
                    <div className='col-2'>
                          <select class="form-select">
                          <option selected>Select</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-10'>
                        <input type='text' className='form-control'/>
                    </div>
                  </div>
                  
                </div>
                <div className='form-group comoni-lable d-flex align-items-center'>
                  <div className='comon-lable-divuy d-flex align-items-center'>
                      <label> Card Number </label>
                      <input type='text' className='form-control' placeholder='MM/YYYY'/>
                  </div>

                  <div className='comon-lable-divuy d-flex align-items-center'>
                      <label> CVC </label>
                      <input type='text' className='form-control' placeholder='CVC'/>
                  </div>
                
                </div>
            </div>
        </div>
       </form>
       </div>
       <br />
       <ActionButtons {...props} nextStep={handleNextStep} />
     </div>
   );
 };


 const Three = (props) => {
   const [info3, setInfo3] = useState({});
 
   const onInputChanged = (event) => {
     const targetName = event.target.name;
     const targetValue = event.target.value;
 
     setInfo3((info3) => ({
       ...info3,
       [targetName]: targetValue
     }));
   };
 

   const handleNextStep = () => {
    props.nextStep();
    props.userCallback(info3);
  };
   const [selected, setSelected] = useState("individual");
   const changeHandler = e => {
     setSelected(e.target.value);
   };
   console.log(selected);
 
 
   return (
     <div>
        <div className='comon-setps d-inline-block w-100'>
            <h2>Tax Form</h2>
           
            <div className='form-group typ-div d-flex align-items-center'>
                <h5> Type</h5>

                <div className='d-flex align-items-center'>
                      

                      <div class="form-check">
                          <input class="form-check-input" type="radio"
                          name="gender"
                          value="individual"
                          id="individual"
                          checked={selected === "individual"}
                          onChange={changeHandler}
                          />
                          <label class="form-check-label"  htmlFor="individual">
                            Individual
                          </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" 
                        type="radio"
                        value="company"
                        id="company"
                        checked={selected === "company"}
                        name="gender"
                        onChange={changeHandler}
                        />
                        <label class="form-check-label" htmlFor="company">
                          Company
                        </label>
                      </div>
              
                </div>
            </div>

            <form>
                 
            <div className='col-lg-10'>
                <div aria-hidden={selected !== "individual" ? true : false}>
                    <div className='form-group comoni-lable d-flex align-items-center'>
                      <label> Annual Gross Pay </label>
                      <input type='text' className='form-control'/>
                    </div>

                    <div className='form-group comoni-lable d-flex align-items-center'>
                      <label> Phone Number <FaInfoCircle/> </label>
                      <div className='row phone-divu'>
                          <div className='col-2'>
                            <select class="form-select" aria-label="Default select example">
                              <option selected>select</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className='col-10'>
                              <input type='text' className='form-control'/>
                          </div>


                      </div>
                    
                    </div>

                    <div className='form-group comoni-lable d-flex align-items-center'>
                      <label> GIS No </label>
                      <input type='text' className='form-control'/>
                    </div>

               
                </div>

                <div aria-hidden={selected !== "company" ? true : false}>
                    <div className='form-group comoni-lable d-flex align-items-center'>
                      <label> Annual Gross Pay </label>
                      <input type='text' className='form-control'/>
                    </div>

                    <div className='form-group comoni-lable d-flex align-items-center'>
                      <label> Phone Number <FaInfoCircle/> </label>
                      <div className='row phone-divu'>
                          <div className='col-2'>
                            <select class="form-select" aria-label="Default select example">
                              <option selected>select</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className='col-10'>
                              <input type='text' className='form-control'/>
                          </div>


                      </div>
                    
                    </div>

                    <div className='form-group comoni-lable d-flex align-items-center'>
                      <label> GIS No </label>
                      <input type='text' className='form-control'/>
                    </div>
                </div>
            </div>
              
            </form>
       </div>
       <br />
       <ActionButtons {...props} nextStep={handleNextStep}/>
     </div>
   );
 };


 const Four = (props) => {
    console.log("step5 receive user object");
   console.log(props.user);
 
   const handleLastStep = () => {
     props.lastStep();
     props.completeCallback();
   };
 
   return (
     <div>
      <div className='comon-setps d-inline-block w-100'>
          <h2>Successful Process </h2>
          <p> To ensure that you receive your payments
           on time, please enter your details as you shared them with your bank. </p>
      
       </div>
       <br />
       <ActionButtons {...props} lastStep={handleLastStep} />
     </div>
   );
 };





function Overview() {

    const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };

  
  useEffect(() => {

    window.scrollTo(0, 0)
  });

  return (
    <>
            
         <div className='add-producrs-div d-inline-block w-100'>
            <div className='container'>
               <Stepper activeStep={activeStep}>
               <Step  children="1" />
               <Step children="2"/>
               <Step  children="3"/>
               <Step  children="4"/>
               </Stepper>
               {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
               <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
               <One userCallback={assignUser} />
               <Two user={user} userCallback={assignUser} />
               <Three user={user} userCallback={assignUser} />
               <Four user={user} completeCallback={handleComplete} />
               </StepWizard>
            </div>
         </div>
    </>
  );
};

export default Overview;