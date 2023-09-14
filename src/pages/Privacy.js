import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import Header from "../Header";


function Privacy() {
    document.title="AndFilp - Privacy"
    useEffect(() => {

     window.scrollTo(0, 0)
   });
     return(
        <>
        <Header/>
         <SubBanner indexpage="home" indexvisit="/" activepage="Privacy" />
         <main className="float-start w-100 body-part-main">
           
            <div className="trurms">
                <div className="container">
                   <div className="comon-para mb-5">
                        <h2> Full Policy </h2>
                        <div className="under-line mt-0 d-block w-100"></div>
                        <p> Last Modified: March 9, 2023 </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                   </div>

                   <div className="comon-para mb-5">
                        <h5> 1. In vitae massa ac tellus rutrum congue sollicitudin sit amet velit </h5>
                        <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is 
                        therefore always free from repetition, injected humour, or non-characteristic words etc. </p>
                        
                   </div>


                   <div className="comon-para mb-5">
                        <h5> 2. Nunc eleifend nulla nec quam mattis, quis elementum odio aliquam </h5>
                        <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is 
                        therefore always free from repetition, injected humour, or non-characteristic words etc. </p>
                        
                   </div>

                   <div className="comon-para mb-5">
                        <h5>   3. Nunc eleifend nulla nec quam mattis, quis elementum odio aliquam </h5>
                        <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free 
                        from repetition, injected humour, or non-characteristic words etc. </p>
                      
                   </div>

                   <div className="comon-para mb-5">
                        <h5>   4. Nunc eleifend nulla nec quam mattis, quis elementum odio aliquam </h5>
                        
                        <p> Here is a roadmap to help you understand the rules that are most relevant to you, depending on how you use the Services: </p>
                       
                        
                   </div>

                   <div className="comon-para mb-5">
                        <h5>   5. Nunc eleifend nulla nec quam mattis, quis elementum odio aliquam </h5>
                       
                        <p> Here is a roadmap to help you understand the rules that are most relevant to you, depending on how you use the Services: </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        
                   </div>




                </div>
            </div>
         </main>
        </>
     );
}
export default Privacy;