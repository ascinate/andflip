import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSortUp } from "react-icons/fa";


function Topic() {
    const newpoext =[
        {id:1, titel:"Ask me anything", imgs:"images/icou1.png", page:"/commentdetails" },
        {id:2, titel:"Introduce yourself", imgs:"images/icou2.png", page:"/commentdetails" },
        {id:3, titel:"Artificial Intelligence", imgs:"images/icou3.png", page:"/commentdetails" },
        {id:4, titel:"Design", imgs:"images/icou4.png",  page:"/commentdetails" },
        {id:5, titel:"Development", imgs:"images/icou5.png", page:"/commentdetails" },
        
      ]

    return(
        <>
        <ul className="com-tabsg d-inline-block w-100 mt-5">
        {newpoext.map(function(data){

            return(
                <>
                 <li>
                   <Link to={data.page} className="comonlinkj d-flex align-items-center mb-4">
                     <span>
                       <img alt="o" src={data.imgs}/>
                     </span>
                     <span className="ms-4">{data.titel}</span>
                   </Link>
                 </li>
                </>
            );
        }
            
        
            )}
            
        </ul>
        </>
    );
}
export default Topic;