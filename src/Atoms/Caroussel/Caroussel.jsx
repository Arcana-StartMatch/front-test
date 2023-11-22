import React, { useState, useEffect } from "react";
import arrow_img from "../../img/arrow.png";
import "./caroussel.css";

export default function Caroussel() {
  const [items, setItems] = useState([{ test: 1 }, { test: 2 }, { test: 3 }]);
  const next = function () {
    setItems([{ test: 1 }, { test: 2 }]);
  };
  return (
    <div className="caroussel">
      <div className="caroussel-c">
        <div className="caroussel-els">
          {items.map((el) => (
            <div key={el.test} className="caroussel-el"></div>
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
