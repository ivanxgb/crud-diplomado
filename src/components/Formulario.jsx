import React from "react";
import { useState } from "react";

const Formulario = () => {
  const [fruta, setFruta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  return (
    <div className="container mt-5">
      <h1 className="text-center">Formulario</h1>
      <hr />

      <form>
        <div className="form-group">
          <label>Fruta</label>
          <input
            className="form-control mb-2"
            type="text"
            value={fruta}
            onChange={({ target }) => setFruta(target.value)}
            placeholder="Ingrese fruta"
          />
        </div>
        <div className="form-group">
          <label>Descripcion</label>
          <input
            className="form-control mb-2"
            type="text"
            value={descripcion}
            onChange={({ target }) => setDescripcion(target.value)}
            placeholder="Ingrese descripcion"
          />
          <button className="btn btn-primary w-100" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
