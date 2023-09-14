import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import LeftForm from "./components/contact/LeftForm";
import FaqTabs from "./components/contact/FaqTabs";
import { FiMail , FiMessageCircle } from "react-icons/fi";
import Header from "../Header";


function Contact() {
    document.title="AndFilp - Contact"
    useEffect(() => {

      window.scrollTo(0, 0)
    });
    return(
        <>
          <Header/>
          <SubBanner indexpage="Home" indexvisit="/" activepage="Contact"/>
          <main className="float-start w-100 body-part-main">
           
              <div className="contact-up d-inline-block w-100">
                  <div className="container">
                      <div className="row g-5">
                         <div className="col-lg-7">
                            <h2> Let's connect. </h2>
                            <div className="under-line mt-0 d-block w-100"></div>
                            <p className="col-lg-8 mt-4 mb-5 sub-texr"> When we say let's touch base, we mean
                             it.Whatever you need, we're here.</p>
                             <LeftForm/>
                             
                         </div>
                         <div className="col-lg-5">
                            <div className="chat-support d-inline-block w-100">
                               <h5> More Support </h5>
                               <h2 className="text-white my-4"> Chat Support </h2>
                               <ul>
                                 <li>
                                  <span className="iconu">
                                    <FiMail/>
                                  </span>
                                  <span> support@example.com </span>
                                 </li>

                                 <li>
                                  <span className="iconu">
                                    <FiMessageCircle/>
                                  </span>
                                  <span> mail@example.com </span>
                                 </li>

                                 
                               </ul>
                            </div>

                            <p className="mt-5"> It is a long established fact that a reader will be distracted by the readable content
                             of a page when looking at its layout. The point of using Lorem Ipsum</p>

                         </div>
                      </div>

                      <div className="tabs-section d-inline-block w-100">
                          <h2 className="text-center"> Let's connect. </h2>
                          <div className="under-line text-center mt-0 d-block mx-auto w-100"></div>

                          <div className="tabgs-divu my-5">
                             <FaqTabs/>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
        </>
    );
}
export default Contact;