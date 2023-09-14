import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import InculdList from "./Featurelistapi";
import FileList from "./Listfileapi";
import PlanList from "./Plansapi";
import { Link } from "react-router-dom";

function Plans(params) {
    const [ InculdListData, setInculdListData] =useState(InculdList);
    console.log(InculdListData);


    const [ FileListData, setFileListData] =useState(FileList);
    console.log(FileListData);

    const [ PlanListData, setPlanListData] =useState(PlanList);
    console.log(PlanListData);


     return(
        <>
          <div className="plans-fet col-lg-11">
              <h2> Features included in all plans </h2>
              <p className="mt-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
               electronic typesetting, remaining essentially unchanged. </p>
              <ul className="mt-5 featurlist">

              {
                InculdListData.map((curElem) =>{
                    const { id, titel } = curElem;
                    return(
                        <>
                    
                        <li className="d-flex align-items-star">
                            <span className="icon"> <FaCheck/> </span>
                            <span className="ms-3"> {titel} </span>
                        </li>
                        </>
                    );
                  })
               }
               
              </ul>

              <div className="col-lg-11 mt-5">
                    <div className="row row-cols-1 row-cols-lg-3 g-5">

                     {
                        FileListData.map((curElem) =>{
                            const { id, titel, imge } = curElem;
                            return(
                                <>
                            
                                <div className="col">
                                    <div className="items-list01 d-flex align-items-center ps-5 w-100">
                                        <figure className="m-0">
                                           <img alt="fe1" src={imge}/>
                                        </figure>
                                        <span className="ms-4"> {titel} </span>
                                    </div>
                                </div>
                                </>
                            );
                          })
                       }
                        
                    </div>
                </div>

              <div className="plans-tables d-block w-100 mt-5">
                 <h2>  Our all plans </h2>
                 <div className="row row-cols-1 row-cols-lg-3 g-5">

                 {
                    PlanListData.map((curElem) =>{
                        const { id, titel, price, oldpric, details, link, offter  } = curElem;
                        return(
                            <>
                        
                            <div className="col">
                               
                                <div className="items-plans">
                                    <div className="top-secty">
                                        <h5 className="text-white">{titel}</h5>
                                        <h3 className="my-4">${price} <span>${oldpric}</span> </h3>
                                        <p className="text-white">{details}</p>
                                        <Link to={link} className="btn btn-buy-now mt-4"> Buy Now </Link>
                                   </div>
                                   <div className="offer-div-mian">
                                      <ul>
                                        {
                                            offter.map(offter => 
                                                <li key={offter}> <FaCheck/> {offter} </li> )
                                        }
                                      </ul>
                                   </div>
                                    
        
        
                                </div>
                            </div>
                            </>
                        );
                      })
                   }
                    
                   
                 </div>
              </div>
              
          </div>
        </>
     );
}
export default Plans;