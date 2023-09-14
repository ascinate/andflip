import React ,{ useState } from "react";
import AllRecent from "./Recentpostapi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Recentlypost() {

    const [ AllRecentData, setAllRecentData] =useState(AllRecent);
    console.log(AllRecentData);

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
              slidesToShow: 4,
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
          <div className="recent-slider-post my-5">
              <Slider {...settings}> 
                {
                    AllRecentData.map((curElem) =>{
                        const { id, imag, date, author,authorimg, description, titel, links } = curElem;
                        return(
                            <>
                        
                            <Link to={links} class="items-rectly d-d-inline-block">
                                <div className="img-pro d-inline-block w-100">
                                    <img src={imag} alt="name"/>
                                </div>
                                <div className="details-section">
                                    <h5>{titel}</h5>
                                    <h6>{date}</h6>
                                    <div className="user-diuv d-flex align-items-center">
                                       <div className="author-pic">
                                          <img alt="s" src={authorimg}/>
                                       </div>
                                       <span className="ms-3">{author}</span>
                                    </div>
                                    <p className="mt-3">{description}</p>
                                    <span className="btn btn-more">Read more </span>
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
export default Recentlypost;