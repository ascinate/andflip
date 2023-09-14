import React from "react";
import Parnteraccount from "./components/partnerpotal/Parnteraccount";
import LoginHeader from "../LoginHeader";
import SubBanner from "./components/SubBanner";
import Breadcrum from "../Breadcrum";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus, FiUser, FiArrowLeft } from "react-icons/fi";
import Overview from "./components/partnerpotal/Overview";

function Billing() {
    document.title="AndFilp - Sales & Billing"
    return(
        <>
         <LoginHeader/>
         <SubBanner name="Dashboard"/>
         <main className="float-start w-100 body-part-main dsh-page">
            <div className="container mb-5">
                <Breadcrum indexpage="Dashboard" indexvisit="/vendordashboard" activepage="Sales & Billing"/>
           </div>
           
            <section className="parnten-listing billings-div d-inline-block w-100">
               <div className="container">
                    
                      <Link to="/sales" className="btn btn-back-btn"> <FiArrowLeft/> Back </Link>

                        <div className="body-sectionji d-inline-block w-100">
                          
                             
                            <div className="acount-partner d-inline-block w-100">
                               <h5 className="moni-head"> Partner account </h5>
                               <div className="col-lg-5 mt-4">
                                 <select class="form-select sopi">
                                    <option selected>MP - subrata.das23@yahoo.com</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                 </select>
                               </div>
                            </div>


                            <ul class="nav nav-tabs tayoi-01" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab">Overview</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#invoices" type="button" role="tab">Invoices</button>
                                </li>
                                
                            </ul>
                                <div class="tab-content tbahsg-div" id="myTabContent">
                                <div class="tab-pane fade show active" id="overview" role="tabpanel">
                                
                                    <Overview/>

                                </div>
                                <div class="tab-pane fade" id="invoices" role="tabpanel">...</div>
                               
                                </div>

                        </div>

                    </div>

                   
           
            </section>
         </main>
         
        </>
    );
}
export default Billing;