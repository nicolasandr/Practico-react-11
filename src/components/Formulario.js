import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import ListaNoticias from "./ListaNoticias";

const options = [
  { value: "Argentina", label: "Argentina" },
  { value: "Briasil", label: "Brasil" },
  { value: "Mexico", label: "Mexico" },
  { value: "Peru", label: "Peru" },
];

const Formulario = () => {
  const [value, setvalue] = useState(null);
  const onDropdownChange = (value) => {
    console.log(value);
    setvalue(value);
  };
  return (
    <div className="container py-3">
      <div className="row text-center border py-4">
        <div className="col-12 col-md-6">
          <h5>Buscar por categoria:</h5>
        </div>
        <div className="col-12 col-md-6">
          <Select
            options={options}
            value={value}
            onChange={onDropdownChange}
          ></Select>
        </div>
      </div>
      <ListaNoticias></ListaNoticias>
    </div>
  );
};

export default Formulario;
