import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import Modal from 'react-modal';
import { FaTimesCircle } from "react-icons/fa";
import Header from "../Header";




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


function Register() {
     document.title="AndFilp - Register"

     
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

    useEffect(() => {

      window.scrollTo(0, 0)
    });

     return(
        <>
        <Header/>
          <main className="float-start w-100 register-page">
             <div className="container">
               <div className="inside-register col-lg-10 mx-auto">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">

                            <div className="right-signup-text-r">
                                <figure>
                                   <img alt="sho" src="images/home-illustration.svg"/>
                                </figure>
                                <h2 className="mt-5"> Over <span> 10 ,00  Agency </span> trust us for their produtcs </h2>
                                <ul>
                                  <li>
                                    <span>
                                      <FiCheckCircle/>
                                    </span>
                                    <span>
                                    Buy from 2,000+ Products top Agency
                                    </span>
                                  </li>

                                  <li>
                                    <span>
                                      <FiCheckCircle/>
                                    </span>
                                    <span>
                                    Access 3,00,0, Trainings courses and more articles
                                    </span>
                                  </li>

                                  <li>
                                    <span>
                                      <FiCheckCircle/>
                                    </span>
                                    <span>
                                    Aenean sed orci vel enim mollis tempor id non nisl
                                    </span>
                                  </li>

                                  <li>
                                    <span>
                                      <FiCheckCircle/>
                                    </span>
                                    <span>
                                    Praesent vulputate sapien sagittis, mattis urna sed, tincidunt est
                                    </span>
                                  </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col">
                          <div className="righty-signup d-inline-block w-100">
                           <form method="get" action="gk">
                            <h2 className="text-center"> Join AndFilp </h2>
                            <p className="text-center mt-4"> Capterra helps you find the right software for your needs. Sign up to start finding
                             and comparing products that are best for your team.</p>
                            <div className="d-flex align-items-center justify-content-center mt-4">
                               <Link to="/" className="btn">
                                 <img alt="svg" src="images/google-btn2.svg"/>
                               </Link>
                               <Link to="/" className="btn">
                                 <img alt="svg" src="images/facebook-btn.svg"/>
                               </Link>
                            </div>
                            <div className="ortext text-center my-4">
                               <span> OR </span>
                            </div>

                            <div className="form-group">
                                    <label> Full Name </label>
                                    <input type="text" className="form-control" required/>
                            </div>

                            <div className="form-group">
                                    <label> Email </label>
                                    <input type="Email" className="form-control" required/>
                            </div>

                            <div className="form-group">
                                    <label> Phone </label>
                                    <input type="text" className="form-control" required/>
                            </div>

                            <div className="form-group">
                                    <label> Create Password </label>
                                    <input type="text" className="form-control" required/>
                            </div>

                            <div className="form-group">
                                    
                                <input type="submit" className="btn btn-signup" value="Create your account"/>
                            </div>

                            <div className="form-group text-center">
                                 <p> Already have an account? <button type="button" onClick={openModal} className="logui btn">  Login </button> </p>     
                                
                            </div>
                            </form>
                          </div>

                        </div>
                    </div>
                </div>
             </div>
          </main>

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
                       <Link to="/register" className="btn register-btn"> Register </Link> </span> </p>
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
export default Register;