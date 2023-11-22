import React, { useState, useEffect } from "react";
import "./modal.css";

export default function Modal(props) {
  const [display, setDisplay] = useState(props.displayFlag);
  // Close the modal
  const closeModalBtn_onclick = function () {
    props.displayfct(false);
  };
  useEffect(() => {
    setDisplay(props.displayFlag);
  }, [props.displayFlag]);

  return display ? (
    <div id={"myModal_" + props.id2} className="modal main_body_chatBot">
      <div className="modal-content body_chatBot">
        <span
          className="close"
          id="closeModalBtn"
          onClick={closeModalBtn_onclick}
        >
          &times;
        </span>
        {props.body}
      </div>
    </div>
  ) : (
    <div></div>
  );
}
