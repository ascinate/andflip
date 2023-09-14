import React ,{useEffect}from "react";
import SubBanner from "./components/SubBanner";
import { FaLayerGroup , FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import It from "./components/glossary/It";
import Salles from "./components/glossary/Salles";
import Marketing from "./components/glossary/Marketing";
import Finance from "./components/glossary/Finance";
import Quoteform from "./components/glossary/Quoteform";
import Header from "../Header";


function Glossary() {
    document.title="AndFilp - Glossary"
    useEffect(() => {

      window.scrollTo(0, 0)
    });
    return(
        <>
          <Header/>
          <SubBanner indexpage="Home" indexvisit="/" activepage="Glossary"/>
          <main className="float-start w-100 body-part-main dsh-page">
             <section className="glossary-div d-inline-block w-100">
                <div className="container">
                    <h5 className="subi-heading text-center"> Browse  Definitions </h5>
                    <h2 className="text-center my-4"> Ai Jumble Glossary terms </h2>
                    <div className="under-line text-center d-block w-100 mt-0 mx-auto"></div>
                    <div className="row row-cols-1 row-cols-lg-4 g-5 mt-0">
                       <div className="col">
                           <It/>
                       </div>
                       <div className="col">
                          <Salles/>
                       </div>
                       <div className="col">
                          <Marketing/>
                       </div>
                       <div className="col">
                          <Finance/>
                       </div>
                    </div>

                    <Quoteform/>

                </div>

                
             </section>
          </main>

        </>
    );
}
export default Glossary;