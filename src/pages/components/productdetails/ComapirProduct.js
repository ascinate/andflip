import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Compair from "./CompairProducsapi";


function ComapirProduct() {

    const [ CompairData, setCompairData] =useState(Compair);
    console.log(CompairData);

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
              slidesToShow: 1,
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
          <div className="comonpro-slider d-inline-block w-100">
              <Slider {...settings}>


              {
                CompairData.map((curElem) =>{
                    const { id, imag, ratingnu, name, price, titel, desription, oldprice, ratimg } = curElem;
                    return(
                        <>
                    
                        <Link to="/productdetails" class="offer-pro-deals d-d-inline-block">
                            <div className="img-pro d-inline-block w-100">
                                <img src={imag} alt="name"/>
                            </div>
                            <div className="details-section">
                                <h5>{titel}</h5>
                                <p>{desription}</p>
                                <h6>{name}</h6>
                                <div className="rity">
                                <span className="strt02">
                                    <img alt="ser" src={ratimg} />
                                </span>
                                <span>({ratingnu})</span>
                                </div>
                                <h3>${price} / <span>${oldprice}</span> </h3>
                            </div>
                        </Link>
                        </>
                    );
                  })
              }
              
                  
              </Slider>
          </div>
        </>
    );
}
export default ComapirProduct;