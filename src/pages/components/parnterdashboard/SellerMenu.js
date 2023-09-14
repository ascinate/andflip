import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus, FiUser } from "react-icons/fi";

function SellerMenu() {
    return(
        <>
        <ul className="d-flex align-items-center mt-5 justify-content-center speicl-menu">
                        
            <li>
                <NavLink to="/vendordashboard" className="btn btn-menu">
                <span> <FaThLarge/> </span>
                Listing </NavLink>
            </li>
            <li>
                <NavLink to="/sales" className="btn btn-menu">
                <span>
                    <FaChartPie/>
                </span>
                Sales & Billing </NavLink>
            </li>
            <li>
                <NavLink to="/venderprofile" className="btn btn-menu">
                <span>
                    <FiUser/>
                </span>
                Edit Profile </NavLink>
            </li>
        </ul>
        </>
    );
}
export default SellerMenu;