import React from "react";

function Quoteform() {
    return(
        <>
        <div className="quote-dvi">
          <h5 className="subi-heading text-center"> Get a quote </h5>
          <h2 className="text-center mt-4"> How to build the perfect product </h2>
          <div className="under-line text-center d-block w-100"></div>
          <div className="form-sec col-lg-6 mx-auto">
             <form method="get" action="ps">
                 <div className="form-group">
                    <label> Email Address </label>
                    <input type="email" className="form-control" required/>
                 </div>

                 <div className="form-group">
                    <label> First Name </label>
                    <input type="text" className="form-control" required/>
                 </div>

                 <div className="form-group">
                    <label> Subject </label>
                        <select class="form-select" >
                        <option selected>select one</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                 </div>

                 <div className="form-group">
                    <label> Seniority </label>
                        <select class="form-select" >
                        <option selected>select one</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                 </div>

                 <p> By proceeding, you agree to our  Terms Of Use and 
                 Privacy Policy .</p>
                 <div className="form-group">
                    <input type="submit" className="btn btn-submito mt-4" value="Sumit query"/>
                 </div>
                
             </form>
          </div>
        </div>
        </>
    );
}
export default Quoteform;