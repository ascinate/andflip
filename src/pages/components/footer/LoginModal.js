import React ,{ useState } from "react";
import { Link } from "react-router-dom";
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

function LoginModal(location) {
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
    return(
        <>


      
        
        </>
    );
}
export default LoginModal;