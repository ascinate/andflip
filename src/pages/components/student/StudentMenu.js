import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus, FiUser } from "react-icons/fi";

function StudentMenu() {
    return(
        <>
        <ul className="d-flex align-items-center mt-5 justify-content-center speicl-menu">
                        
            
            <li>
                <NavLink to="/studentprofile" className="btn btn-menu">
                <span>
                    <FiUser/>
                </span> Profile </NavLink>
            </li>
            <li>
                <NavLink to="/studentdashboard" className="btn btn-menu">
                <span>
                    <FaChartPie/>
                </span>
                Wishlist </NavLink>
            </li>

            <li>
                <NavLink to="/studentoffer" className="btn btn-menu">
                <span>
                    <FaChartPie/>
                </span>
                Offers </NavLink>
            </li>
            
        </ul>
        </>
    );
}
export default StudentMenu;