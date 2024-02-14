import React, { useState, useEffect } from "react";
import Form from "../../Atoms/Form/Form";
import NavBar from "../../Atoms/NavBar/NavBar";
import ChatBox from "../../Atoms/ChatBox/ChatBox";
import bg from "../../img/bg/form.svg";
export default function Formulaire(props) {
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
      <Form></Form>
      <ChatBox></ChatBox>
    </div>
  );
}
