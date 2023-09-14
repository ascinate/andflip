import React , { useState }from "react";
import AllQuestion from "./Questinapi";

function Qusetion() {

    const [ AllQuestionData, setAllQuestionData] =useState(AllQuestion);
    console.log(AllQuestionData);
    

    const handlechange =(e)=>{
        console.log(e.target.value)
    }

     return(
        <>
          <div className="ask-question comon-tabs05 d-block w-100">
              <h2> Ask a question </h2>
              <form method="get" action="jsh">
                 <div className="form-group">
                    <label>
                      Your question
                    </label>
                    <textarea className="form-control">
                    
                    </textarea>
                 </div>

                 <div className="form-group mt-5 mb-4">
                        <div className="form-group corm-check d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" id="noti" onChange={(e)=> handlechange(e)} />
                            <label for="noti" className="d-block">
                            Notify me via email when someone replies to this question </label>
                        </div>
                 </div>

                 <div className="form-group">
                    <div className="notice">
                       <h5> Please check these guidelines before submitting a question: </h5>
                       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                       typesetting, remaining essentially unchanged.</p>
                       <p> By submitting, I agree to Aijumble community guidelines. </p>
                    </div>
                 </div>
                 <div className="form-group">
                   <input type="submit" className="btn btnsubmit" value="Submit"/>
                 </div>

                 <hr/>

                 <div className="d-flex  align-items-center justify-content-between">
                    <h5>  Showing <b> 2 </b> of <b> 1 </b> questions </h5>
                    <div className="col-lg-2 short-by d-flex align-items-center">
                       <span> Sort By:  </span>
                       <select class="form-select">
                            <option selected>Latest reply</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                 </div>

                 <div className="comon-section-reply mt-5">

                 {
                    AllQuestionData.map((curElem) =>{
                        const { id, username, imgs, date, time, comment, since, bought } = curElem;
                        return(
                            <>
                        
                            <div className="crmt-div d-inline-block w-100">
                                <div className="row g-5">
                                        <div className="col-lg-1">
                                            <figure className="userid">
                                                    <img alt="sre" src={imgs}/>
                                            </figure>
                                        </div>
                                        <div className="col-lg-11 ps-lg-5">
                                            <h5> {username} </h5>
                                            <h6> {date} {time} | Deals Bought: {bought} | Member Since: {since} </h6>
                                            <p> {comment} </p>
                                            <button type="button" class="btn btn-reply">
                                                Reply
                                            </button>
                                        </div>
                                        </div>
                                </div>
                            </>
                        );
                      })
                   }
                   
                    
                 </div>

              </form>
          </div>
        </>
     );
}
export default Qusetion;