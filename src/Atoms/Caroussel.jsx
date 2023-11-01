import React, { useState, useEffect } from "react";
import arrow_img from "../img/arrow.png";

export default function Caroussel() {
  const [items, setItems] = useState([{ test: 1 }]);
  const next = function () {
    setItems([{ test: 1 }, { test: 1 }, { test: 1 }]);
  };
  return (
    <div className="caroussel">
      <div className="caroussel-c">
        <div className="caroussel-els">
          {items.map((el) => (
            <div className="caroussel-el"></div>
          ))}
        </div>
        <img
          src={arrow_img}
          alt="suivant"
          onClick={next}
          className="caroussel-next"
        />
      </div>
    </div>
  );
}
