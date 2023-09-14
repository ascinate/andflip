import React , {useState} from "react";
import Slider from "react-slick";
import AllReviews from "./Reviewapi";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SliderReview() {
    const [ reviewData, setreviewData] =useState(AllReviews);
    console.log(reviewData);
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
              slidesToShow:1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow:1,
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
                    reviewData.map((curElem) =>{
                        const { id, imag, name, postion, ratings, titel, description} = curElem;
                        return(
                            <>
                        
                             <div className="items-slider-rev d-block">
                                <div className="user-divu d-flex align-items-center">
                                   <figure className="m-0">
                                      <img alt="user" src={imag}/>
                                   </figure>
                                   <h6> {name}
                                    <span className="d-block"> {postion} </span>
                                   </h6>
                                </div>
                                <div className="review-div">
                                    <span className="rting">
                                      <img alt="ratings" src={ratings}/>
                                    </span>
                                    <h5 className="text-white"> {titel} </h5>
                                    <p> {description} </p>
                                </div>
                             </div>
                            </>
                        );
                    })
                }

        </Slider>
        </>
     );
}
export default SliderReview;