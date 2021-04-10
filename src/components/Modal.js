import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "../CSS/Modal/modal.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <Fragment>
      <div className="modal-background">
        <div className="modal-container">
          {children}

          {/* <button className="close-modal" onClick={onClose}>
            <i className="material-icons">close</i>
          </button> */}
        </div>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}
