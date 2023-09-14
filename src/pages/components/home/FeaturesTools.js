import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe , FaBookmark } from "react-icons/fa";


function FeaturesTools() {
    const featdiv = [
        {id: 1, imge: 'images/warp-ai-1684322192.webp',conract:"Contact for Pricing", visit:"/", like:"/", comtext:"Warp AI", suby:"Code Assistant", lclient:"images/warp-ai-1684322187.webp", content: 'If you are a developer who spends a lot of time in the terminal, you might be looking for a better way to interact with your shell.',},
        {id: 2, imge: 'images/quicklines-1685963172.webp',conract:"Contact for Pricing", visit:"/", like:"/", comtext:"Sybill", suby:"Code Assistant", lclient:"images/kadoa-1685532665.webp", content: 'If you are a developer who spends a lot of time in the terminal, you might be looking for a better way to interact with your shell.',},
        {id: 3, imge: 'images/sellesta-1682627464.webp',conract:"Contact for Pricing", visit:"/", like:"/", comtext:"SamurAI", suby:"Code Assistant", lclient:"images/warp-ai-1684322187.webp", content: 'If you are a developer who spends a lot of time in the terminal, you might be looking for a better way to interact with your shell.',},
        {id: 4, imge: 'images/warp-ai-1684322192.webp',conract:"Contact for Pricing", visit:"/", like:"/", comtext:"Sellesta", suby:"Code Assistant", lclient:"images/sybill-1684319877.webp", content: 'If you are a developer who spends a lot of time in the terminal, you might be looking for a better way to interact with your shell.',},
        {id: 5, imge: 'images/blockode-ai-photo-studio-1681319546.webp',conract:"Contact for Pricing", visit:"/", like:"/", comtext:"Warp AI", suby:"Code Assistant", lclient:"images/warp-ai-1684322187.webp", content: 'If you are a developer who spends a lot of time in the terminal, you might be looking for a better way to interact with your shell.',},
        {id: 6, imge: 'images/kadoa-1685532664.webp',conract:"Contact for Pricing", visit:"/", like:"/", comtext:"Warp AI", suby:"Code Assistant", lclient:"images/warp-ai-1684322187.webp", content: 'If you are a developer who spends a lot of time in the terminal, you might be looking for a better way to interact with your shell.',},
        {id: 7, imge: 'images/type-ai-1681998197.webp',conract:"Contact for Pricing", visit:"/", like:"/", comtext:"Warp AI", suby:"Code Assistant", lclient:"images/warp-ai-1684322187.webp", content: 'If you are a developer who spends a lot of time in the terminal, you might be looking for a better way to interact with your shell.',},
        {id: 8, imge: 'images/warp-ai-1684322192.webp',conract:"Contact for Pricing", visit:"/", like:"/", comtext:"Warp AI", suby:"Code Assistant", lclient:"images/warp-ai-1684322187.webp", content: 'If you are a developer who spends a lot of time in the terminal, you might be looking for a better way to interact with your shell.',},
      ];
    return(
        <>
         <div className="row row-cols-1 row-cols-lg-4 g-5 mt-0">
     
          
         
          {featdiv.map(function(data) {
            return (
                <div className="col">
                    <div className="ft-tools d-inline-block w-100">
                        <figure>
                        <img alt="post" src={data.imge}/>
                        </figure>
                        <div className="details-decui">
                        <Link to="/" className="comiu d-flex align-items-center">
                            <div className="logou">
                                <img alt="sb" src={data.lclient}/>
                            </div>
                            <div className="com-text ms-3">
                                <h5> {data.comtext} </h5>
                                <p> {data.suby} </p>
                            </div>
                        </Link>
                        <p> {data.content} </p>
                        <span className="psou-tags mt-2 d-inline-block">
                        {data.conract}
                        </span>
                        <div className="d-flex mt-4 align-items-center align-items-center">
                            <Link to={data.visit} className="btn btn-vist">
                              <span>
                               <FaGlobe/>
                              </span>   Visit
                            </Link>
                            <Link to={data.like} className="btn btn-links">
                            <span>
                             <FaBookmark/>
                            </span>
                            300
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            )
           })}
            
         </div>
        </>
    )
}
export default FeaturesTools;