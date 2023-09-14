import React, { useState } from "react";
import TeamMember from "./Teamapi";

function Teams() {
   
    const [ TeamMemberData, setTeamMemberData] =useState(TeamMember);
    console.log(TeamMemberData);


    return(
        <>
          <div className="row row-cols-1 row-cols-lg-4 g-5 mt-3">


          {
            TeamMemberData.map((curElem) =>{
                  const { id, imag, name, postion } = curElem;
                  return(
                      <>
                        
                        <div className="col">
                            <div className="items-teams d-inline-block w-100">
                                <figure>
                                    <img alt="name" src={imag}/>
                                </figure>
                                <h5> {name}
                                    <span className="d-block"> {postion} </span>
                                </h5>
                            </div>
                        </div>
                     
                      </>
                  );
              })
          }

             
          </div>
        </>
    );
}
export default Teams;