import React, { useState } from "react";
import messages_img from "../../img/256_messageicon.png";
import "./chatBox.css";
import Modal from "../../Atoms/Modal/Modal";
import ConversationBody from "./ConversationBody";
export default function ChatBox() {
  const [display, setDisplay] = useState(false);

  const ouvrirModal = function () {
    setDisplay(true);
  };

  return (
    <>
      <div className="chatBox_button chatBox_bg" onClick={ouvrirModal}>
        <img src={messages_img} alt="" className="chatBox_messages_icon" />
        <span className="Chatbox">Chat box</span>
      </div>
      <Modal
        id2="chatbox"
        displayFlag={display}
        displayfct={setDisplay}
        body={<ConversationBody />}
      ></Modal>
    </>
  );
}
