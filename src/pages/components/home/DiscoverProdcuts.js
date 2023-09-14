import React , {useState} from "react";
import { Link } from "react-router-dom";
import TopDiscover from "./Discoverapi";

function DiscoverProdcuts() {
    const [ topproductData, settopproductData] =useState(TopDiscover);
    console.log(topproductData);
    return(
        <>
        <div className="row row-cols-1 row-cols-lg-2 spoui-01 g-5">
                



                {
                    topproductData.map((curElem) =>{
                        const { id, imag, tags, titel, description, offprice, oldprice} = curElem;
                        return(
                            <>
                        
                            <div className="col">
                                <div className="items-discoverpro d-inline-block w-100">
                                    <div className="row row-cols-1 row-cols-sm-2 align-items-center">
                                        <div className="col">
                                            <div className="poruihj">
                                                <img alt="box05" src={imag}/>
                                            </div>
                                            
                                        </div>
                                        <div className="col ps-lg-4">
                                            <h6 className="tagh"> {tags} </h6>
                                            <h5> {titel} </h5>
                                            <p> {description} </p>
                                            <h3> ${offprice} <span> ${oldprice} </span> </h3>
                                            <Link to="/" className="btn btn-buy"> Buy now </Link>
                                        </div>
                                    </div>
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
export default DiscoverProdcuts;