import React from "react";
import { NavLink } from "react-router-dom";

function Breadcrum(props) {
    return(
        <>

        <nav className="bedocu">
            <ol class="breadcrumb m-0">
                <li class="breadcrumb-item"><NavLink to={props.indexvisit}> {props.indexpage} </NavLink></li>
                <li class="breadcrumb-item active"> {props.activepage}</li>
            </ol>
        </nav>
        </>
    );
}
export default Breadcrum;