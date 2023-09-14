import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaChartPie, FaCheck, FaComments } from "react-icons/fa";
import { FiPlus, FiUser } from "react-icons/fi";

function BuyerMenu() {
    return(
        <>
        <ul className="d-flex align-items-center mt-5 justify-content-center speicl-menu">
                        
            <li>
                <NavLink to="/buyerdashboard" className="btn btn-menu">
                <span> <FaThLarge/> </span>
                Order History </NavLink>
            </li>
            <li>
                <NavLink to="/profile" className="btn btn-menu">
                <span>
                    <FiUser/>
                </span> Profile </NavLink>
            </li>
            <li>
                <NavLink to="/buyerbookmark" className="btn btn-menu">
                <span>
                    <FaChartPie/>
                </span>
                Bookmark/Wishlist </NavLink>
            </li>

            <li>
                <NavLink to="/buyeroffer" className="btn btn-menu">
                <span>
                    <FaChartPie/>
                </span>
                Offers </NavLink>
            </li>
            
        </ul>
        </>
    );
}
export default BuyerMenu;