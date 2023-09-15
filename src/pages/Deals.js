import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import Header from "../Header";
import { Link, NavLink } from "react-router-dom";
import PostDeals from "./components/deals/PostDeals";


function Deals() {
    document.title="AndFilp - Deals"
    useEffect(() => {

     window.scrollTo(0, 0)
   });
   const SatisNumber = [
      {id: 1, page: '/deals', content: 'All offers'},
      {id: 2, page: '/dealsdetils', content: 'Productivity'},
      {id: 3, page: '/dealsdetils', content: 'Forms and Workflow'},
      {id: 4, page: '/dealsdetils', content: 'Customer Support and Success'},
      {id: 5, page: '/dealsdetils', content: 'Marketing'},
      {id: 6, page: '/dealsdetils', content: 'Sales and CRM'},
      {id: 7, page: '/dealsdetils', content: 'Other SMB Tools'},
      {id: 8, page: '/dealsdetils', content: 'HR and Recruiting'},
      {id: 9, page: '/dealsdetils', content: 'Project Management'},
      {id: 10, page: '/dealsdetils', content: 'Artificial Intelligence (AI)'},
      {id: 11, page: '/dealsdetils', content: 'Social Media Management'},
    ];
     return(
        <>
        <Header/>
         <SubBanner indexpage="home" indexvisit="/" activepage="Deals" />
         <main className="float-start w-100 body-part-main">
             <section className="deals-page d-inline-block w-100">
                <div className="container">
                   <div className="row g-5">
                      <div className="col-lg-3">
                         <div className="left-links-deals">
                           <ul>
                           
                         {SatisNumber.map(function(data) {
                           return (
                              <li>
                                <NavLink to={data.page} className="btn btnlinks"> {data.content} </NavLink>
                              </li>
                           )
                          })}
                             
                           </ul>
                         </div>
                      </div>
                      <div className="col-lg-9">
                         <div className="top-search-div row">
                            <div className="form-grop col-lg-7 d-flex align-items-center">
                              <input type="text" className="form-control" placeholder="Search software deals"/>
                              <button type="button" className="btn btn-earch"> Search </button>
                            </div>
                            <div className="col-lg-5 d-flex align-items-center d-grid justify-content-end">
                            <span>Sort By:</span>
                               <div class="dropdown driop">
                                 <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Popularity
                                 </button>
                                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li> <Link class="dropdown-item" to="/deals">Latest</Link> </li>
                                    <li> <Link class="dropdown-item" to="/deals">Satisfaction</Link> </li>
                                    <li> <Link class="dropdown-item" to="/deals">Discount</Link> </li>
                                    <li> <Link class="dropdown-item" to="/deals">Alphabetical</Link> </li>
                                 </ul>
                              </div>
                            </div>
                         </div>


                         <PostDeals/>

                      </div>
                   </div>
                </div>
             </section>
         </main>
        </>
     );
}
export default Deals;