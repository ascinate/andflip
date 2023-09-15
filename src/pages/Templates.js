import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import Header from "../Header";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import BestSellTem from "./components/templates/BestSellTem";
import AwardWin from "./components/templates/AwardWin";
import NewestTemp from "./components/templates/NewestTemp";
import TempOffer from "./components/templates/TempOffer";
import DiscountTemp from "./components/templates/DiscountTemp";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Featureslist from "./components/templates/Featureslist";



function Templates() {
    document.title="AndFilp - Templates"
    useEffect(() => {

     window.scrollTo(0, 0)
   });


     return(
        <>
        <Header/>
         <SubBanner indexpage="home" indexvisit="/" activepage="Templates" />
         <main className="float-start w-100 body-part-main">
           
            <div className="trurms">
                <div className="container">
                   <div className="comon-tecmlates mt-5 mb-5">
                        <h2 className="text-center"> Monthly Bestsellers </h2>
                        <p className="text-center mt-3"> These popular HTML5 Templates reached the highest sales volume this month. </p>

                        <Link to="/templates" className="btn btn-alls d-table ms-auto"> View all <span> <FaAngleRight/> </span> </Link>
                       
                      <BestSellTem/>

                   </div>


                   <div className="comon-tecmlates mb-5">
                           <h2 className="text-center"> Award-Winning HTML5 Templates </h2>
                           <p className="text-center mt-3"> Meet the winners of TemplateMonster annual digital products award honored by the marketplace. </p>

                           <Link to="/templates" className="btn btn-alls d-table ms-auto"> View all <span> <FaAngleRight/> </span> </Link>
                           
                        <AwardWin/>

                  </div>


                  <div className="comon-tecmlates mb-5">
                           <h2 className="text-center"> Newest HTML5 Templates </h2>
                           <p className="text-center mt-3"> Check the latest products added to the marketplace. Fresh designs with the finest HTML5 CSS3 coding. </p>

                           <Link to="/templates" className="btn btn-alls d-table ms-auto"> View all <span> <FaAngleRight/> </span> </Link>
                           
                        <NewestTemp/>

                  </div>

                  <div className="ter-offert-div">
                     <div className="container">
                      <div className="inouy d-inline-block w-100">
                         <TempOffer/>
                      </div>
                     </div>
                  </div>



                  <div className="comon-tecmlates mb-5">
                     <div className="container">
                           <h2 className="text-center"> HTML5 Templates with Discount</h2>
                           <p className="text-center mt-3"> It's time to save on a new HTML5 theme </p>

                           <Link to="/templates" className="btn btn-alls d-table ms-auto"> View all <span> <FaAngleRight/> </span> </Link>
                           
                        <DiscountTemp/>
                     </div>
                  </div>


                  <div className="comon-tecmlates mb-5">
                           
                        <div className="continer">
                           <div className="row">
                             <div className="col-lg-4">
                               <div className="fetur-div d-inline-block w-100">
                                 <h2> Featured HTML5 Templates Author </h2>
                                 <div className="d-flex align-items-center mt-5">
                                    <figure>
                                      <img alt="syu" src="images/3W_Art_Logo.webp"/>
                                    </figure>
                                    <h4 className="ms-4"> 3WARTGE </h4>
                                 </div>
                                 <ul>
                                   <li>
                                     <span>
                                     Users Rating:
                                     </span>
                                     <span>
                                       21
                                     </span>
                                   </li>
                                   <li>
                                     <span>
                                     Products:
                                     </span>
                                     <span>
                                       <BsStarFill/>
                                       <BsStarFill/>
                                       <BsStarFill/>
                                       <BsStarFill/>
                                       <BsStarHalf/>
                                       <b>(2)</b>
                                     </span>
                                   </li>

                                   <li>
                                    <span>
                                    Sales:
                                    </span>
                                    <span>
                                       14
                                    </span>
                                    </li>
                                 </ul>
                              </div>
                                 
                             </div>
                             <div className="col-lg-8">
                                 <Featureslist/>
                             </div>
                           </div>
                        </div>

                  </div>

                </div>
            </div>
            <div className="comon-tecmlates trending-div d-inline-block w-100 mb-5">
                        <div className="container">
                           <h2 className="text-center"> Trеnding HTML5 Templates </h2>
                           <p className="text-center mt-3"> It's time to save on a new HTML5 theme </p>

                           <Link to="/templates" className="btn btn-alls d-table ms-auto"> View all <span> <FaAngleRight/> </span> </Link>
                           
                        <DiscountTemp/>
                     </div>
            </div>

            <div className="comon-tecmlates d-inline-block w-100 mb-5">
                        <div className="container">
                           <h2 className="text-center"> Bestsellers </h2>
                           <p className="text-center mt-3"> Discover our front runners. Industry-leading HTML5 bestsellers of all time. </p>

                           <Link to="/templates" className="btn btn-alls d-table ms-auto"> View all <span> <FaAngleRight/> </span> </Link>
                           
                        <DiscountTemp/>
                     </div>
            </div>

         </main>
        </>
     );
}
export default Templates;