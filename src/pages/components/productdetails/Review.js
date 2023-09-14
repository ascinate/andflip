import React , { useState }from "react";
import AllQuestion from "./Questinapi";
import Rating from "react-rating";


function Review() {

    const [ AllQuestionData, setAllQuestionData] =useState(AllQuestion);
    console.log(AllQuestionData);
    

    const handlechange =(e)=>{
        console.log(e.target.value)
    }
     return(

        <>
        <div className="ask-question comon-tabs05 d-block w-100">
          <h2> Leave a Comment </h2>
                <form method="get" action="jsh">

                <div className="form-group">
                   <label> Click to stars to rate us* </label>
                   <div className="d-block mb-5">
                        <Rating
                        emptySymbol={<img src="images/star-empty.png" className="icon" />}
                        fullSymbol={<img src="images/star-full.png" className="icon" />}
                        />
                   </div>


                </div>
                <div className="form-group">
                    <label>
                    Message
                    </label>
                    <textarea className="form-control">
                    
                    </textarea>
                </div>

                
               
                <div className="form-group">
                    <input type="submit" className="btn btnsubmit" value="Submit Reviews"/>
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
export default Review;