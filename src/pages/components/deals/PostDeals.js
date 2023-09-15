import React from "react";
import { Link } from "react-router-dom";

function PostDeals() {
    const SatisNumber = [
        {id: 1, imge: 'images/salesforce-salesforce-sales-cloud.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"Salesforce Sales Cloud", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},
        {id: 2, imge: 'images/hubspot-sales-hub.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"HubSpot Marketing Hub", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},
        {id: 3, imge: 'images/clickup.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"ClickUp", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},
        {id: 4, imge: 'images/salesforce-salesforce-sales-cloud.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"Salesforce Sales Cloud", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},
        {id: 5, imge: 'images/avoma.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"Salesforce Sales Cloud", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},
        {id: 6, imge: 'images/groupgreeting.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"Salesforce Sales Cloud", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},
        {id:7, imge: 'images/salesforce-salesforce-sales-cloud.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"Salesforce Sales Cloud", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},
        {id: 8, imge: 'images/salesforce-salesforce-sales-cloud.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"Salesforce Sales Cloud", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},
        {id: 9, imge: 'images/salesforce-salesforce-sales-cloud.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"Salesforce Sales Cloud", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},
        {id: 10, imge: 'images/salesforce-salesforce-sales-cloud.svg',discount:"20", page:"/deals", Categories:"Sales, Planningand12", titel:"Salesforce Sales Cloud", ratings:"images/ratings.png", count:"14",  content: 'Whether you’re ready to purchase today or prefer to try Essentials out for 14 days for free, you will receive 25% discount when you purchase via G2.        Prior to 25% discount, plans start at $25/per user per month.'},

      ];
    return(
        <>
         <div className="post-dection-div">
         
         {SatisNumber.map(function(data) {
            return (
                <div className="comon-post-deails">
                  <div className="row">
                    <div className="col-lg-9">
                        <div className="left-delas d-flex align-items-start">
                            <figure>
                            <img alt="sui" src={data.imge}/>
                            </figure>
                            <div className="details-pos-de">
                            <h5 className="titels05"> {data.titel} </h5>
                            <span className="d-flex mt-3">
                                <img alt="ser" src={data.ratings}/>
                                <b className="ms-3">({data.count})</b>
                            </span>
                            <p className="mt-3">{data.content}</p>
                                <h4 className="mt-3">Categories:<span> {data.Categories} </span> </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-grid justify-content-end">
                        <div className="right-delas-t">
                            <h5> Deals </h5>
                            <h6 className="mt-3"> {data.discount}% off </h6>
                            <Link to={data.page} className="btn btn-monr mt-4">
                            Learn More
                            </Link>
                        </div>
                    </div>
                  </div>
                </div>
            )
           })}
            
             

            
         </div>
        </>
    );
}
export default PostDeals;