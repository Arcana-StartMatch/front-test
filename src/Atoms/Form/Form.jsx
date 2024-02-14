import React, { useState, useEffect } from "react";
import "./form.css";

export default function Form() {
  const [form_1, setValue] = useState("");
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
    <div className="forms">
      <table className="forms_els">
        <tbody>
          <tr>
            <th className=" th">
              <h1>Formulaire</h1>
            </th>
            <td className="td"></td>
          </tr>
          <tr className="form_div">
            <th className=" th">
              <label htmlFor="input1">Donnée 1 :</label>
            </th>
            <td className="td">
              <input type="texte" id="input1" value="" className="donnees" />
            </td>
          </tr>
          <tr className="form_div">
            <th className="th">
              <label htmlFor="input2">Donnée 2 :</label>
            </th>
            <td className="td">
              <input type="texte" id="input2" value="" className="donnees" />
            </td>
          </tr>
          <tr className="form_div">
            <th className="th">
              <label htmlFor="input3">Donnée 3 :</label>
            </th>
            <td className="td">
              <input type="texte" id="input3" value="" className="donnees" />
            </td>
          </tr>
          <tr className="form_div">
            <th className="th">
              <label htmlFor="input4">Donnée 4 :</label>
            </th>
            <td className="td">
              <input type="texte" id="input4" value="" className="donnees" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="th">
        <button id="valider_btn">Valider</button>
      </div>
    </div>
  );
}
