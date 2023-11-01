import React, { useState, useEffect } from "react";
import messages_img from "../img/256_messageicon.png";

export default function Chatbox() {
  const ouvrirModal = function () {
    alert("");
  };
  return (
    <div className="chatbox-button" onClick={ouvrirModal}>
      <img src={messages_img} alt="" className="caroussel-next" />
      <span id="chatbox-title">Chat box</span>
    </div>
  );
}
