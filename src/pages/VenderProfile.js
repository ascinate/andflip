import React,{ useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import SubBanner from "./components/SubBanner";
import { FaCamera } from "react-icons/fa";
import LoginHeader from "../LoginHeader";


function VenderProfile() {
    document.title="AndFilp - Vender Profile"
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(() => {

        window.scrollTo(0, 0)
      });


     return(
        <>
        <LoginHeader/>
        <SubBanner name="Dashboard" indexpage="Home" indexvisit="/vendordashboard" activepage="Profile"/>
        <main className="float-start w-100 body-part-main dsh-page">
           
           <section className="profile-page-design">
               <div className="container">
                   <h2> My Profile </h2>
                   <div className="under-line d-block w-100 mt-0"></div>
                   <p className="subpara mt-4">It is a long established fact that a reader will be distracted by the readable. </p>

                   <div className="user-img0 d-flex align-items-center mt-5">
                       <figure className="m-0">
                            <img src={file} id="smj"/>
                            <span className="suer-i">
                              <FiUser/>
                            </span>
                       </figure>
                       <div className="div-file">
                          <div className="text-button">
                             <FaCamera/>
                             <span> Change Picture</span>
                          </div>
                           <input type="file" onChange={handleChange} />
                       </div>
                   </div>
                   <form method="get" action="gk">
                        <div className="form-sectionu d-inline-block w-100">
                            
                                <div className="row row-cols-1 row-cols-lg-2 g-5">
                               
                                    <div className="col">
                                        <div className="form-group">
                                           <label> Username </label>
                                          <input type="text" name='username' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> email address </label>
                                          <input type="email" name='email' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> Company </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> Company name </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> Company address </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> Job title </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-group">
                                           <label> Company city </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> Company address 2 </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-group">
                                           <label> Company country </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> Company state </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> ABN </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> Company postal code </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> Business name </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                           <label> VAT ID </label>
                                          <input type="text" name='company' className="form-control"/>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                        </div>
                        <input name="submit" type="submit" className="btn btn-svae" value="SAVE"/>
                   </form>
               </div>
           </section>
        </main>
        </>
     );
}
export default VenderProfile;