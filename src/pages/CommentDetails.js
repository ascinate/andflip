import React,{useEffect, useState} from "react";
import SubBanner from "./components/SubBanner";
import Header from "../Header";
import Breadcrum from "../Breadcrum";
import { Link, NavLink } from "react-router-dom";
import { FaSortUp, FaEllipsisV, FaIdBadge, FaHockeyPuck, FaFolder } from "react-icons/fa";
import MoreInfo from "./components/discussions/MoreInfo";
import Asku from "./components/discussions/Asku";
import Topic from "./components/discussions/Topic";


function CommentDetails() {
    document.title="AndFilp - Discussions"
    useEffect(() => {

        window.scrollTo(0, 0)
      });
      const [ show, setShow ] = useState(false);
     


    return(
        <>
          <Header/>
          <SubBanner indexpage="Discussions" indexvisit="/discussions" activepage="We've made Kombai to the #1 Product Of The Month"/>
          <main className="float-start w-100 body-part-main">
             
              <section className="disconinon-div">
                 <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-9">
                            <div className="left-commnets d-inline-block w-100">
                                <div className="row">
                                    <div className="col-1">
                                        <span className="text-center spoi">
                                        <FaSortUp/>
                                        <b className="d-block text-center"> 7 </b>
                                        </span>
                                    </div>
                                    <div className="col-11">
                                        <h2>  We've made Kombai to the #1 Product Of The Month.
                                         AMA about the launch. <span> <img alt="sty" src="images/shiui.jpg"/>  </span>  </h2>
                                         <ul className="d-flex align-items-center">
                                            <li>
                                            <Link to="/" className="btn p-0"> SOURABH UPRETI </Link>
                                            </li>
                                            <li>
                                            10h ago
                                            </li>
                                            <li>
                                            2 replies
                                            </li>
                                        </ul>

                                        <div className="commmnets-div">
                                           <p> Hello product hunters! We launched sivi.ai in the first week of June and became the product of the day,
                                            week, and marketing product of the month!</p>
                                            <p> This was our first general access launch and we are thrilled to share that within 8 weeks our users from 135+ countries have generated over 100,000 designs using Sivi. We greatly appreciate your participation and support during this journey!
                                            </p>
                                            <p> I'll be here for the next 48 hours to answer any questions you might have. So, let's get the conversation started! 
                                            </p>
                                            <p> I'll be here for the next 48 hours to answer any questions you might have. So, let's get the conversation started! 
                                            </p>
                                        </div>

                                        <div className="form-section-coments">
                                            <form method="get" action="apo">
                                                <Link to="/" className="mb-0 btn d-inline-block">
                                                <img alt="sy" src="images/blogs-user.png"/>
                                                </Link>
                                                <textarea placeholder="Reply to SOURABH UPRETI" className="form-control"></textarea>
                                                <button type="submit" className="btn btn-comnets"> Send Message </button>
                                            </form>
                                        </div>


                                        <hr className="my-5"/>

                                        <h4 className="my-4 rply-textr"> Replies </h4>
                                        <div className="replyu-div mt-5">
                                            <div className="comon-reply-dui">
                                                <div className="row g-0">
                                                   <div className="col-1 p-0">
                                                        <Link to="/" className="btn uierid p-0 d-flex align-items-center">
                                                            <img alt="sty" src="images/author1.png"/>
                                                           
                                                        </Link>
                                                   </div>
                                                   <div className="col-11">
                                                        <div className="textr mt-0">
                                                            <span className=""> Senthilnathan <b> RM@senthil99nathan </b>
                                                            </span>
                                                            <div className="boder-rte-sec01">
                                                                <p> Hey Sourabh, congrats again! That's big news. A few questions: </p>
                                                                <ol className="ms-4 mt-2 p-0"> 
                                                                <li>Did you do anything specific to become the #1 product of the week/month? If yes, what are they?
                                                                </li>
                                                                <li>Can you share your outcomes of the launch (traffic, prospects, customers, revenue, etc)?
                                                                </li>
                                                                <li>
                                                                Share any underrated pointers that you think could help others with their launches.
                                                                </li>
                                                                </ol>

                                                                <div className="share-option01 mt-4">
                                                                    <ul className="d-flex align-items-center">
                                                                    <li>
                                                                       <button type="button" data-bs-toggle="modal" data-bs-target="#replyModal" className="btn p-0">  Reply </button>
                                                                     </li>
                                                                    <li class="dropdown">
                                                                    <button class="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        Share
                                                                    </button>
                                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                        <li><Link class="dropdown-item" to="/">facebook</Link></li>
                                                                        <li><Link class="dropdown-item" to="/">Twitter </Link> </li>
                                                                        
                                                                    </ul>
                                                                    </li>
                                                                    <li>
                                                                        3h
                                                                    </li>
        
                                                                    <li class="dropdown">
                                                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <FaEllipsisV/>
                                                                    </button>
                                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#">Report</a></li>
                                                                    </ul>
                                                                    </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                       
                                                   </div>
                                                </div>
                                                
                                                
                                            </div>

                                            <div className="inside-reply">
                                                <div className="comon-reply-dui">
                                                  <div className="row g-0">
                                                      <div className="col-1 p-0">
                                                            <Link to="/" className="btn uierid p-0 d-flex align-items-center">
                                                              <img alt="sty" src="images/author2.png"/>
                                                               
                                                           </Link>
                                                     </div>
                                                     <div className="col-11">
                                                            <div className="textr mt-0">
                                                            <span> Senthilnathan <b> RM@senthil99nathan </b>
                                                            </span>
                                                             <div className="boder-rte-sec01">
                                                            
                                                                <p> Thats such an impressive results! Congrats! How long have you been preparing for the launch? </p>
                                                                
                                                                <div className="share-option01 mt-4">
                                                                <ul className="d-flex align-items-center">
                                                                <li>
                                                                       <button type="button" data-bs-toggle="modal" data-bs-target="#replyModal" className="btn p-0">  Reply </button>
                                                                </li>
                                                                <li class="dropdown">
                                                                <button class="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Share
                                                                </button>
                                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><Link class="dropdown-item" to="/">facebook</Link></li>
                                                                    <li><Link class="dropdown-item" to="/">Twitter </Link> </li>
                                                                    
                                                                </ul>
                                                                </li>
                                                                <li>
                                                                3h
                                                                </li>
            
                                                                <li class="dropdown">
                                                                <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <FaEllipsisV/>
                                                                </button>
                                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a class="dropdown-item" href="#">Report</a></li>
                                                                </ul>
                                                                </li>
                                                                </ul>
                                                                </div>

                                                             </div>


                                                            </div>
                                                     </div>
                                                  </div>
                                                
                                                
                                                
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div className="replyu-div mt-4">
                                            <div className="comon-reply-dui">
                                                <div className="row g-0">
                                                   <div className="col-1 p-0">
                                                        <Link to="/" className="btn uierid p-0 d-flex align-items-center">
                                                            <img alt="sty" src="images/blogs-user.png"/>
                                                           
                                                        </Link>
                                                   </div>
                                                   <div className="col-11">
                                                        <div className="textr mt-0">
                                                            <span className=""> Senthilnathan <b> RM@senthil99nathan </b>
                                                            </span>
                                                            <div className="boder-rte-sec01">
                                                                <p> Hey Sourabh, congrats again! That's big news. A few questions: </p>
                                                                <ol className="ms-4 mt-2 p-0"> 
                                                                <li>Did you do anything specific to become the #1 product of the week/month? If yes, what are they?
                                                                </li>
                                                                <li>Can you share your outcomes of the launch (traffic, prospects, customers, revenue, etc)?
                                                                </li>
                                                                <li>
                                                                Share any underrated pointers that you think could help others with their launches.
                                                                </li>
                                                                </ol>

                                                                <div className="share-option01 mt-4">
                                                                    <ul className="d-flex align-items-center">

                                                                     <li>
                                                                       <button type="button" data-bs-toggle="modal" data-bs-target="#replyModal" className="btn p-0">  Reply </button>
                                                                     </li>
                                                                    
                                                                    <li class="dropdown">
                                                                    <button class="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        Share
                                                                    </button>
                                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                        <li><Link class="dropdown-item" to="/">facebook</Link></li>
                                                                        <li><Link class="dropdown-item" to="/">Twitter </Link> </li>
                                                                        
                                                                    </ul>
                                                                    </li>
                                                                    <li>
                                                                        3h
                                                                    </li>
        
                                                                    <li class="dropdown">
                                                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <FaEllipsisV/>
                                                                    </button>
                                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#">Report</a></li>
                                                                    </ul>
                                                                    </li>
                                                                    </ul>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                       
                                                   </div>
                                                </div>
                                                
                                                
                                            </div>

                                            <div className="inside-reply">
                                                <div className="comon-reply-dui">
                                                  <div className="row g-0">
                                                      <div className="col-1 p-0">
                                                            <Link to="/" className="btn uierid p-0 d-flex align-items-center">
                                                              <img alt="sty" src="images/author2.png"/>
                                                               
                                                           </Link>
                                                     </div>
                                                     <div className="col-11">
                                                            <div className="textr mt-0">
                                                            <span> Senthilnathan <b> RM@senthil99nathan </b>
                                                            </span>
                                                             <div className="boder-rte-sec01">
                                                            
                                                                <p> Thats such an impressive results! Congrats! How long have you been preparing for the launch? </p>
                                                                
                                                                <div className="share-option01 mt-4">
                                                                <ul className="d-flex align-items-center">
                                                                <li>
                                                                       <button type="button" data-bs-toggle="modal" data-bs-target="#replyModal" className="btn p-0">  Reply </button>
                                                                     </li>
                                                                <li class="dropdown">
                                                                <button class="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Share
                                                                </button>
                                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><Link class="dropdown-item" to="/">facebook</Link></li>
                                                                    <li><Link class="dropdown-item" to="/">Twitter </Link> </li>
                                                                    
                                                                </ul>
                                                                </li>
                                                                <li>
                                                                3h
                                                                </li>
            
                                                                <li class="dropdown">
                                                                <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <FaEllipsisV/>
                                                                </button>
                                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a class="dropdown-item" href="#">Report</a></li>
                                                                </ul>
                                                                </li>
                                                                </ul>
                                                                </div>

                                                             </div>


                                                            </div>
                                                     </div>
                                                  </div>
                                                
                                                
                                                
                                                </div>
                                            </div>
                                            
                                        </div>


                                    </div>
                                </div>
                                
                                
                                
                            </div>
                            
                            
                            </div>
                            <div className="col-lg-3">
                                <div className="right-usert">
                                    <div className="row">
                                        <div className="col-3">
                                        <span className="ui">
                                        <img alt="syu" src="images/userpic.png"/>
                                        </span>
                                        </div>
                                        <div className="col-9">
                                           <h5> SOURABH UPRETI
                                            <span className="d-block mt-2"> Marketing @ Kombai </span>
                                           </h5>
                                        </div>
                                    </div>
                                    <ul className="mt-4">
                                     <li>
                                     <span>
                                     <img alt="ser" src="images/birthda.jpg"/>
                                    </span> Joined Jul 2020
                                     </li>
                                     <li>
                                     <span>
                                     <img alt="ser" src="images/kpic.jpg"/>
                                    </span> 480 points
                                     </li>
                                     <li>
                                       <span>
                                         <img alt="ser" src="images/poi.jpg"/>
                                       </span> 2 products
                                     </li>
                                    </ul>
                                </div>

                                <div className="more-comiu">
                                   <h4> MORE BY SOURABH UPRETI </h4>
                                   <MoreInfo/>
                                </div>

                                <hr className="my-5"/>

                                <div className="more-comiu">
                                   <h4> MORE IN ASK ME ANYTHING </h4>
                                   <Asku/>
                                </div>

                                <hr className="my-5"/>

                                <h4 className="mt-5 mb-4"> Topic </h4>
                                <Topic/>


                            </div>
                        </div>
                 </div>
              </section>
          </main>
        </>
    );
}
export default CommentDetails;