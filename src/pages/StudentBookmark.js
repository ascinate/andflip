import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus, FiUser } from "react-icons/fi";
import LoginHeader from "../LoginHeader";
import Breadcrum from "../Breadcrum";
import StudentMenu from "./components/student/StudentMenu";

function StudentBookmark() {
    document.title="AndFilp - Student Bookmark"
    useEffect(() => {

        window.scrollTo(0, 0)
      });



    return(
        <>
        <LoginHeader/>
        <SubBanner name="Dashboard"/>
        <main className="float-start w-100 body-part-main dsh-page">
             <div className="container mb-5">
                 <Breadcrum indexpage="Home" indexvisit="/" activepage="Bookmark"/>
             </div>
           <section className="parnten-listing d-inline-block w-100">
              <div className="container">
                   <h2 className="text-center"> Student Portal </h2>
                   <div className="under-line text-center d-block w-100 mt-0"></div>
                      
                      <StudentMenu/>
                       <div className="body-sectionji d-inline-block w-100">
                                  <Link to="/addproduct" className="btn btn-adprocts ms-auto d-table mt-5"> <FiPlus/>   Add product </Link>

                       
                       </div>

                   </div>

                  
          
           </section>
        </main>
        </>
    );

}
export default StudentBookmark;