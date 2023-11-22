import React from "react";
import Caroussel from "../../Atoms/Caroussel/Caroussel";
import Filtres from "../../Atoms/Filtres/Filtres";
import NavBar from "../../Atoms/NavBar/NavBar";
import ChatBox from "../../Atoms/ChatBox/ChatBox";

export default function RechercheFilm() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <br />
      <Filtres></Filtres>
      <br />
      <br />
      <Caroussel></Caroussel>
      <ChatBox></ChatBox>
    </div>
  );
}
