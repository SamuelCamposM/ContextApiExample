import React , {useContext ,useState } from "react";
import {ModalContext} from '../Context/ModalContext'

import Modal  from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';



function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {

  //configuracion del material-ui
  const [modalStyle ] = useState(getModalStyle);
  const [open , setOpen ] = useState(false)
 
  const clases =  useStyles()

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose= () => {
    setOpen(false)
  }
    // extraer valores del context
    const { recetaInfo , setidReceta , setreceta } = useContext(ModalContext)

    //muestra y formatea los ingredientes
    const MostrarIngredientes = info => {
      let ingredientes = []
      for (let i = 0; i < 16; i++) {
        if(info[`strIngredient${i}`]){
              ingredientes.push(
                <li key={ "string"+String(info.idDrink) +"string"} > 
                  {info[`strIngredient${i}`]} 
               { info[`strMeasure${i}`]}
                 </li>
              )
        }
        
      }
      return ingredientes;
    }
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>

        <img
          src={receta.strDrinkThumb}
          alt={`imagen de ${receta.sreDrink}`}
          className="card-img-top"
        />
        <div className="card-body">
          <button className="btn btn-block btn-primary"
          onClick={()=> {
              setidReceta(receta.idDrink)
              handleOpen()
              console.log(recetaInfo);
              
          }}
          > Ver receta </button>
      <Modal
      open={open}
      onClose={() => {

        handleClose()
        setidReceta(null)
        setreceta({})
      }}
      >
        <div style={modalStyle} className={clases.paper} >
          <h2> {recetaInfo.strDrink} </h2>
          <h3 className="mt-4">Instrucciones</h3>
      <p>{ recetaInfo.strInstructions }</p>
      <img src={recetaInfo.strDrinkThumb} alt="" className="img-fluid my-4"/>
      <h3>Ingredientes y cantidades</h3>
      <ul>
        {MostrarIngredientes(recetaInfo)}
      </ul>
        </div>
      </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
