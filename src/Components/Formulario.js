import React ,{useContext ,useState } from "react";
//hay que pasarle el context
import { CategoriasContext } from '../Context/CategoriasContext'
import { RecetasContext } from '../Context/RecetaContext'

const Formulario = () => {
        //definir state
        const [busqueda, setbusqueda] = useState({
          nombre : '',
          categoria: ''
        })


         //importando useContext
      const { categorias  } = useContext(CategoriasContext)
      const {  guardarBusqueda , setConsultar } = useContext(RecetasContext)
      //funcion que leera los inputs
      const obtenerDatos = e => {
        setbusqueda({
          ...busqueda,
          [e.target.name]:e.target.value
        })
        
        setConsultar(true)
      }
    return (
    <form 
    onSubmit={e => {
      e.preventDefault()
      guardarBusqueda(busqueda)}}
    className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebiidas por categoria o imgrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input 
          type="text" 
          name="nombre" 
          className="form-control" 
          placeholder="Busca por ingrediente"
          onChange={obtenerDatos}
          />
        </div>
        <div className="col-md-4">
            <select 
            name="categoria"  
            className="form-control"
            onChange={obtenerDatos}
            >
                <option value="">--selecciona categoria</option>
                {categorias.map(categoria => (
                  <option value={categoria.strCategory} key={categoria.strCategory}>
                    {categoria.strCategory}
                  </option>
                ))}
            </select>
        </div>
        <div className="col-md-4">
            <input 
            type="submit" 
            className="btn btn-block btn-primary" 
            value="Buscar recetas"/>
            </div>
      </div>
    </form>
  );
};

export default Formulario;
