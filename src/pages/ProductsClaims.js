import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import Header from "../Header";
import Breadcrum from "../Breadcrum";

function ProductsClaims() {
    document.title="AndFilp - Product Claim"
    useEffect(() => {

        window.scrollTo(0, 0)
      });
    return(
        <>
        <Header/>
         <SubBanner name="Product Claim"/>
         <main className="float-start w-100 body-part-main dsh-page listingh-report">
            <div className="container mb-5">
                  <Breadcrum indexpage="Dashboard" indexvisit="/dashboard" activepage="Product"/>
            </div>
            <div className="container">
                 <h2 className="text-center"> Report a listing </h2>
                 <div className="under-line text-center d-block w-100 mt-0"></div>
                 <div className="mian-sections-1 col-lg-7 mx-auto d-table">
                    <h5 className="my-5"> Why are you reporting this listing? </h5>
                    <div className="inside-divuy w-100 mx-auto d-table">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                  Inappropriate content (i.e. copy, images)
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                   Misleading or unverifiable claims
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                <label class="form-check-label" for="flexRadioDefault3">
                                   Description is inaccurate or incorrect
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                                <label class="form-check-label" for="flexRadioDefault4">
                                  Copyright infringement
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
                                <label class="form-check-label" for="flexRadioDefault5">
                                   Other
                                </label>
                            </div>
                    </div>

                    <input type="submit" className="btn mt-5 btn-submit" value="Submit"/>

                 </div>
            </div>
         </main>
        </>
    );
}
export default ProductsClaims;