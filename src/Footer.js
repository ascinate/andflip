import React from "react";
import { Link,withRouter , NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaArrowRight } from "react-icons/fa";
import { FiArrowLeft , FiFilter } from "react-icons/fi";
import FilterSection from "./pages/components/ToolsListing/FilterSection";



function Footer() {


    return(
        <>
          <footer className="float-start w-100">
             
             <div className="container">
               
                 <div className="row row-cols-1 row-cols-lg-3 g-5">
                    <div className="col">
                       <div className="footer-compny">
                          <div className="logo-name01">
                            <NavLink to="/" className="fou">
                              <img alt="footer logo" src="images/fot-logo.png"/>
                            </NavLink>
                          </div>
                          <p className="my-4 loc-01"> Lorem Ipsum is simply dummy text of the printing and typesetting
                           industry. Lorem Ipsum has been the industry's standard</p>
                           <ul className="soclai d-flex align-items-center mt-5">
                             <li>
                               <Link to="/"> <FaFacebookF/> </Link>
                             </li>
                             <li>
                               <Link to="/"> <FaTwitter/> </Link>
                             </li>
                             <li>
                               <Link to="/"> <FaGoogle/> </Link>
                             </li>
                           </ul>
                       </div>
                    </div>
                    <div className="col d-lg-grid justify-content-center">
                       <h5 className="subm-ft text-white"> Quick Links </h5>
                       <ul className="main-fit mt-5 mt-lg-0">
                         <li>
                           <Link to="/about" className="min-lko"> <span className="ico"> <FaArrowRight/> </span> 
                          <span> About Us </span> </Link>
                         </li>

                           <li>
                              <Link to="/glossary" className="min-lko"> <span className="ico"> <FaArrowRight/> </span> 
                              <span> IT Glossary </span> </Link>
                           </li>

                           <li>
                           <Link to="/aitools" className="min-lko"> <span className="ico"> <FaArrowRight/> </span> 
                           <span> ALL AI tools </span> </Link>
                           </li>

                           <li>
                           <Link to="/dashboard" className="min-lko"> <span className="ico"> <FaArrowRight/> </span> 
                           <span> My Account </span> </Link>
                           </li>

                           <li>
                           <Link to="/discussions" className="min-lko"> <span className="ico"> <FaArrowRight/> </span> 
                           <span> Community </span> </Link>
                           </li>

                           <li>
                           <Link to="/aitrainings" className="min-lko"> <span className="ico"> <FaArrowRight/> </span> 
                           <span> ALL AI Trainings </span> </Link>
                           </li>
                           
                           



                       </ul>
                    </div>
                    <div className="col d-lg-grid justify-content-center">
                        <h5 className="subm-ft text-white"> Official Info </h5>
                        <ul className="address-fit">
                          <li className="text-white">
                          ADDRESS: <br/>
                          5919 Trussville Crossings Pkwy, USA
                          </li>

                          <li className="text-white">
                          Email: <br/>
                          exmaple@gmai.com
                          </li>

                          <li className="text-white">
                          Phone: <br/> 1800-258-2564
                          </li>

                        </ul>
                    </div>
                 </div>

                 <hr/>

                 <div className="row row-cols-1 row-cols-md-2 align-items-center g-4">
                   <div className="col">
                     <p className="text-white"> © Copyright 2023. All Rights Reserved by Ai Jubmble. </p>
                   </div>
                   <div className="col d-grid justify-content-md-end">
                      <ul className="lg-linksj">
                        <li>
                          <Link to="/terms&conditions" className="btn"> Legal Terms </Link>
                          <Link to="/privacy" className="btn"> Privacy Policy   </Link>
                          <Link to="/contact" className="btn"> Contact  </Link>
                        </li>
                      </ul>
                   </div>
                 </div>
             
             </div>
          
          </footer>


     



          <div class="offcanvas offcanvas-start" id="offcanvasExample">
            <div class="offcanvas-header">
              
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas">
                 <FiArrowLeft/>
              </button>
            </div>
            <div class="offcanvas-body">
                
                <div className="mobile-mennu">
                   <div data-bs-dismiss="offcanvas">
                      <NavLink to="/" className="logo-flo">
                         <img alt="ftlogo" src="images/logo.png"/>
                      </NavLink>
                   </div>
                   <ul>
                     <li data-bs-dismiss="offcanvas">
                       <NavLink to="/" className="mb-menu"> Home </NavLink>
                     </li>
                     <li data-bs-dismiss="offcanvas">
                       <NavLink to="/about" className="mb-menu"> About </NavLink>
                     </li>
                     <li data-bs-dismiss="offcanvas">
                       <NavLink to="/aitools" className="mb-menu"> AI tools </NavLink>
                     </li>
                     <li data-bs-dismiss="offcanvas">
                       <NavLink to="/aitrainings" className="mb-menu"> AI Trainings </NavLink>
                     </li>
                     <li data-bs-dismiss="offcanvas">
                       <NavLink to="/listyourtool" className="mb-menu"> List your Tool </NavLink>
                     </li>
                     <li data-bs-dismiss="offcanvas">
                       <NavLink to="/blog" className="mb-menu"> Blog </NavLink>
                     </li>
                   </ul>
                </div>

                <div className="socli-menu">
                   <ul>
                     <li>
                       <Link to="/" className="btn">
                          <FaFacebookF/>
                       </Link>

                       <Link to="/" className="btn">
                          <FaTwitter/>
                       </Link>

                       <Link to="/" className="btn">
                          <FaGoogle/>
                       </Link>
                     </li>
                   </ul>
                </div>
              
            </div>
          </div>


          <div class="offcanvas offcanvas-start" id="fiterdiv">
            <div class="offcanvas-header">
              
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas">
                 <FiFilter/>
              </button>
            </div>
            <div class="offcanvas-body">
                
                <div className="filter-div-mobile">
                   <FilterSection/>
                </div>
              
            </div>
          </div>


          
          <div class="modal fade reply-bton" id="replyModal">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Reply</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <div className="form-group">
                        <textarea className="form-control" placeholder="Type here"></textarea>
                     </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary1" data-bs-dismiss="modal">Send</button>
                  </div>
                </div>
              </div>
          </div>

        </>
    );
    
}
export default Footer;