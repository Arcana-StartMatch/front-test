import React, { useState, useEffect } from "react";
import Caroussel from "../../Atoms/Caroussel/Caroussel";
import Filtres from "../../Atoms/Filtres/Filtres";
import NavBar from "../../Atoms/NavBar/NavBar";
import ChatBox from "../../Atoms/ChatBox/ChatBox";
import bg from "../../img/bg/recherche_films.svg";
export default function RechercheFilm() {
  const [imageWidth, setImageWidth] = useState(window.innerWidth);
  const [imageHeight, setImageHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setImageWidth(window.innerWidth);
      setImageHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: `${imageWidth} ${imageHeight}`,
      }}
      className="main"
    >
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
