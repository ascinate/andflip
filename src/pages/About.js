import React, { useState, useEffect } from "react";
import Teams from "./components/About/Teams";
import TestimonialSlid from "./components/About/TestimonialSlid";
import FaqSection from "./components/About/FaqSection";
import SubBanner from "./components/SubBanner";
import Header from "../Header";
import { Link, NavLink } from "react-router-dom";

function About(){
    document.title="AndFilp - About"

    
  useEffect(() => {

   window.scrollTo(0, 0)
 });

    const SatisNumber = [
      {id: 1, number: '14,000', content: 'Products and services listed'},
      {id: 2, number: '40', content: 'Categorie products'},
      {id: 3, number: '500', content: 'discovering the latest B2B tools'},
      {id: 4, number: '150', content: 'Spent on advertising  products'},
    ];

    const Missiontext =[
      {id:1, img: "images/mission1.svg", heading:"Keep Getting Better", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry" },
      {id:2, img: "images/mission2.svg", heading:"Helping entrepreneurs", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry" },
      {id:3, img: "images/mission3.svg", heading:"Do Great Work", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry" },
    ]

    return(
        <>
        <Header/>
        <div className="about-banner float-start w-100">
           <div className="container">
              <h2 className="text-center"> Never pay full <span> price </span>
              for software again </h2>
              <p className="text-center text-white m-5 col-lg-4 mx-auto"> 1.5M+ entrepreneurs have saved
              $550,000,000 with us since 2010. </p>
           </div>
        </div>
        <main className="float-start w-100 body-part-main pt-0">
           
            <section className="top-part-divo about-color d-inline-block w-100">
               <div className="container">
                  <div className="row align-items-center g-5">
                     
                     <div className="col-lg-7">
                        <h2> We're the best for finding <br/>
                        Softwear & trainings </h2>
                        <div className="under-line d-block w-100"></div>
                        <p className="mt-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley </p>
                     <p className="mt-4"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).</p>
                     </div>

                     <div className="col-lg-5">
                        <figure className="m-0">
                        <img alt="about" src="images/founder.png"/>
                        </figure>
                        <div className="founder-details">
                         <h6> Founder</h6>
                          <h5> James Smith </h5>
                          <p> (loves tacos, hates paying full price for software) </p>
                        </div>
                     </div>

                  </div>
               </div>
            </section>

            <section className="howite-work d-inline-block w-100">
               <div className="container">
                   <h2 className="text-center main-heading-text"> How it works </h2>
                   <div class="under-line text-center d-block w-100 mt-0 mx-auto"></div>

                   <div className="row row-cols-1 row-cols-lg-3 g-5 mt-5">
                     <div className="col">
                        <div className="comon-works">
                           <figure>
                           <img alt="ser" src="images/9490249.png"/>
                           </figure>
                           <h4> Partner-powered </h4>
                           <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                           The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                     </div>

                     <div className="col">
                        <div className="comon-works">
                           <figure>
                           <img alt="ser" src="images/5412910.png"/>
                           </figure>
                           <h4> Big. Deals. </h4>
                           <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                           The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                     </div>

                     <div className="col">
                        <div className="comon-works">
                           <figure>
                           <img alt="ser" src="images/4240765.png"/>
                           </figure>
                           <h4> Yours forever</h4>
                           <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                           The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                     </div>
                   </div>


                   <div className="row row-cols-1 row-cols-lg-3 g-5 mt-5">
                      <div className="col">
                        <div className="listy-div">
                           <Link to="/about" className="btn abouty d-flex align-items-center">
                              <div className="lo-img">
                              <img alt="ser" src="images/6486bb69fcdd4e34ad245b29_zapier.svg"/>
                              </div>
                              <div className="zaptxt">
                              <p class="zptxtsc ms-5">$100M in ARR<br/> $5B valuation </p>
                              </div>
                           </Link>

                           <Link to="/about" className="btn abouty d-flex align-items-center">
                              <div className="lo-img">
                              <img alt="ser" src="images/6486bd0b434f84cfc95db950_krisp.svg"/>
                              </div>
                              <div className="zaptxt">
                              <p class="zptxtsc ms-5">$100M in ARR<br/> $5B valuation </p>
                              </div>
                           </Link>


                           <Link to="/about" className="btn abouty d-flex align-items-center">
                              <div className="lo-img">
                              <img alt="ser" src="images/649603e876c8b6e81de0db73_hopin-vector.svg"/>
                              </div>
                              <div className="zaptxt">
                              <p class="zptxtsc ms-5">$100M in ARR<br/> $5B valuation </p>
                              </div>
                           </Link>

                        </div>
                     </div>

                     <div className="col">
                        <div className="comon-works">
                           <figure>
                           <img alt="ser" src="images/2815530.png"/>
                           </figure>
                           <h4> Commitment-free </h4>
                           <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                           The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                     </div>

                     <div className="col">
                        <div className="comon-works">
                           <figure>
                           <img alt="ser" src="images/2329087.png"/>
                           </figure>
                           <h4> Your business,<br/>
                           Andfilp-sized </h4>
                           <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                           The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                     </div>
                   </div>


               </div>
            </section>

            <section className="satifaction-part jobs d-inline-block w-100">
               <div className="container">
                  <div className="row align-items-center g-5">
                      <div className="col-lg-6">
                          <h2> Helping
                          <span className="d-lg-block">
                          entrepreneurs </span> </h2>
                          <p> Lorem Ipsum is simply dummy text 
                          of the printing and typesetting industry. </p>
                          <figure className="mt-5">
                            <img alt="sty" src="images/61d63ea75026e2fe29320152_aboutus-group-lo.png"/>
                          </figure>
                      </div>
                      <div className="col-lg-6 d-grid justify-content-lg-end">
                         <div className="row row-cols-1 row-cols-lg-2 g-5">


                         {SatisNumber.map(function(data) {
                           return (
                             <div className="col">
                                <div className="numbtrx d-inline-block w-100">
                                  <h2> {data.number} + </h2>
                                  <p> {data.content} </p>
                                </div>
                            </div>
                           )
                          })}
                           
                            
                         </div>
                      </div>
                  </div>
               </div>
            </section>

          

            <section className="tesimonials-part d-inline-block w-100">
                   <div className="container">
                        <h5 className="text-center"> testimonial </h5>
                        <h2 className="text-center"> What they're saying about us </h2>
                        <div className="under-line text-center d-block w-100 mx-auto"></div>
                        <TestimonialSlid/>
                  </div>
            </section>

            <section className="sell-on d-inline-block w-100">
               <div className="container">
                 <div className="col-lg-9 mx-auto">
                    <div className="row row-cols-1 row-cols-lg-2 g-5">
                       <div className="col">
                         <div className="comon-diuvy">
                           <figure> 
                              <img alt="sui" src="images/3642114.png"/>
                           </figure>
                            <h5> Sell with <span className="text-white"> us </span> </h5>
                            <p> List your digital products.
                            Apply for AppSumo Select. </p>
                            <Link to="/about" className="btn btn-sel"> Start selling </Link>
                         </div>
                       </div>

                       <div className="col">
                         <div className="comon-diuvy">
                           <figure> 
                              <img alt="sui" src="images/3281172.png"/>
                           </figure>
                           <h5> Grow with <span className="text-white"> us </span> </h5>
                           <p> Work doesn’t have to suck.
                           Join our awesome team. </p>
                           <Link to="/about" className="btn btn-sel"> Explore roles </Link>
                         </div>
                        </div>
                    </div>
                 </div>
               </div>
            </section>

            <section className="faq-section d-inline-block w-100">
                  <div className="container">
                        <h5 className="text-center"> FAQ </h5>
                        <h2 className="text-center"> Questions About our AI Jumble? <span className="d-block">
                        We have Answers! </span> </h2>
                        <div className="under-line text-center d-block w-100 mx-auto"></div>
                        <FaqSection/>
                  </div>
            </section>
         </main>
        </>
    );
}
export default About;