import React from "react";
import "../stylesheets/Testimonio.css";

export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../img/${props.imagen}.png`)}
        alt="Imagen de Persona"
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
        </p>
        <p className="cargo-testimonio">
          {" "}
          <strong>{props.cargo}</strong> en <strong>{props.empresa}</strong>{" "}
        </p>
        <p className="tecto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
