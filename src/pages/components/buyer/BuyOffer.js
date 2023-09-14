import React, { useState } from "react";
import Allofferlist from "./BuyerOfferapi";

function BuyOffer() {
    const [ AllofferlistData, setAllofferlistData] =useState(Allofferlist);
    console.log(AllofferlistData);

    return(
        <>
        <div className="comon-list-grid">
           <div className="row row-cols-1 row-cols-lg-4 g-5">
                {
                    AllofferlistData.map((curElem) =>{
                        const { id, imag, ratings,  titel, offprice, oldprice } = curElem;
                        return(
                            <>
                            <div className="col">
                           
                                <div class="offer-pro-deals d-d-inline-block">
                                    <div className="img-pro d-inline-block w-100">
                                        <img src={imag} alt="name"/>
                                    </div>
                                    <div className="details-section">
                                        <h5>{titel}</h5>
                                        <p> <img alt="sry" src={ratings} /> </p>
                                        <h3>${offprice}<span>${oldprice}</span> </h3>
                                    </div>
                                </div>

                            </div>
                            </>
                        );
                    })
                }
           </div>
        </div>
        </>
    )
}
export default BuyOffer;