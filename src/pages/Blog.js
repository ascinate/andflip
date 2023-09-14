import React, { useState, useEffect } from "react";
import SubBanner from "./components/SubBanner";
import { Link } from "react-router-dom";
import AllBlogs from "./components/blog/Blogapi";
import Category from "./components/blog/Category";
import Tags from "./components/blog/Tags";
import Join from "./components/blog/Join";
import Header from "../Header";
import { FiSearch } from "react-icons/fi";

function Blog() {
    document.title="AndFilp - Blog"
    const [ AllBlogsData, setAllBlogsData] =useState(AllBlogs);
    console.log(AllBlogsData);
    useEffect(() => {

        window.scrollTo(0, 0)
      });
    return(
        <>
        <Header/>
          <SubBanner indexpage="Home" indexvisit="/" activepage="Blog"/>
          <main className="float-start w-100 body-part-main">
                
              <section className="blogs-div d-inline-block w-100">
                  <div className="container">
                     <h2 className="mb-5"> Latest posts </h2>
                     <div className="row g-5">
                        <div className="col-lg-8">

                        {
                          AllBlogsData.map((curElem) =>{
                              const { id, imag, tags, links, titel, description, authorimg, author} = curElem;
                              return(
                                  <>
                              
                                  <Link to={links} className="comon-lins-producs d-inline-block w-100">
                                      <div className="row row-cols-1 row-cols-lg-2 g-5 align-items-center">
                                          <div className="col">
                                            <div className="img-box d-inline-block w-100">
                                                <img alt="blogs" src={imag}/>
                                            </div>
                                          </div>
                                          <div className="col">
                                            <div className="list-blogs-details">
                                                <h6> {tags} </h6>
                                                <h3 className="titels"> {titel} </h3>
                                                <div className="user-divs d-flex align-items-center mb-4">
                                                    <div className="usert">
                                                      <img alt="ser" src={authorimg}/>
                                                    </div>
                                                    <span className="ms-4"> by {author} </span>
                                                </div>
                                                <p> {description} </p>
                                                <h6 className="more mt-4 mb-0"> Read more.. </h6>
                                            </div>
                                          </div>
                                      </div>
                                  </Link>
                                  </>
                              );
                          })
                      }

                            
                        </div>
                        <div className="col-lg-4">
                           <div className="comon-cate-links d-inline-block w-100 mb-5">
                            <div className="comon-search-divu">
                                <div className="form-group">
                                    <label> Search Post </label>
                                    <div className="sret d-flex align-items-center">
                                        <FiSearch/>
                                        <input type="text" className="form-control" placeholder="Search keyword"/>
                                    </div>
                                    
                                </div>
                            </div>
                          </div>
                           <div className="comon-cate-links d-inline-block w-100">
                              <h2> Category </h2>
                              <div className="under-line d-block w-100 mt-0"></div>
                              <Category/>
                           </div>

                           <div className="comon-cate-links d-inline-block w-100 mt-5">
                              <h2> Tags </h2>
                              <div className="under-line d-block w-100 mt-0"></div>
                              <Tags/>
                           </div>

                           <Join/>

                        </div>
                     </div>
                  </div>
              </section>
          </main>

        </>
    );
}
export default Blog;