import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import TrackProducts from "./components/products/TrackProducts";
import Reedme from "./components/products/Reedme";
import LoginHeader from "../LoginHeader";

function Products() {
    document.title="AndFilp - Product"
    useEffect(() => {

        window.scrollTo(0, 0)
      });
     return(
        <>
          <LoginHeader/>
          <SubBanner name="Products" indexpage="Dashboard" indexvisit="/dashboard" activepage="Product"/>
          <main className="float-start w-100 body-part-main dsh-page">
           
             <section className="products-sections d-inline-block w-100">
                <div className="container">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#track" type="button" role="tab" >Track products</button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#redeem" type="button" role="tab">Redeem products</button>
                        </li>
                
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="track" role="tabpanel">
                             <div className="comon-list-grid">
                                 <TrackProducts/>
                             </div>
                        </div>
                        <div class="tab-pane fade" id="redeem" role="tabpanel">
                             <div className="comon-list-grid">
                                  <Reedme/>
                             </div>
                        </div>
                        
                    </div>
                </div>
             </section>
          </main>
        </>
     );
}
export default Products;