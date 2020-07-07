import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, setConsultar] = useState(false);
  //useEffect para ejecutar la api cada vez que cambie la busqueda
  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const { nombre, categoria } = busqueda;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultado = await axios.get(url);
        //guardando las recetas
        setRecetas(resultado.data.drinks);
      };
      obtenerRecetas();
    }
  }, [busqueda, consultar]);
  return (
    <RecetasContext.Provider
      value={{
        //state
        recetas,
        //funciones
        guardarBusqueda,
        setConsultar,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
