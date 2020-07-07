//dependencias
import React , {createContext , useEffect , useState} from 'react'
import axios from 'axios'

//creando el context
export const  ModalContext = createContext()


const ModalProvider = (props) => {
    
    //state del provider
    const [idReceta, setidReceta] = useState(null)
    const [recetaInfo, setreceta] = useState({})

    //useEffect para llmar la receta
    useEffect(()=> {
        if (!idReceta) return 
        const ObtenerReceta = async () => {
             const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const resultado = await axios.get(url)
            console.log(resultado.data.drinks[0]);
            setreceta(resultado.data.drinks[0])
            } 
            ObtenerReceta()
    }, [idReceta])

    return (  
    <ModalContext.Provider
    value={{
        //state
        recetaInfo,
        //funciones
        setidReceta,
        setreceta
        
    }}
    >
        {props.children}
    </ModalContext.Provider>
    );

}

 
export default  ModalProvider;