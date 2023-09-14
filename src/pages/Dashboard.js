import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Dashbordlink from "./components/dashbord/Dashboardapi";
import SubBanner from "./components/SubBanner";
import LoginHeader from "../LoginHeader";

function Dashboard() {
    document.title="AndFilp - Dashboard"

    useEffect(() => {

        window.scrollTo(0, 0)
      });

    const [ DashbordlinkData, setDashbordlinkData] =useState(Dashbordlink);
    console.log(DashbordlinkData);

     return(
        <>
        <LoginHeader/>
        <SubBanner indexpage="Home" indexvisit="/" activepage="Dashboard"/>
        <main className="float-start w-100 body-part-main dsh-page">
            
           <div className="dashboard-page d-inline-block w-100">
              <div className="top-sectyu">
                <div className="container">
                    <div className="row  top-bah align-items-center">
                        <div className="col-lg-8">
                           <h2> Hello Jamew </h2>
                           <div className="under-line d-block w-100 mt-0"></div>
                           <p className="my-3"> It is a long established fact that a reader will be distracted by the readable. </p>
                        </div>
                       
                    </div>

                    <div className="row row-cols-1 row-cols-lg-4 g-5 mt-5">

                    {
                        DashbordlinkData.map((curElem) =>{
                            const { id, imag, titel, description, link } = curElem;
                            return(
                                <>
                            
                                <div className="col">
                                        <NavLink to={link} className="comon-lins-ac text-center d-grid align-content-center w-100">
                                            <div className="img-oick">
                                                <img alt="img" src={imag}/>
                                            </div>
                                            <h5 className="mt-4"> {titel} </h5>
                                            <p className="mt-4"> {description} </p>
                                        </NavLink>
                                    </div>
                                </>
                            );
                          })
                      }

                       
                    </div>
                </div>
              </div>

             
              
           </div>
        </main>
        </>
     );
}
export default Dashboard;