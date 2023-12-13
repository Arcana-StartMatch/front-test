import React from "react";
import Caroussel from "../../Atoms/Caroussel/Caroussel";
import Form from "../../Atoms/Form/Form";
import NavBar from "../../Atoms/NavBar/NavBar";
import ChatBox from "../../Atoms/ChatBox/ChatBox";

export default function Formulaire() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <br />
      <Form></Form>
      <ChatBox></ChatBox>
    </div>
  );
}
