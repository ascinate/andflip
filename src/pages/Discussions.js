import React, { useEffect } from "react";
import SubBanner from "./components/SubBanner";
import Header from "../Header";
import Breadcrum from "../Breadcrum";
import { Link, NavLink } from "react-router-dom";
import NewPost from "./components/discussions/NewPost";
import Topic from "./components/discussions/Topic";
import Popularpostu from "./components/discussions/Popularpostu";
import Asku from "./components/discussions/Asku";

function Discussions() {
    document.title="Ai Jumble - Discussions"
    useEffect(() => {

        window.scrollTo(0, 0)
      });
     return(
        <>
         <Header/>
         <SubBanner indexpage="Home" indexvisit="/" activepage="Discussions"/>
         <main className="float-start w-100 body-part-main">
               
                <section className="disconinon-div">
                    <div className="container">

                        <div className="row g-5 mt-0">
                           <div className="col-lg-9">
                              <div className="tabs-discontion">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active"  data-bs-toggle="tab" data-bs-target="#now" type="button" role="tab">New</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link"  data-bs-toggle="tab" data-bs-target="#popular" type="button" role="tab">Popular</button>
                                        </li>
                                        
                                        <li class="nav-item dropdown">
                                            <button class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button">Now</button>
                                            <ul class="dropdown-menu">
                                                <li><button class="nav-link" data-bs-toggle="tab" data-bs-target="#week" type="button" role="tab">Week</button></li>
                                                <li><button class="nav-link" data-bs-toggle="tab" data-bs-target="#month" type="button" role="tab">Month</button></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="now" role="tabpanel">
                                           <NewPost/>
                                        </div>
                                        <div class="tab-pane fade" id="popular" role="tabpanel">
                                           <Popularpostu/>
                                        </div>
                                        <div class="tab-pane fade" id="week" role="tabpanel">
                                           <Popularpostu/>
                                        </div>
                                    </div>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <h3> TOPICS </h3>
                              <Topic/>

                              <hr className="my-5"/> 

                              <div className="more-comiu">
                                <h4> MORE IN ASK ME ANYTHING </h4>
                                <Asku/>
                              </div>

                           </div>
                        </div>
                    </div>
                </section>
         </main>
        </>
     );
}
export default Discussions;