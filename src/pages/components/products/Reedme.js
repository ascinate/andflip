import React, { useState } from "react";
import Allredeem from "./Reedmeapi";

function Reedme() {
    const [ AllredeemData, setAllredeemData] =useState(Allredeem);
    console.log(AllredeemData);

    return(
        <>
           <div className="row row-cols-1 row-cols-lg-4 g-5">
                {
                    AllredeemData.map((curElem) =>{
                        const { id, imag, tags, titel, description, offprice, oldprice } = curElem;
                        return(
                            <>
                            <div className="col">
                           
                                <div class="offer-pro-deals d-d-inline-block">
                                    <div className="img-pro d-inline-block w-100">
                                        <img src={imag} alt="name"/>
                                    </div>
                                    <div className="details-section">
                                        <h6 className="btn tags-t"> {tags}</h6>
                                        <h5>{titel}</h5>
                                        <p>{description}</p>
                                        <h3>${offprice}<span>${oldprice}</span> </h3>
                                    </div>
                                </div>

                            </div>
                            </>
                        );
                    })
                }
           </div>
        </>
    )
}
export default Reedme;