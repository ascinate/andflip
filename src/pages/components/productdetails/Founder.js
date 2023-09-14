import React from "react";
import { Link } from "react-router-dom";

function Founder(params) {
     return(
        <>
         <div className="founder-part">
            <div className="row g-5">
               <div className="col-lg-3">
                   <figure>
                     <img alt="funder" src="images/funder.png"/>
                   </figure>
                   <div className="other-link">
                      <h5> All posts </h5>
                      <ul>
                        <li>
                          <Link to="/productdetails" className="btn btn-founder"> From the founder </Link>
                        </li>
                        <li>
                          <Link to="/productdetails" className="btn btn-founder"> Fair Usage Policy </Link>
                        </li>
                      </ul>

                      <h5> Helpful links </h5>
                      <ul>
                        <li>
                          <Link to="/productdetails" className="btn btn-founder"> Help Page </Link>
                        </li>
                        <li>
                          <Link to="/productdetails" className="btn btn-founder"> Roadmap </Link>
                        </li>
                      </ul>
                      
                   </div>
               </div>

               <div className="col-lg-9">
                    <h2> Jone Smith 
                      <span className="d-block"> getvoila.ai </span>
                    </h2>

                    <h2 className="mt-5"> Individual Use </h2>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                    leap into electronic typesetting, remaining essentially unchanged. </p>

                    <h2 className="mt-5"> What Does “Unlimited Requests” mean? </h2>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>

                    <p className="mt-5"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                     leap into electronic typesetting, remaining essentially unchanged. </p>

                     <h2 className="mt-5"> Can I Use My Own OpenAI API Key? </h2>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

               </div>
            </div>
         </div>
        </>
     );
}
export default Founder;