import React, { useState } from "react";
import "./filtres.css";

export default function Filtres() {
  const [filtre_1, setValue] = useState("");
  const [tri_value, setValue2] = useState(1);

  const changeValue1 = function (e) {
    setValue(e.target.value);
  };
  const appliqueTri = function (e) {
    alert("option choisit : " + e.target.value);

    setValue2(e.target.value);
  };
  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <div className="filtres">
      <div className="filtres_els">
        {items.map((el) => (
          <input
            type="texte"
            className="filtre_el"
            value={filtre_1}
            id={"filtre" + el.id}
            key={"filtre" + el.id}
            onChange={changeValue1}
          />
        ))}
      </div>
      <div className="tri_div">
        <select
          type="texte"
          value={tri_value}
          id="tri_el"
          onChange={appliqueTri}
        >
          {items.map((el) => (
            <option value={el.id} key={el.id}>
              {el.id}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
