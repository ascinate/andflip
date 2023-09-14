import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AllReviews from "./Reviewapi";

function TestimonialSlid() {

    const [ reviewData, setreviewData] =useState(AllReviews);
    console.log(reviewData);


    const settings = {
        dots: true,
        infinite: true,
        nav:false,
        margin:70,
        speed: 500,
        slidesToShow:3,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <>
        <div className="slidert-siuv">
          <Slider {...settings}>

                 
          {
            reviewData.map((curElem) =>{
                const { id, imag, name, postion, ratings, titel, description} = curElem;
                return(
                    <>
                
                     <div className="items-slider-rev d-block">
                       
                        <div className="review-div">
                            <span className="rting">
                              <img alt="ratings" src={ratings}/>
                            </span>
                            <h5 className="text-white"> {titel} </h5>
                            <p> {description} </p>
                        </div>
                        <div className="user-divu d-flex align-items-center mt-4">
                            <figure className="m-0">
                               <img alt="user" src={imag}/>
                            </figure>
                            <h6> {name}
                            <span className="d-block"> {postion} </span>
                            </h6>
                        </div>
                     </div>
                    </>
                );
            })
          }

          </Slider>
        </div>
        </>
    );
}
export default TestimonialSlid;