import React, { useState } from "react";
import Slider from "react-slick";
import PopularProducts from "./Popularapi";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function PopularSlider() {
     const [ productData, setproductData] =useState(PopularProducts);
     console.log(productData);

     const settings = {
        dots: true,
        infinite: true,
        nav:false,
        margin:60,
        speed: 500,
        slidesToShow:4,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
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
        <Slider {...settings}>

               
                {
                    productData.map((curElem) =>{
                        const { id, imag, tags, titel, description, offprice, oldprice } = curElem;
                        return(
                            <>
                        
                            <Link to="/" class="offer-pro-deals d-d-inline-block">
                                <div className="img-pro d-inline-block w-100">
                                    <img src={imag} alt="name"/>
                                </div>
                                <div className="details-section">
                                    <h6 className="btn tags-t"> {tags}</h6>
                                    <h5>{titel}</h5>
                                    <p>{description}</p>
                                    <h3>${offprice}<span>${oldprice}</span> </h3>
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
export default PopularSlider;