import React, { useState } from "react";
import Slider from "react-slick";
import OfferProducts from "./Bestofferapi";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function OfferSlider() {
     const [ productData, setproductData] =useState(OfferProducts);
     console.log(productData);

     const settings = {
        dots: true,
        infinite: true,
        nav:false,
        margin:60,
        speed: 500,
        slidesToShow:2,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
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
            breakpoint: 820,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
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
        <Slider {...settings}>

               
                {
                    productData.map((curElem) =>{
                        const { id, imag, titel, price, duration} = curElem;
                        return(
                            <>
                        
                            <Link to="/" class="offer-pro-deals d-d-inline-block">
                                <div className="img-pro d-inline-block w-100">
                                    <img src={imag} alt="name"/>
                                </div>
                                <div className="details-section">
                                    <h5>{titel}</h5>
                                    <h3>${price} / <span>{duration}</span> </h3>
                                </div>
                            </Link>
                            </>
                        );
                    })
                }
        </Slider>
        </>
     );
}
export default OfferSlider;