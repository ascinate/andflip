import React, { useState , useEffect } from "react";
import { NavLink , Link } from "react-router-dom";
import { FiUser, FiMenu } from "react-icons/fi";
import Modal from 'react-modal';
import { FaTimesCircle , FaFileAlt} from "react-icons/fa";
import { FiBell, FiFileText } from "react-icons/fi";




function LoginHeader() {

    const noticeext =[
        {id:1, titel:"#1245 Angie's products delived ", time:"3Days" },
        {id:2, titel:"#5245 Dngie's products delived", time:"1Days" },
        {id:3, titel:"#2245 Angie's products delived", time:"10Days" },
        {id:4, titel:"#1245 Angie's products delived", time:"4Days" },
        {id:5, titel:"#1245 Angie's products delived", time:"3Days" },
        {id:6, titel:"#1245 Angie's products delived", time:"3Days" },
      ]

      const [scroll, setScroll] = useState(false);
      useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

    return(
      <>
      <header className={scroll ? "bg-black" : "bg-white"}>
        <div className="flote-start w-100">
            <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <NavLink class="navbar-brand" to="/">
                        <img alt="logo" src="images/logo.png" />
                        </NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                        <span class="">
                            <FiMenu/>
                        </span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                
                            
                                <li class="nav-item">
                                <NavLink class="nav-link" to="/about">About </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/aitools" class="nav-link">AI tools</NavLink>
                                </li>

                                <li class="nav-item">
                                    <NavLink to="/aitrainings" class="nav-link">AI Trainings</NavLink>
                                </li>

                                <li class="nav-item">
                                    <NavLink to="/listyourtool" class="nav-link">List your Tool</NavLink>
                                </li>

                                <li class="nav-item">
                                    <NavLink to="/blog" class="nav-link"> Blog </NavLink>
                                </li>

                                
                            
                            </ul>
                        
                        </div>
                        <div className="right-log-div">

                            <ul className="login-after d-flex align-items-center">

                                <li class="dropdown">
                                    <button class="btn bel-cions" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FiBell/>
                                        <span className="noi">1</span>
                                    </button>
                                    <ul class="dropdown-menu noti-drop" aria-labelledby="dropdownMenuButton1">
                                    {noticeext.map(function(data){
                                        return(
                                            <>
                                            <li>
                                                <div className="items-notif d-flex align-items-start">
                                                        <span> <FaFileAlt/> </span>
                                                        <span className="ms-2"> {data.titel} 
                                                        <b className="d-block">{data.time}</b>
                                                        </span>
                                                    </div>
                                                </li>
                                            </>
                                        );
                                    }
                                        
                                        
                                        )}
                                        
                                    
                                
                                    </ul>
                                </li>


                                <li class="dropdown ms-4">
                                    <button class="btn user-cions dropdown-toggle d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="user01">
                                        <img alt="bfh" src="images/userpic.png"/>
                                        </div>
                                        <span className="ms-3">Join Smith</span>
                                    </button>
                                    <ul class="dropdown-menu right-link-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <Link to="/dashboard" className="comon-dp-menu"> Account Overview </Link>
                                        </li>

                                        <li>
                                            <Link to="/products" className="comon-dp-menu"> Products </Link>
                                        </li>

                                        <li>
                                            <Link to="/vendordashboard" className="comon-dp-menu"> Vendor </Link>
                                        </li>

                                        <li>
                                            <Link to="/dashboard" className="comon-dp-menu"> Buyer </Link>
                                        </li>

                                        <li>
                                            <Link to="/studentdashboard" className="comon-dp-menu"> Student/Visitor </Link>
                                        </li>



                                        <li>
                                            <Link to="/" className="comon-dp-menu"> Logout </Link>
                                        </li>
                                    
                                
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
            </nav>
        </div>

       </header>
      </>
    );
    
}
export default LoginHeader;