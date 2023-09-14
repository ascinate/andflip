import React from "react";
import { NavLink } from "react-router-dom";

function SubBanner(props) {
      return(
        <>
          <section className="float-start w-100 sub-banner-part">
              <div className="container">
                 <div className="inside-subbanner">
                    <nav className="bedocu">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><NavLink to={props.indexvisit}> {props.indexpage} </NavLink></li>
                            <li class="breadcrumb-item active"> {props.activepage}</li>
                        </ol>
                    </nav>
                 </div>
                 
              </div>
          </section>
        </>
      );
}
export default SubBanner;