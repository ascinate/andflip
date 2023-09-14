import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Overviewdetails from "./ProductsOverapi";

function ProductOverview() {
    const [ OverviewdetailsData, setOverviewdetailsData] =useState(Overviewdetails);
    console.log(OverviewdetailsData);

    const settings = {
        dots: true,
        infinite: true,
        nav:false,
        margin:60,
        speed: 500,
        slidesToShow:1,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
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
          <div className="slider-overviw col-lg-11">

                <Slider {...settings}>
                    


                    {
                        OverviewdetailsData.map((curElem) =>{
                            const { id, imag, paragraph, headingone, titel, description, headingtwo, lastdescription } = curElem;
                            return(
                                <>
                            
                                <div className="items-slider-details d-inline-block w-100">
                                    <h2> {titel} </h2>
                                    <p> {description} </p>
                                    <hr/>
                                    <h2> {headingone} </h2>
                                    <p> {paragraph} </p>

                                    <figure className="my-5">
                                    <img alt="sou" src={imag}/>
                                    </figure>

                                    <h2> {headingtwo}  </h2>

                                    <p> {lastdescription} </p>

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
export default ProductOverview;