import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSortUp } from "react-icons/fa";


function Popularpostu() {
    const newpoext =[
        {id:1, titel:"Which social media software is suitable for marketing?", imgs:"images/author2.png", commnet:"7", useid:"Alex Kim", reply:"13", time:"13h ago",  page:"/commentdetails" },
        {id:2, titel:"What's your favorite AI project in product hunt?", imgs:"images/author2.png", commnet:"7", useid:"Alex Kim", reply:"13", time:"13h ago",  page:"/commentdetails" },
        {id:3, titel:"We've made Kombai to the #1 Product Of The Month. AMA about the launch.", imgs:"images/blogs-user.png", commnet:"7", useid:"Alex Kim", reply:"13", time:"13h ago",  page:"/commentdetails" },
        {id:4, titel:"What was your favourite launch in August?", imgs:"images/blogs-user.png", commnet:"7", useid:"Alex Kim", reply:"13", time:"13h ago",  page:"/commentdetails" },
        {id:5, titel:"What tool do you use for a Public roadmap?", imgs:"images/blogs-user.png", commnet:"7", useid:"Alex Kim", reply:"13", time:"13h ago",  page:"/commentdetails" },
        
      ]

    return(
        <>
        <div className="com-tabsg d-inline-block w-100">
        {newpoext.map(function(data){

            return(
                <>
                <div className="comon-items-teams">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="usert-links d-flex align-items-center">
                                <NavLink to={data.page} className="proiflu">
                                   <img alt="ser" src={data.imgs}/>
                                </NavLink>
                                <span className="ms-5 text-center">
                                <FaSortUp/>
                                <b className="d-block">{data.commnet}</b>
                                </span>
                            </div>
                            
                        </div>
                        <div className="col-lg-10">
                            <h4> <Link to={data.page} className="titel">{data.titel} </Link> </h4>
                            <ul>
                                <li>
                                <Link to={data.page} className="btn"> {data.useid} in
                                 <b>  Marketing </b> </Link>
                                <Link to={data.page} className="btn">  {data.reply} replies </Link>
                                <span> {data.time}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </>
            );
        }
            
        
            )}
            
        </div>
        </>
    );
}
export default Popularpostu;