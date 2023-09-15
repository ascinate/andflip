import React from "react";
import { Link } from "react-router-dom";
import {FaCheck} from "react-icons/fa";



function AwardWin() {

    
   const BestSell =[
    {id:1, page:"/tempalte", sales:"457", img: "images/inexus-hosting-website-template-amp-whmcs-template_309565-original.jpg", support:"4.4/5", price:"30", imgtools:"images/type-html5-2.svg", heading:"Techno -  Best IT Solution & Multi-Purpose  HTML5 Template", compy:"by DreamIT", rtingimg:"images/ratings.png", },
    {id:2, page:"/tempalte", sales:"457", img: "images/rundal-modern-multi-purpose-html5-template_287150-5-original.webp", support:"4.4/5", price:"30", imgtools:"images/type-html5-2.svg", heading:"Techno -  Best IT Solution & Multi-Purpose  HTML5 Template", compy:"by DreamIT", rtingimg:"images/ratings.png", },
    {id:3, page:"/tempalte", sales:"457", img: "images/gravity-multi-purpose-html-template_195940-original.jpg", support:"4.4/5", price:"30", imgtools:"images/type-html5-2.svg", heading:"Techno -  Best IT Solution & Multi-Purpose  HTML5 Template", compy:"by DreamIT", rtingimg:"images/ratings.png", },
    
  ]

     return(
        <>
        <div className="row row-cols-1 row-cols-lg-3 g-5 mt-0">

         {BestSell.map(function(data) {
            return (
             <div className="col">
                <div className="comon-temos d-inline-block w-100">
                   <Link to={data.page} className="img-post05">
                     <img alt="sr" src={data.img}/>
                   </Link>
                   <div className="detils-texr p-3">
                         <Link to="/" className="user-divu mt-3 d-flex align-items-start">
                             <div className="toolsi">
                             <img alt="sr" src={data.imgtools}/>
                             
                             </div>
                             <h6 className="ms-4"> {data.heading}
                             <span className="d-block"> by {data.compy} </span>
                             </h6>
                         </Link>
                         <div className="rating-section my-4 d-flex align-items-center justify-content-between">
                             <span>
                             <img alt="rating" src="images/ratings.png"/>
                             </span>
                             <span className="price">
                                 ${data.price}
                             </span>
                         </div>
                         <p> {data.sales} Sales </p>
                         <div className="rtuiop mt-4">
                             <span className="updater">
                             <b> <FaCheck/> </b>  {data.support}
                             </span>
                             <span className="supporty ms-5">
                              Support: {data.support}
                             </span>
                         </div>
                         <div className="d-flex align-items-center justify-content-between mt-5">
                             <Link to={data.page} className="btn details01"> Details </Link>
                             <Link to={data.page} className="btn livedemo"> Live Demo </Link>
                         </div>
                   </div>
                </div>
             </div>
            )
           })}
           
        </div>
        </>
     );
}
export default AwardWin;