import React from "react";
import { Link } from "react-router-dom";
import {FaCheck} from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";


function TempOffer() {

    
   const BestSell =[
    {id:1, page:"/tempalte", sales:"180",   heading:"Website Templates", details:"WordPress, HTML, CMS & E-Commerce Themes ",  numberItem:"18000", },
    {id:2, page:"/tempalte", sales:"180",  heading:"Website Templates", details:"WordPress, HTML, CMS & E-Commerce Themes ",  numberItem:"18000", },
    {id:3, page:"/tempalte", sales:"180", heading:"Website Templates", details:"WordPress, HTML, CMS & E-Commerce Themes ",  numberItem:"18000", },
    
   
    
  ]

     return(
        <>
        <div className="row align-items-center">
            <div className="col-lg-3">
               <div className="left-get">
                   <h5 className="text-white">Get <b> Unlimited Access </b> </h5>
                   <h2 className="text-white mt-4"> AndFilp </h2>
                   <ul className="mt-4">
                    <li>
                    <span>
                       <BsFillCircleFill/>
                    </span>
                    260K+ Premium Products 
                    </li>
                    <li>
                    <span>
                       <BsFillCircleFill/>
                    </span>
                    Unlimited Projects 
                    </li>
                    <li>
                    <span>
                       <BsFillCircleFill/>
                    </span>
                    Product Support 
                    </li>
                    <li>
                    <span>
                       <BsFillCircleFill/>
                    </span>
                    New Products Weekly 
                    </li>
                   </ul>
                   <Link to="/" className="btn btn-centerty"> Join Now from  $13.25/mo. </Link>
               </div>
            </div>
            <div className="col-lg-9">
               <div className="row row-cols-1 row-cols-lg-3">

                    {BestSell.map(function(data) {
                    return (
                        <div className="col">
                        <div className="comon-offert d-inline-block w-100">
                          
                            <div className="detils-texr p-3">
                                    <Link to="/" className="mt-3">
                                       
                                        <h6 className=""> {data.heading}
                                        </h6>

                                    </Link>
                                    <p className="my-3"> {data.details} </p>

                                    <p className="items mt-5"> <b> {data.sales} </b> Items </p>
                                    <p className="mt-3"> <b> {data.numberItem} </b> added this week  </p>
                                   
                                    
                                   <Link to="/template" className="vies-all btn mt-4"> View All </Link>
                            </div>
                        </div>
                        </div>
                    )
                    })}
              
               </div>
            </div>
        </div>
       
        </>
     );
}
export default TempOffer;