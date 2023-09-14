import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import Header from "../Header";


function Deals() {
    document.title="AndFilp - Deals"
    useEffect(() => {

     window.scrollTo(0, 0)
   });
     return(
        <>
        <Header/>
         <SubBanner indexpage="home" indexvisit="/" activepage="Deals" />
         <main className="float-start w-100 body-part-main">
           
            <div className="trurms">
                <div className="container">
                   <div className="comon-para mb-5">
                        <h2> Deals </h2>
                      
                   </div>

              


              



                </div>
            </div>
         </main>
        </>
     );
}
export default Deals;