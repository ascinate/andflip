import React from "react";
import { Link } from "react-router-dom";

function Join() {
    return(
        <>
          <div className="join-div d-inline-block w-100 mt-5">
             <figure>
                <img alt="ser" src="images/ads.jpg"/>
             </figure>
             <h5 className="mt-5 mb-4"> Join Ai-Jumble Plus to Unlock next level with Ai-jumble </h5>
             <Link to="/register" className="btn btn-register"> Join Plus & save today </Link>
          </div>
        </>
    );
}
export default Join;