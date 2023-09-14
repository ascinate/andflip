import React from "react";
import { Link, NavLink } from "react-router-dom";

function Error() {
  document.title="AndFilp - Error Page"
    return(
        <>
         
          <main className="float-start w-100 body-part-main">
             <section className="nopage-found">
                 <div className="container">
                    <div className="row">
                       <div className="col-lg-5">
                          <figure className="m-0">
                             <img alt="imsg" src="images/404-img.svg"/>
                          </figure>
                       </div>
                       <div className="col-lg-7">
                          <h2> 404 </h2>
                          <h4> Page not found </h4>
                          <p> The page you are looking for does not exist. How you got here is a mystery. 
                          But you can click the button below to go back to the homepage.</p>
                          <Link to="/" className="btn btn-home"> Home </Link>
                       </div>
                    </div>
                 </div>
             </section>
          </main>
        </>
    );

}
export default Error;