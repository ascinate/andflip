import Reatc from "react";
import { FaStar , FaComments , FaCheck , FaExternalLinkAlt , FaBuffer } from "react-icons/fa";
import { FiShare2 , FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";


function TopDetails() {
     return(
        <>
        <div className="top-details-part">
                <div className="container">
                    <div className="row g-5">
                    <div className="col-lg-8">
                        <h2> <span> <FaBuffer/> </span> Sed pellentesque nibh. </h2>
                      

                        <div className="user-details-setion-div mt-5">
                            <div className="row">
                                <div className="col-lg-11">
                                    
                                    <div className="ratings d-flex align-items-center mt-3">
                                    <p className="text-rview">
                                        <span>
                                            <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                        </span>
                                        <span className="ms-3">
                                        
                                        13 Reviews </span>
                                    </p>
                                    <p className="ms-5 text-rview">  <FaComments/>  110 discussions </p>
                                    </div>
                                    <div className="user-box01 d-flex align-items-center mt-4">
                                    <figure className="m-0">
                                        <img alt="user" src="images/a1.jpeg"/>
                                    </figure>
                                    <span className="ms-4"> Jone Smith </span>
                                    </div>
                                </div>

                                <div className="col-lg-1">
                                    <button type className="btn btn-share">
                                        <FiShare2/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-details0">
                            <h2> Aliquam facilisis tortor vel mattis porttitor </h2>
                            <h5 className="my-3"> Lifetime deal </h5>
                            <p className="claim-text"> <span> <FaCheck/> Claimed  </span> <span className="ms-4"> <FaComments/> 110 discussions  </span> </p>
                            <p className="rivew-text d-flex align-items-center my-4"> <span> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </span> <span> 13 Reviews </span> </p>
                            <div className="d-flex align-items-center justify-content-between">
                                <h3> $25 <span className="ms-3"> $13</span> </h3>
                                <Link to="/productsclaims" className="btn btn-rport"> Report listing <span className="ms-2"> <FaExternalLinkAlt/> </span> </Link>
                            </div>
                            <Link to="/productdetails" className="btn w-100 btn-buy"> Buy Now</Link>

                            <p className="ofter-deals my-5"> Limited-time special pricing <b> starting at $20.</b> Grab this deal before it ends!</p>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        </>
     );
}
export default TopDetails;