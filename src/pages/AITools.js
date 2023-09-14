import React, { useState, useEffect } from "react";
import SubBanner from "./components/SubBanner";
import FilterSection from "./components/ToolsListing/FilterSection";
import { Link } from "react-router-dom";
import Allpost from "./components/ToolsListing/Postdataapi";
import { FaCheck , FaComments} from "react-icons/fa";
import { FiSliders } from "react-icons/fi";
import Header from "../Header";
import { FiSearch } from "react-icons/fi";

function AITools(params) {
    document.title="AndFilp - Software"
    const [ AllpostData, setAllpostData] =useState(Allpost);
    console.log(AllpostData);


    useEffect(() => {

      window.scrollTo(0, 0)
    });

    return(
        <>  
            <Header/>
           
            <SubBanner indexpage="Home" indexvisit="/" activepage="Software"/>

          <main className="float-start w-100 body-part-main">
            
             <div className="listing-page">
                <div className="container">
                    <div className="row g-5">
                       <div className="col-lg-3">
                          <div className="d-none d-lg-block">
                           <FilterSection/>
                          </div>
                       </div>
                       <div className="col-lg-9">
                        <div className="right-serc-list">

                        
                          
                          <div className="top-details mb-5 mb-lg-0 d-flex align-items-center justify-content-between">

                             

                             <div className="d-none d-lg-block col-lg-9">
                                <div className="comon-search-divu d-flex align-items-center w-100">
                                    <div className="form-group">
                                        <div className="sret d-flex align-items-center">
                                           
                                            <input type="text" className="form-control" placeholder="Search keyword"/>
                                            
                                        </div>
                                        
                                    </div>
                                    <button className="btn btn-sert">  Search </button>
                                </div>
                                
                             </div>
                             <div className="d-block d-lg-none">
                                <button type="button" className="btn btn-filter" data-bs-toggle="offcanvas" data-bs-target="#fiterdiv"> 
                                  <FiSliders/>
                                </button>
                             </div>
                             

                             

                          </div>

                          <div className="d-block">
                             <h5 className="titel-texr mt-4"> <b> 50 </b> Listings in <b> Products </b> available </h5>
                          </div>

                          <div className="post-list-div">
                               
                            {
                              AllpostData.map((curElem) =>{
                                    const { id, imag, titel, link, name, ratstar, rating, description,duration, price, oldprice, reply} = curElem;
                                    return(
                                        <>
                                          
                                        <Link to={link} className="comon-post-alitools">
                                          <div className="row g-5">
                                              <div className="col-lg-4">
                                                <div className="postimg">
                                                    <img alt="post" src={imag}/>
                                                </div>
                                              </div>
                                              <div className="col-lg-8">
                                                    <div className="row">
                                                      <div className="col-lg-9">
                                                          <h5> {titel}</h5> 
                                                          <p> {description} </p>
                                                            <h6> {name} </h6>
                                                            <div className="rating-mu">
                                                              {ratstar}
                                                              <span> ({rating}) </span>
                                                            </div>
                                                            <ul className="valid">
                                                            <li>
                                                              <span>
                                                              <FaCheck/>
                                                                {duration}
                                                              </span>
                                                              <span>  <FaComments/> {reply} discussions </span>
                                                            </li>
                                                            </ul>
                                                      </div>
                                                      <div className="col-lg-3 d-grid justify-content-lg-center">
                                                          <h2 className="por-pric"> ${price}
                                                          <span className="d-block"> ${oldprice} </span>
                                                          
                                                          </h2>
                                                      </div>
                                                    </div>
                                              </div>
                                          </div>
                                        </Link>
                                       
                                        </>
                                    );
                                })
                            }

                          </div>

                          <nav className="mt-0">
                              <ul class="pagination">
                                <li class="page-item disabled ">
                                    <button type="button" class="page-link" >&laquo;</button>
                                </li>
                                <li class="page-item active">
                                    <button class="page-link">1</button>
                                </li>
                                <li class="page-item " aria-current="page">
                                    <button class="page-link">2 </button>
                                </li>
                                <li class="page-item">
                                    <button class="page-link">3 </button>
                                </li>
                                <li class="page-item">
                                    <button class="page-link">&raquo; </button>
                                </li>
                              </ul>
                          </nav>

                        </div>
                       </div>
                    </div>
                </div>
             </div>
          </main>
        </>
    );
}
export default AITools;