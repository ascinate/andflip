import React, { useState, useEffect } from "react";
import SubBanner from "./components/SubBanner";
import FilterSection from "./components/trainings/FilterSection";
import { Link } from "react-router-dom";
import Allcourse from "./components/trainings/AllTrainingapi";
import { FaCheck , FaComments} from "react-icons/fa";
import { FiSliders , FiSearch } from "react-icons/fi";
import Header from "../Header";

function AITrainings(params) {
    document.title="AndFilp - Ai Trainings"
    const [ AllcourseData, setAllcourseData] =useState(Allcourse);
    console.log(AllcourseData);
    useEffect(() => {

      window.scrollTo(0, 0)
    });
    return(
        <>
        <Header/>
        <SubBanner indexpage="Home" indexvisit="/" activepage="Browse Trainings"/>

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
                           <h5 className="titel-texr mt-4"> <b> 50 </b> Listings in <b> Trainings </b> available </h5>
                        </div>

                        <div className="post-list-div ai-traings-list-mian">
                          <div className="row row-cols-1 row-cols-lg-3 g-5">
                              
                            {
                              AllcourseData.map((curElem) =>{
                                    const { id, imag, tags, rightingimg, righttext, category, link, titel, description, offprice, oldprice} = curElem;
                                    return(
                                        <>
                                         <div className="col">
                                           

                                            <Link to={link} class="offer-pro-deals d-d-inline-block">
                                                <div className="img-pro d-inline-block w-100">
                                                    <img src={imag} alt="name"/>
                                                </div>
                                                <div className="details-section">
                                                     <div className="d-flex align-items-center">
                                                        <h6 className="btn tags-t"> {tags}
                                                        </h6>
                                                        <span className="ms-3 cate-text"> {category} </span>
                                                     </div>

                                                     <div className="rtinghd my-2 d-flex align-items-center">
                                                        <img src={rightingimg}/>
                                                        <span className="ms-3"> {righttext}</span>
                                                     </div>
                                                    
                                                    <h5>{titel}</h5>
                                                    <p>{description}</p>
                                                    <h3>${offprice}<span>${oldprice}</span> </h3>
                                                </div>
                                            </Link>

                                         </div> 
                                      
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
           </div>
        </main>
        </>
    );
}
export default AITrainings;