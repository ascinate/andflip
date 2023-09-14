import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import Header from "../Header";


function TermsConditions() {
    document.title="AndFilp - Terms & Conditions"

    useEffect(() => {

     window.scrollTo(0, 0)
   });
     return(
        <>
        <Header/>
         <SubBanner indexpage="Home" indexvisit="/" activepage="Terms & Conditions"/>
         <main className="float-start w-100 body-part-main">
           
            <div className="trurms">
                <div className="container">
                   <div className="comon-para mb-5">
                        <h2> Terms of Use </h2>
                        <div className="under-line mt-0 d-block w-100"></div>
                        <p> Last Modified: March 9, 2023 </p>
                        <p> Welcome to AiJumble! AiJumble provides a multidimensional digital marketplace where you can buy, sell, and engage with thousands of incredible products and entrepreneurs. But... here are our super-boring (but according to our lawyer, super-important) terms of use. They'll walk you through how our business operates, what you can expect from us, and what we expect from you. :)
                         Enjoy and thanks for being an awesome Sumo-ling! </p>
                        <p> Thanks, AiJumble Team </p>
                   </div>

                   <div className="comon-para mb-5">
                        <h2> 1. Acceptance of the Terms of Use </h2>
                        <div className="under-line mt-0 d-block w-100"></div>
                        <p> This document and the other documents that we reference below constitute our Terms of Use (the “Terms”). The Terms are a legally binding contract between you and 
                        Sumo Group, Inc. (“Ai-Jumble”, “we”, or “us”). </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                         galley of type and scrambled it to make a type specimen book. </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. </p>
                   </div>


                   <div className="comon-para mb-5">
                        <h2> 2. Roadmap of Rules </h2>
                        <div className="under-line mt-0 d-block w-100"></div>
                        <p> Here is a roadmap to help you understand the rules that are most relevant to you, depending on how you use the Services: </p>
                        <ul>
                          <li>
                          If you list a digital product or service (a “Product”) for sale through our Services, you also are agreeing to our Partner Terms.
                          </li>
                          <li>
                          If you purchase or seek to purchase Products on the , please pay close attention to Section 5.
                          </li>
                          <li>
                          If you participate in Affiliate Program, you are also agreeing to our Affiliate Publisher Service Agreement.
                          </li>
                          <li>
                          If you participate in Refer-a-Friend Program, you are also agreeing to our Refer-a-Friend Program Terms & Conditions.
                          </li>
                          <li>
                          If you are a third-party seeking to address a potential violation of your intellectual property rights, please pay close attention to Section 8.
                          </li>
                        </ul>
                   </div>

                   <div className="comon-para mb-5">
                        <h2> 3. Accessing the Services and Accounts </h2>
                        <div className="under-line mt-0 d-block w-100"></div>
                        <p> Here is a roadmap to help you understand the rules that are most relevant to you, depending on how you use the Services: </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        
                   </div>

                   <div className="comon-para mb-5">
                        <h2> 4. Using Our Services </h2>
                        <div className="under-line mt-0 d-block w-100"></div>
                        <p> Here is a roadmap to help you understand the rules that are most relevant to you, depending on how you use the Services: </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        
                   </div>

                   <div className="comon-para mb-5">
                        <h2> 5. Purchasing from Our Site </h2>
                        <div className="under-line mt-0 d-block w-100"></div>
                        <p> Here is a roadmap to help you understand the rules that are most relevant to you, depending on how you use the Services: </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        
                   </div>

                   <div className="comon-para mb-5">
                    <h2> 6. Your Content </h2>
                    <div className="under-line mt-0 d-block w-100"></div>
                    <p> Here is a roadmap to help you understand the rules that are most relevant to you, depending on how you use the Services: </p>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    
                   </div>


                </div>
            </div>
         </main>
        </>
     );
}
export default TermsConditions;