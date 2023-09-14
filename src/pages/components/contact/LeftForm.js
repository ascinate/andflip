import React from "react";

import { FaPaperPlane } from "react-icons/fa";

function LeftForm() {
    return(
        <>
          <form method="get" action="pis">
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label> Full Name </label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label> Phone Number </label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label> Country </label>
                        <select class="form-select">
                            <option selected> Select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label> What are you interested in? </label>
                        <select class="form-select">
                            <option selected>Select one</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label> What are you interested in? </label>
                        <textarea className="form-control"></textarea>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                         <button type="submit" className="btn btn-message"> Submit Message <span> <FaPaperPlane/> </span> </button>
                    </div>
                </div>
            </div>
          </form>
        </>
    );
}
export default LeftForm;