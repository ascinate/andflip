import React from "react";
import { FaLayerGroup ,FaChartPie, FaBullhorn, FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Marketing() {
    
    const glosteext =[
        {id:1, titel:"Single Sign-on (SSO)", page:"/glossary" },
        {id:2, titel:"Contact Center System", page:"/glossary" },
        {id:3, titel:"SIMM (Single In-line Me..", page:"/glossary" },
        {id:4, titel:"Contact Center System", page:"/glossary" },
        {id:5, titel:"Contact Center System", page:"/glossary" },
        {id:6, titel:"Contact Center System", page:"/glossary" },
      ]
     return(
        <>
        <div className="items-groccery d-inline-block w-100">
            <h5> <span className="me-3"> <FaBullhorn/> </span> Marketing Terms </h5>
                <ul className="mt-5 mb-4">
                
                {glosteext.map(function(data) {
                    return (
                        
                        <li>
                           <Link to={data.page}> <span> <FaCaretRight/> </span> {data.titel} </Link>
                        </li>
                    )
                   })}
                    
                </ul>
            <Link to="/glossary" className="btn btn-all"> View All </Link>
        </div>
        </>
     );
}
export default Marketing;