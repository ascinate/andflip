import React, {useEffect} from "react";
import SubBanner from "./components/SubBanner";
import Category from "./components/blog/Category";
import Tags from "./components/blog/Tags";
import Join from "./components/blog/Join";
import Recentlypost from "./components/blog/Recentlypost";
import Header from "../Header";
import { FiSearch } from "react-icons/fi";


function BlogDetails() {
    document.title="AndFilp - Blog Details"
    useEffect(() => {

        window.scrollTo(0, 0)
      });
    return(
        <>
          <Header/>
          <SubBanner indexpage="Home" indexvisit="/" activepage="Blog Details"/>
          <main className="float-start w-100 body-part-main">
             
             <section className="blogs-details d-inline-block w-100">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                           <div className="left-blogs-details d-inline-block">
                                <div className="img-blogs-divu">
                                <img alt="se" src="images/bunis.jpg"/>
                                </div>
                                <h2 className="mt-5"> There are many variations of passages of Lorem Ipsum available,
                                 but the majority have suffered alteration in some form </h2>

                                 <div className="suert d-flex align-items-center mt-4">
                                    <figure className="m-0">
                                       <img alt="ser" src="images/us.png"/>
                                    </figure>
                                    <span className="ms-3"> by Mike Weir </span>
                                 </div>

                                 <p className="mt-4"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, 
                                 injected humour, or non-characteristic words etc.</p>
                                 <h3 className="my-4"> What does being an entrepreneur mean to you?</h3>
                                 <p className="mb-4"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, 
                                 injected humour, or non-characteristic words etc.</p>
                                 <img alt="ser" src="images/blog-img-b.jpg"/>
                                 <h3 className="my-4">Can you tell us about your business? </h3>
                                 <p className="mb-4"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, 
                                 injected humour, or non-characteristic words etc.</p>
                            </div>

                            

                           
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

                    <div className="retyu-div">

                            <h2> Recently posted </h2>
                            <div className="under-line d-block w-100 mt-0"></div>

                            <Recentlypost/>
                    </div>

                 </div>
             </section>
          </main>
        </>
    )
}
export default BlogDetails;