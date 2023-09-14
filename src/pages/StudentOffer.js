import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus, FiUser } from "react-icons/fi";
import LoginHeader from "../LoginHeader";
import Breadcrum from "../Breadcrum";
import StudentMenu from "./components/student/StudentMenu";
import BuyOffer from "./components/buyer/BuyOffer";

function StudentOffer() {
    document.title="AndFilp - Student Offer"
    useEffect(() => {

        window.scrollTo(0, 0)
      });


      const buyerdt =[
        {id:1, titel:"Curabitur at odio",pic:"images/discoverp3.png", rigting:"images/rat-star.svg", page:"/", price:"20", oldprice:"$40" },
        {id:2, titel:"Education & Learning", pic:"images/discoverp3.png", rigting:"images/rat-star.svg", page:"/", price:"20", oldprice:"40" },
        {id:3, titel:"Accounting", page:"/",pic:"images/discoverp3.png", rigting:"images/rat-star.svg", price:"20", oldprice:"40" },
        {id:4, titel:"Marketing", page:"/", pic:"images/discoverp3.png", rigting:"images/rat-star.svg", price:"20", oldprice:"40" },
        {id:5, titel:"Program & Project Management",pic:"images/discoverp3.png", rigting:"images/rat-star.svg", page:"/", price:"20", oldprice:"40" },
        {id:6, titel:"Human Resources", pic:"images/discoverp3.png", rigting:"images/rat-star.svg", page:"/", price:"20", oldprice:"40" },
      ]


    return(
        <>
        <LoginHeader/>
        <SubBanner indexpage="Dashboard" indexvisit="/studentdashboard" activepage="Student Offer"/>
        <main className="float-start w-100 body-part-main dsh-page">
             
           <section className="parnten-listing d-inline-block w-100">
              <div className="container">
                      
                      <StudentMenu/>
                       <div className="body-sectionji d-inline-block w-100 mb-5">
                                 
                           <div className="row row-cols-1 row-cols-lg-4 g-5 mt-0">
                           {buyerdt.map(function(data){
                            return(
                                <>
                                <div className="col">
                                    <Link to="/" className="items-coffer d-inline-block w-100">
                                        <div className="img-boxui">
                                        <img alt="ser" src={data.pic}/>
                                        </div>
                                        <div className="ai-details text-center">
                                        <h5> Curabitur at odio </h5>
                                        <div className="rito">
                                            <img alt="srt" src={data.rigting}/>
                                        </div>
                                        <h3> ${data.price} <span> ${data.oldprice}</span> </h3>
                                        </div>
                                    </Link>
                                </div>
                                </>
                            );
                           })}
                              
                           </div>
                           
                       </div>

                   </div>

                  
          
           </section>
        </main>
        </>
    );

}
export default StudentOffer;