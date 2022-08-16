import React from "react";
import Noticia from "./Noticia";

const ListaNoticias = (props) => {
  return (
    <div className="row border">
      {props.arregloNoticias.map((item,posicion) => (
        <Noticia key={posicion}  noticiaCargada={item} ></Noticia>
      ))}
    </div>
  );
};

export default ListaNoticias;
