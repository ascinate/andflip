import React, { useState, useEffect } from "react";
import Teams from "./components/About/Teams";
import TestimonialSlid from "./components/About/TestimonialSlid";
import FaqSection from "./components/About/FaqSection";
import SubBanner from "./components/SubBanner";
import Header from "../Header";
import { NavLink } from "react-router-dom";

function About(){
    document.title="AndFilp - About"

    
  useEffect(() => {

   window.scrollTo(0, 0)
 });

    const SatisNumber = [
      {id: 1, number: '14,000', content: 'Products and services listed'},
      {id: 2, number: '40', content: 'Categorie products'},
      {id: 3, number: '500', content: 'Savings for our community'},
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
        <SubBanner indexpage="Home" indexvisit="/" activepage="About"/>
        <main className="float-start w-100 body-part-main">
           
            <section className="top-part-divo d-inline-block w-100">
               <div className="container">
                  <div className="row align-items-center g-5">
                     <div className="col-lg-5">
                        <figure className="m-0">
                        <img alt="about" src="images/about-pic.png"/>
                        </figure>
                     </div>
                     <div className="col-lg-7">
                        <h2> We're the best for finding <br/>
                        Softwear & trainings </h2>
                        <div className="under-line d-block w-100"></div>
                        <p className="mt-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley </p>
                     <p className="mt-4"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).</p>
                     </div>
                  </div>
               </div>
            </section>

            <section className="satifaction-part d-inline-block w-100">
               <div className="container">
                  <div className="row align-items-center g-5">
                      <div className="col-lg-4">
                          <h2 className="text-white"> Satisfaction <span className="d-lg-block">
                          entrepreneurs </span> </h2>
                          <p className="text-white"> Lorem Ipsum is simply dummy text 
                          of the printing and typesetting industry. </p>
                      </div>
                      <div className="col-lg-8 d-grid justify-content-lg-end">
                         <div className="row row-cols-1 row-cols-lg-2 g-5">


                         {SatisNumber.map(function(data) {
                           return (
                             <div className="col">
                                <div className="numbtrx d-inline-block w-100">
                                  <h2 className="text-white"> {data.number} + </h2>
                                  <p className="text-white"> {data.content} </p>
                                </div>
                            </div>
                           )
                          })}
                           
                            
                         </div>
                      </div>
                  </div>
               </div>
            </section>

            <section className="mission d-inline-block w-100">
               <div className="container">
                   <h2 className="text-center"> Our Mission </h2>
                   <div className="under-line text-center mt-0 d-block w-100 mx-auto"></div>

                   <div className="row row-cols-1 row-cols-lg-3 g-5 mt-4">
                   {
                     Missiontext.map(function(data){
                        return(
                           <div className="col">
                              <div className="comon-mission d-block text-center w-100">
                                 <figure>
                                    <img alt="src" src={data.img}/>
                                 </figure>
                                 <h5> {data.heading} </h5>
                                 <p> {data.description} </p>
                              </div>
                           </div>
                        )
                     })
                   }
                      
                   </div>
               </div>
               
            </section>

            <section className="team-sections-div01 d-inline-block w-100">
               <div className="container">
                     <h2 className="text-center"> Meet the team </h2>
                     <div className="under-line mt-0 text-center d-block w-100 mx-auto"></div>
                     <Teams/>
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