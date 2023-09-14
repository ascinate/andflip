import React from "react";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";


function Tags() {

    const Cateext =[
        {id:1, titel:"Vestibulum", page:"/blog" },
        {id:2, titel:"Morbi", page:"/blog" },
        {id:3, titel:"Nullam", page:"/blog" },
        {id:4, titel:"Pellentesque", page:"/blog" },
        {id:5, titel:"Hampden", page:"/blog" },
      ]

      
     return(
        <>
          
         <ul>
            <li>
            {Cateext.map(function(data) {
                return (
                
                        
                        <Link to={data.page} className="btn btn-texr"> {data.titel}</Link>
                        
                
                )
            })}
           </li>
           </ul>
        </>
     );
}

export default Tags;