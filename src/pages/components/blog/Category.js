import React from "react";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";


function Category() {

    const Cateext =[
        {id:1, titel:"Accounting & Finance", postp:"15", page:"/blog" },
        {id:2, titel:"Education & Learning", postp:"40", page:"/blog" },
        {id:3, titel:"Accounting", postp:"5", page:"/blog" },
        {id:4, titel:"Marketing", postp:"10", page:"/blog" },
        {id:5, titel:"Program & Project Management", postp:"25", page:"/blog" },
        {id:6, titel:"Human Resources", postp:"4", page:"/blog" },
      ]

      
     return(
        <>
          
         <ul>
           {Cateext.map(function(data) {
            return (
                
                    <li>
                      <Link to={data.page}> <span> <FaCaretRight/> </span> {data.titel} ({data.postp})</Link>
                    </li>
            )
           })}
           </ul>
        </>
     );
}

export default Category;