import React, { useState } from "react";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import Allrating from "./Ratingapi";
import Allcategory from "./Categoryapi";
import Allstus from "./Statusapi";
import Integridcat from "./Intigradapi";
import System from "./Oparatingapi";
import Allfeature from "./Featureapi";
import AllCertificate from "./Certificateapi";
import { FiSearch } from "react-icons/fi";


function FilterSection(params) {
    const [ AllcategoryData, setAllcategoryData] =useState(Allcategory);
    console.log(AllcategoryData);


    const [ AllratingData, setAllpostData] =useState(Allrating);
    console.log(AllratingData);


    const [ AllstusData, setAllstusData] =useState(Allstus);
    console.log(AllstusData);


    const [ IntegridcatData, setIntegridcatData] =useState(Integridcat);
    console.log(IntegridcatData);
    

    const [ SystemData, setSystemData] =useState(System);
    console.log(SystemData);
    

    const [ AllfeatureData, setAllfeatureData] =useState(Allfeature);
    console.log(AllfeatureData);


    const [ AllCertificateData, setAllCertificateData] =useState(AllCertificate);
    console.log(AllCertificateData);

    
    

    const handlechange =(e)=>{
        console.log(e.target.value)
    }
     return(
        <>
          <div className="filter-div-left">


                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#category">
                                Category
                            </button>
                        </h2>
                        <div id="category" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                             {
                                AllcategoryData.map((curElem) =>{
                                    const { id, name,} = curElem;
                                    return(
                                        <>
                                         <div className="form-group corm-check d-flex align-items-center">
                                            <input class="form-check-input" type="checkbox" value={name} id={name} onChange={(e)=> handlechange(e)} />
                                            <label for={name} className="d-block"> {name} </label>
                                         </div>
                                        </>
                                    );
                                })
                               }
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ratings">
                                Ratings
                            </button>
                        </h2>
                        <div id="ratings" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                         {
                            AllratingData.map((curElem) =>{
                                const { id, name, titel, rtimg} = curElem;
                                return(
                                    <>
                                     <div className="form-group corm-check d-flex align-items-center">
                                        <input class="form-check-input" type="checkbox" value={name} id={name} onChange={(e)=> handlechange(e)} />
                                        <label for={name} className="d-block">
                                        <span className="img0 me-4">
                                          <img alt={name} src={rtimg}/>
                                        </span>  
                                        {titel} </label>
                                     </div>
                                    </>
                                );
                            })
                           }
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#status">
                                Status
                            </button>
                        </h2>
                        <div id="status" class="accordion-collapse collapse show">
                         <div class="accordion-body">
                            {
                                AllstusData.map((curElem) =>{
                                    const { id, name,} = curElem;
                                    return(
                                        <>
                                        <div className="form-group corm-check d-flex align-items-center">
                                            <input class="form-check-input" type="checkbox" value={name} id={name} onChange={(e)=> handlechange(e)} />
                                            <label for={name} className="d-block">
                                            {name} </label>
                                        </div>
                                        </>
                                    );
                                })
                             }
                          </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#intergrations">
                            Intergrations
                            </button>
                        </h2>
                        <div id="intergrations" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {
                                IntegridcatData.map((curElem) =>{
                                    const { id, name,} = curElem;
                                    return(
                                        <>
                                        <div className="form-group corm-check d-flex align-items-center">
                                            <input class="form-check-input" type="checkbox" value={name} id={name} onChange={(e)=> handlechange(e)} />
                                            <label for={name} className="d-block">
                                            {name} </label>
                                        </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#operatingsystem">
                            Operating system
                            </button>
                        </h2>
                        <div id="operatingsystem" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            {
                                SystemData.map((curElem) =>{
                                    const { id, name,} = curElem;
                                    return(
                                        <>
                                        <div className="form-group corm-check d-flex align-items-center">
                                            <input class="form-check-input" type="checkbox" value={name} id={name} onChange={(e)=> handlechange(e)} />
                                            <label for={name} className="d-block">
                                            {name} </label>
                                        </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#features">
                            Features
                            </button>
                        </h2>
                        <div id="features" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                {
                                    AllfeatureData.map((curElem) =>{
                                        const { id, name,} = curElem;
                                        return(
                                            <>
                                            <div className="form-group corm-check d-flex align-items-center">
                                                <input class="form-check-input" type="checkbox" value={name} id={name} onChange={(e)=> handlechange(e)} />
                                                <label for={name} className="d-block">
                                                {name} </label>
                                            </div>
                                            </>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#plantype">
                            Plan type
                            </button>
                        </h2>
                        <div id="plantype" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                              <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    All
                                    </label>
                             </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Lifetime deal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                    <label class="form-check-label" for="flexRadioDefault3">
                                    Annual
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pricerange">
                            Price range
                            </button>
                        </h2>
                        <div id="pricerange" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <div className="row row-cols-2">
                                   <div className="col">
                                     <input type="text" className="form-control" placeholder="Min"/>
                                   </div>
                                   <div className="col">
                                     <input type="text" className="form-control" placeholder="Max"/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#certification">
                            Certification
                            </button>
                        </h2>
                        <div id="certification" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            {
                                AllCertificateData.map((curElem) =>{
                                    const { id, name,} = curElem;
                                    return(
                                        <>
                                        <div className="form-group corm-check d-flex align-items-center">
                                            <input class="form-check-input" type="checkbox" value={name} id={name} onChange={(e)=> handlechange(e)} />
                                            <label for={name} className="d-block">
                                            {name} </label>
                                        </div>
                                        </>
                                    );
                                })
                            }
                            </div>
                        </div>
                    </div>


                </div>


          </div>
        </>
     );
}
export default FilterSection;