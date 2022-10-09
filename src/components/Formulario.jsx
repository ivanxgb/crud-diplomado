import React from "react";
import { useState } from "react";

const Formulario = () => {
  const [fruta, setFruta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  return (
    <div className="container mt-5">
      <h1 className="text-center">Formulario</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Listado de Frutas</h4>
          <ul className="list-group"></ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">Agregar Frutas</h4>

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
      </div>
    </div>
  );
};

export default Formulario;
