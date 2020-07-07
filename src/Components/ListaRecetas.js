//dependencia
import React , {useContext} from 'react'
//context
import { RecetasContext } from '../Context/RecetaContext'
//componentes
import Receta from './Receta'

const ListaRecetas = () => {
    //extraer las recetas
    const { recetas }  = useContext(RecetasContext)
    console.log(recetas);
                if (recetas === undefined) return null
    
    return (  
         <div className="row mt-5">
             {recetas.map(receta=> (
                 <Receta
                  key={receta.idDrink}
                  receta={receta}
                 />
             )) }
         </div>
    );
}
 
export default ListaRecetas;