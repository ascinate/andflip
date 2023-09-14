import React , {useEffect} from "react";
import Slider from "react-slick";
import OfferSlider from "./components/home/OfferSlider";
import PopularSlider from "./components/home/PopularSlider";
import SliderReview from "./components/home/SliderReview";
import DiscoverProdcuts from "./components/home/DiscoverProdcuts";
import AiServices from "./components/home/AiServices";
import FeaturesTools from "./components/home/FeaturesTools";
import { FaStar, FaArrowRight, FaPaperPlane } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Header from "../Header";

function Home(){
  document.title="AndFilp - Home"


  useEffect(() => {

     window.scrollTo(0, 0)
   });


    return(
        <>
        <Header/>
          <section className="main-banner float-start w-100">
            <div className="container">
               <div className="row banner-inside-div g-5">
                  <div className="col-md-7">
                      <div className="left-ban-text d-block w-100">
                         <h1> Exclusive <span> Agency </span>
                         Provide  for  Resources </h1>
                         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                         Lorem Ipsum has been the industry's standard</p>

                        <div className="search-banner d-flex align-items-center">
                            <input type="text" className="form-control" placeholder="Search for software, services, category, industry…" />
                            <input type="submit" className="btn btn-seach" value="Search" />
                        </div>
                      </div>
                  </div>
                  <div className="col-md-5">
                     <div className="slider-div01">
                        <OfferSlider/>
                     </div>
                  
                  </div>
               </div>
            </div>
          </section>


          <main className="float-start w-100 body-part-main">
             <section className="top-slider-products d-inline-block w-100">
                  <div className="container">
                     <h2 className="text-center main-heading-text"> Most popular AI tools </h2>
                     <div className="under-line text-center d-block w-100 mx-auto"></div>

                     <div className="slider-popular d-inline-block w-100">
                         <PopularSlider/>
                     </div>

                     <Link to="/aitools" className="btn btn-see-all d-table mx-auto"> See all tools <span>
                       <FaArrowRight/>
                     </span> </Link>
                  </div>
             </section>

             <section className="testimonails-part d-inline-block w-100">
                <div className="container">
                    <div className="row align-items-center isider-div g-5">
                       <div className="col-md-6 col-lg-5">
                           <h6 className="subtext"> User Reviews </h6>
                           <h2 className="text-white"> What customers  
                          <span className="d-lg-block"> feedback about us </span> </h2>
                          <div className="d-sm-flex align-items-center w-100">
                             <figure className="m-0 riuo">
                               <img alt="review" src="images/userimg.png"/>
                             </figure>
                             <div className="right-rv mt-5 mt-sm-0">
                                <h5>
                                 <span>
                                   <FaStar/>
                                   <FaStar/>
                                   <FaStar/>
                                   <FaStar/>
                                   <FaStar/>
                                 </span>
                                 (4.8/5)
                                </h5>
                                <p className="text-white"> Based on 1,258 reviews </p>
                             </div>
                          </div>
                       </div>
                       <div className="col-md-6 col-lg-7">
                           <div className="slider-review">
                               <SliderReview/>
                           </div>
                       </div>
                    </div>
                </div>
             </section>

             <section className="top-sellings-discover d-inline-block w-100">
                <div className="container">
                    <h2 className="text-center main-heading-text"> Discover Top Selling AI Tools </h2>
                    <div className="under-line text-center d-block w-100 mx-auto"></div>

                    
                        <DiscoverProdcuts/>

                        <Link to="/aitools" className="btn btn-see-all d-table mx-auto"> See all tools <span> <FaArrowRight/> </span> </Link>
                </div>
             
             </section>

             <section className="ali-services d-inline-block w-100">
                <div className="container">
                    <h2 className="text-center main-heading-text"> Featured Tools </h2>
                    <div className="under-line text-center d-block w-100 mx-auto"></div>
                    
                     <FeaturesTools/> 
                    <Link to="/aitools" className="btn btn-see-all d-table mx-auto"> See all tools <span>
                    <FaArrowRight/>
                  </span> </Link>

                </div>
             </section>

             <section className="get-intouch d-inline-block w-100">
                 <div className="container">
                     <div className="row row-cols-1 row-cols-md-2 g-5">
                        <div className="col">
                           <figure className="m-0">
                              <img alt="call" src="images/get.svg"/>
                           </figure>
                        </div>
                        <div className="col">
                           <div className="right-form">
                              <h5> Get Suggestions </h5>
                              <h2> Exactly the way you <span className="d-lg-block"> 
                              want to </span> </h2>
                              <p> With a company that can provide everything you need to generate
                               awareness, drive traffic, connect with customers </p>
                              <form method="get" action="mj">
                                 <div className="row">
                                    <div className="col-lg-12">
                                       <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Your name" required/>
                                       </div>
                                    </div>

                                    <div className="col-lg-6">
                                       <div className="form-group">
                                          <input type="email" className="form-control" placeholder="Email*" required/>
                                       </div>
                                    </div>

                                    <div className="col-lg-6">
                                       <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Phone" required/>
                                       </div>
                                    </div>

                                    <div className="col-lg-12">
                                       <div className="form-group">
                                         <textarea className="form-control" placeholder="Tell Us About Project *" required></textarea>
                                       </div>
                                    </div>
                                    <div className="col-lg-12">
                                       <button type="submit" className="btn btn-sumbit"> Send Message <span className="ms-3">
                                         <FaPaperPlane/>
                                       </span> </button>
                                    </div>
                                 </div>
                                
                              </form>
                           </div>
                        </div>
                     </div>
                 </div>
             </section>

          </main>
        </>
    );
}
export default Home;
