import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import { FaStar , FaComments , FaCheck , FaExternalLinkAlt , FaBuffer} from "react-icons/fa";
import { FiShare2 , FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import TopDetails from "./components/productdetails/TopDetails";
import ProductOverview from "./components/productdetails/ProductOverview";
import SimilarProduct from "./components/productdetails/SimilarProduct";
import ComapirProduct from "./components/productdetails/ComapirProduct";
import Plans from "./components/productdetails/Plans";
import Founder from "./components/productdetails/Founder";
import Qusetion from "./components/productdetails/Qusetion";
import Review from "./components/productdetails/Review";
import Header from "../Header";

function ProductDetails() {
    document.title="AndFilp - Product Details"
    useEffect(() => {

      window.scrollTo(0, 0)
    });
    return(
        <>
        <Header/>
        <SubBanner indexpage="Home" indexvisit="/" activepage="Product details"/>
        <main className="float-start w-100 body-part-main">

          <section className="details-page-div d-inline-block w-100">
            <div className="container">
              <div className="row g-5">
                  <div className="col-lg-8">

                      <h2 className="titel-heading">  <span> <FaBuffer/> </span> AI-powered browser extension that helps you reply to emails, reviews,
                      comments, and other customer messages in any language. </h2>
                      <p className="my-4"> BestRegards seamlessly integrates with Gmail, making
                       it super easy to reply to email threads. </p>
                       <p> From there, the AI will generate an appropriate reply based on the context 
                       of the email thread, all without any additional input. </p>
                    

                      <div className="tabs-section-details d-inline-block w-100 mt-5">
                 
                      
                        
                            <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item" role="presentation">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#overview"
                                  type="button" role="tab">Overview</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#plans" type="button"
                                  role="tab" >Plans & features</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#founder" type="button" 
                                role="tab" >From the founders</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#questions" type="button" 
                                role="tab" >Questions</button>
                              </li>
    
                              <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#reviews" type="button" 
                                role="tab" >Reviews</button>
                              </li>
                            </ul>
                          <div class="tab-content insider01" id="myTabContent">
                            <div class="tab-pane fade show active" id="overview" role="tabpanel">
    
                              
                                  <div className="inside-diuv d-inline-block w-100">
                                      <ProductOverview/>
                                  </div>
                                
                            </div>
                            <div class="tab-pane fade" id="plans" role="tabpanel">
                                  <Plans/>
                                
                                
                            </div>
                            <div class="tab-pane fade" id="founder" role="tabpanel">
                             
                                <Founder/>
                            </div>
                            <div class="tab-pane fade" id="questions" role="tabpanel">
                                
                                  <Qusetion/>
                                
                            </div>
                            <div class="tab-pane fade" id="reviews" role="tabpanel">
                                
                                  <Review/>
                                
                            </div>
                          </div>
                      </div> 
                      
                  </div>
                  <div className="col-lg-4">
                      <div className="right-details0">
                          <h2> Aliquam facilisis tortor vel mattis porttitor </h2>
                          <h5 className="my-3"> Lifetime deal </h5>
                          <p className="claim-text"> <span> <FaCheck/> Claimed  </span> <span className="ms-4"> <FaComments/> 110 discussions  </span> </p>
                          <p className="rivew-text d-flex align-items-center my-4"> <span> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </span> <span> 13 Reviews </span> </p>
                          <div className="d-flex align-items-center justify-content-between">
                              <h3> $25 <span className="ms-3"> $13</span> </h3>
                              <Link to="/productsclaims" className="btn btn-rport"> Report listing <span className="ms-2"> <FaExternalLinkAlt/> </span> </Link>
                          </div>
                          <Link to="/productdetails" className="btn w-100 btn-buy"> Buy Now</Link>

                          <p className="ofter-deals my-5"> Limited-time special pricing <b> starting at $20.</b> Grab this deal before it ends!</p>
                      </div>
                  </div>
              </div>
            </div>
             
          </section>


          <section className="sliminlar-products d-inline-block w-100">

                <div className="container">
          
                    <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" data-bs-toggle="tab" 
                        data-bs-target="#similarproduct" type="button" role="tab">Similar Product</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#compairproduct" type="button" role="tab" 
                        >Compair Product</button>
                      </li>
                      
                    </ul>

                </div>
                <div class="tab-content insider02" id="myTabContent">
                  <div class="tab-pane fade show active" id="similarproduct" role="tabpanel">
                      <div className="container">
                         <SimilarProduct/>
                      </div>
                  </div>
                  <div class="tab-pane fade" id="compairproduct" role="tabpanel">
                     <div className="container">
                        <ComapirProduct/>
                     </div>
                      
                  </div>
                  
                </div>
          </section>

          
           
        </main>
        </>
    );
    
}
export default ProductDetails;