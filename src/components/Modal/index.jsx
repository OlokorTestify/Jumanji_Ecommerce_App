import React from "react";

import "./index.css";

const Modal = (props) => {
  return !props.isVisible ? null : (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          <div className="modal-content">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
