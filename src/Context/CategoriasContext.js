//dependencias
import React , {createContext , useState , useEffect} from 'react'
import axios from 'axios'

//Crear el context
export const CategoriasContext = createContext();

//creando prvider es donde se encuentran las funciones y state

const CategoriasProvider  = (props) => {
        //creando state del context
        const [categorias, setCategorias] = useState([])
        
        //ejecitar llamado a la api
        useEffect(()=>{
                const obtenerCategorias = async ()=> {
                        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
                        const categorias = await axios(url)
                        setCategorias(categorias.data.drinks)
                }
                obtenerCategorias()
        }, [])
        //en el return ira lo que va afluir
        return (
<CategoriasContext.Provider
    value={{
        categorias
        }}
>
    {props.children}
</CategoriasContext.Provider>
        )
}

export default CategoriasProvider;