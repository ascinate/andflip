import React,{ useState, useEffect} from "react";
import { NavLink , Link } from "react-router-dom";
import { FiUser, FiMenu } from "react-icons/fi";
import Modal from 'react-modal';
import { FaTimesCircle } from "react-icons/fa";



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zindex:'20',
    },
  };


function Header() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#000';
    }
  
    function closeModal() {
      setIsOpen(false);
    }


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);



    return(
      <>
      <header className={scroll ? "bg-black" : "bg-white"}>
       <div className="flote-start w-100">
          <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <NavLink class="navbar-brand" to="/">
                       <img alt="logo" src="images/logo.png" />
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                       <span class="">
                          <FiMenu/>
                       </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            
                           
                            <li class="nav-item">
                                <NavLink to="/aitools" class="nav-link">Software</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink to="/aitrainings" class="nav-link">Courses</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink to="/listyourtool" class="nav-link">Templates</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink to="/blog" class="nav-link"> Deals </NavLink>
                            </li>

                            
                        
                        </ul>
                    
                    </div>
                    <div className="right-log-div">

                        <Link to="/" className="btn btn-sell p-0">
                        Sell on AndFlip
                        </Link>

                        
                        
                        <button type="button" class="btn log-btn1 mx-5 p-0" onClick={openModal}>
                              <span className="d-sm-none d-block">
                                 <FiUser/>
                              </span>
                              <span className="d-sm-block d-none">
                              Signin
                              </span>


                        
                        </button>
                              

                        <Link to="/" className="btn log-btn">
                            SignUp
                        </Link>
                        
                    </div>
                </div>
          </nav>
       </div>
      </header>
       <Modal
       isOpen={modalIsOpen}
       onAfterOpen={afterOpenModal}
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal"
     >
          
     

     <h6 ref={(_subtitle) => (subtitle = _subtitle)}></h6>
       <button onClick={closeModal} className="btn btn-closed1">
          <FaTimesCircle/>
       </button>
       
       <div className="loog-ind-div com-div-md w-100">
       <h2 className="text-center"> Login </h2>
       <form method="get" action="sm" className="mt-5">
          <div className="form-group">
             <label> UserId / Email </label>
             <input type="text" className="form-control" required/>
          </div>

          <div className="form-group mt-4">
             <label> Password </label>
             <input type="password" className="form-control" required/>
          </div>

          <div className="form-group my-4">
          
            <Link to="/dashbord" className="btn btn-submit" > Login</Link>
             
          </div>

          <div className="form-group text-center">
             
             <Link to="/" className="btn fort-btn"  data-bs-dismiss="modal"> Lost Password ?</Link>
             
          </div>
          <div className="form-group text-center mt-4" >

             
             <p > Do not have an account? <span >
                    <Link to="/register" onClick={closeModal} className="btn register-btn"> Register </Link> </span> </p>
          </div>

          <div className="form-group text-center mt-5">
             <Link to="/"  data-bs-dismiss="modal" className="btn"> <img alt="ser" src="images/google-btn.svg"/> </Link>
          </div>

          


       </form>
   </div>
        
     </Modal>

      </>
    );
    
}
export default Header;