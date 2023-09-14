import React,{useEffect} from "react";
import SubBanner from "./components/SubBanner";
import { Link } from "react-router-dom";
import LoginHeader from "../LoginHeader";
import Breadcrum from "../Breadcrum";


function Payment() {
    document.title="AndFilp - Payment"
    useEffect(() => {

      window.scrollTo(0, 0)
    });
    return(
        <>
         <LoginHeader/>
          <SubBanner name="Payment"/>
          <main className="float-start w-100 body-part-main dsh-page">
            <div className="container mb-5">
                <Breadcrum indexpage="Dashboard" indexvisit="/dashboard" activepage="Payment"/>
            </div>
             <section className="pymnets-div d-inline-block w-100">
               <div className="container">
                   <h2> Payment methods </h2>
                   <div className="under-line mt-0 d-block w-100"></div>
                   <p className="subpara my-4"> You don't seem to have a payment method on file
                   <Link to="/paymentmethod" className="btn btn-paymnt"> Add new payment method </Link> </p>
               </div>
             </section>
          </main>
        </>
    );
}
export default Payment;