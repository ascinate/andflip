import React, { useState, useEffect } from "react";
import SubBanner from "./components/SubBanner";
import Parnterlist from "./components/parnterdashboard/Partnerapi";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments, FaExternalLinkAlt } from "react-icons/fa";
import LoginHeader from "../LoginHeader";
import Breadcrum from "../Breadcrum";

function PartnerDashoard() {

    document.title="AndFilp - Dashboard"

    useEffect(() => {

      window.scrollTo(0, 0)
    });

    const [ ParnterlistData, setParnterlistData] =useState(Parnterlist);
    console.log(ParnterlistData);

    return(
        <>
         <LoginHeader/>
          <SubBanner indexpage="Home" indexvisit="/" activepage="Dashboard"/>
          <main className="float-start w-100 body-part-main dsh-page">
            
             <section className="partner-dashborad d-inline-block w-100">
                 <div className="container">
                         <h2 className="text-center"> Parnter Portal </h2>
                         <div className="under-line text-center d-block w-100 mt-0"></div>
                          <ul className="d-flex align-items-center mt-5 justify-content-center speicl-menu">
                            <li>
                              <NavLink to="/partnerdashoard" className="btn btn-menu">
                              <span> <FaHome/> </span>
                              Dashboard </NavLink>
                            </li>
                            <li>
                              <NavLink to="/listyourtool" className="btn btn-menu">
                               <span> <FaThLarge/> </span>
                              Listing </NavLink>
                            </li>
                            <li>
                              <NavLink to="/sales" className="btn btn-menu">
                                <span>
                                   <FaChartPie/>
                                </span>
                              Sales & Analytics </NavLink>
                            </li>
                            <li>
                              <NavLink to="/billing" className="btn btn-menu">
                                <span>
                                   <FaChartPie/>
                                </span>
                              Billing </NavLink>
                            </li>
                            <li>
                              <NavLink to="/contact" className="btn btn-menu">
                               <span>
                                  <FaComments/>
                               </span>
                              Support </NavLink>
                            </li>
                          </ul>
                          <div className="body-parnter-div d-inline-block w-100">
                                <div className="row row-cols-1 row-cols-lg-3 g-5 mt-5">

                                  {
                                    ParnterlistData.map((curElem) =>{
                                        const { id, imag, titel, offter, description, link } = curElem;
                                        return(
                                            <>
                                        
                                            <div className="col">
                                                    <NavLink to={link} className="comon-lins-ac text-center d-grid align-content-center w-100">
                                                        <div className="img-oick">
                                                            <img alt="img" src={imag}/>
                                                        </div>
                                                        <h5 className="mt-4"> {titel} </h5>
                                                        <p className="mt-4"> {description} </p>
                                                        <ul>
                                                          {
                                                            offter.map(offter => 
                                                                <li key={offter}> {offter} </li> )
                                                           }
                                                        </ul>
                                                    </NavLink>
                                                </div>
                                            </>
                                        );
                                        })
                                    }
            
                                    
                                </div>

                                <div className="feed-back d-inline-block w-100">
                                   <div className="row align-items-center">
                                      <div className="col-lg-9">
                                        <h2 className="text-white"> Give us feedback </h2>
                                        <p className="text-white my-3"> Tell us your preferences to personalize your 
                                        shopping experience. </p>
                                        <Link to="/" className="btn btn-texr"> How are we doing? <span> <FaExternalLinkAlt/> </span> </Link>
                                      </div>
                                      <div className="col-lg-3">
                                        <figure className="m-0">
                                          <img alt="feedback" src="images/feedback.png"/>
                                        </figure>
                                      </div>
                                   </div>
                                </div>
                          </div>
                 </div>
             </section>
             
          </main>
        </>
    )
}
export default PartnerDashoard;