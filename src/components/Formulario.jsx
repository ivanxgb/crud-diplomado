import React from "react";
import { firebaseDB } from "../firebase";
import { addDoc, collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

import { useState, useEffect } from "react";

const Formulario = () => {
  const [fruta, setFruta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [listaFrutas, setListaFrutas] = useState([]);

  const guardarFrutas = async (e) => {
    e.preventDefault();
    try {
      const db = firebaseDB;
      const nuevaFruta = { fruta, descripcion };
      const data = await addDoc(collection(db, "frutas"), nuevaFruta);
      setListaFrutas([...listaFrutas, { ...nuevaFruta, id: data.id }]);

      setFruta("");
      setDescripcion("");
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebaseDB;
        await onSnapshot(collection(db, "frutas"), (querySnapshot) => {
          setListaFrutas(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  const eliminarFruta = async (id) => {
    try {
      const db = firebaseDB;
      await deleteDoc(doc(db, "frutas", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Formulario</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Listado de Frutas</h4>
          <ul className="list-group">
            {listaFrutas.map((item) => (
              <li className="list-group-item" key={item.id}>
                {item.fruta} - {item.descripcion}
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => eliminarFruta(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">Agregar Frutas</h4>

          <form onSubmit={(e) => guardarFrutas(e)}>
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
