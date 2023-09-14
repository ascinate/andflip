import React,{useEffect} from "react";
import SubBanner from "./components/SubBanner";
import { FaWallet , FaRegDotCircle } from "react-icons/fa";
import LoginHeader from "../LoginHeader";


function Credits() {
   document.title="AndFilp - Credits"
   useEffect(() => {

      window.scrollTo(0, 0)
    });
    return(
        <>
        <LoginHeader/>
        <SubBanner name="Credits" indexpage="Dashboard" indexvisit="/dashboard" activepage="Credits"/>
        <main className="float-start w-100 body-part-main dsh-page">
            
            <section className="credits-page">
                <div className="container">
                    <h2> Credit balance </h2>
                    <div className="under-line mt-0 d-block w-100"></div>
                    <p className="subpara mt-4"> You don't seem to have a payment method on file 
                    Add new payment method </p>
                    <div className="row mt-0 sp-bottom g-5">
                       <div className="col-lg-4">
                          <div className="wallets-part d-inline-block w-100">
                            <span className="wal-icon">
                             <FaWallet/>
                            </span>
                             <h2 className="my-4 text-white"> $00 </h2>
                             <p> You currently have $0.00 of credits in your account balance.</p>
                          </div>
                       </div>
                       <div className="col-lg-8">
                          <div className="quick-tips-div d-inline-block w-100">
                             <h2> Quick tips: </h2>
                             <ul className="mt-4">
                               <li>
                                 <span> <FaRegDotCircle/> </span>  These credits never expire
                               </li>
                               <li>
                                 <span> <FaRegDotCircle/> </span> Cannot be shared or sent to another account or person
                               </li>
                             </ul>
                             <h5 className="mt-4"> Redeem a gift card </h5>
                             <div className="form-group col-lg-8 mt-5 d-flex align-items-center">
                                <input type="text" className="form-control" placeholder="Gift card"/>
                                <input type="submit" className="btn btn-send" value="Redeem"/>
                             </div>
                          </div>
                       </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}
export default Credits;