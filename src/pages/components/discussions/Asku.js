import React from "react";
import { Link } from "react-router-dom";

function Asku() {
    const morewpoext =[
        {id:1, titel:"Share your LinkedIn and Twitter profile let's connect! (for launch tips and daily updates)",commnet:"7", page:"/commentdetails"},
        {id:2, titel:"What's your favorite AI project in product hunt?",  commnet:"4", page:"/commentdetails"},
        {id:3, titel:"What's your favorite AI project in product hunt?",  commnet:"6", page:"/commentdetails"}
        
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
export default Asku;