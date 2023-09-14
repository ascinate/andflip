import React from "react";
import { Link } from "react-router-dom";

function MoreInfo() {
    const morewpoext =[
        {id:1, titel:"What is the most helpful feature (to your customers) in your product?",commnet:"7", page:"/commentdetails"},
        {id:2, titel:"What's your favorite AI project in product hunt?",  commnet:"5", page:"/commentdetails"},
        {id:3, titel:"What's your favorite AI project in product hunt?",  commnet:"4", page:"/commentdetails"},
        {id:4, titel:"What's your favorite AI project in product hunt?",  commnet:"2", page:"/commentdetails"},
        
      ]
    return(
        <>
         <div className="monr-div01">
         {morewpoext.map(function(data){

            return(
                <>
                <Link to={data.page} className="comoni-btn">
                    <h5> {data.titel}</h5>
                    <div className="d-flex align-items-center">
                    <span>{data.commnet} comment </span>
                    </div>
                </Link>
                </>
            );

         })}
           
         </div>
        </>
    );
}
export default MoreInfo;