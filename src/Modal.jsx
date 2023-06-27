import React from "react";
import { useGlobalContext } from "./Context";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { modalClose } = useGlobalContext();
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>Modal</h3>
        <button type="button" className="close-modal-btn" onClick={modalClose}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
