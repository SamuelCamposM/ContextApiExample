//dependencias
import React  from 'react';

 
//componentes
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import ListaRecetas from './Components/ListaRecetas'
//context
import CategoriasProvider from './Context/CategoriasContext'
import RecetasProvider from './Context/RecetaContext'
import ModalProvider from './Context/ModalContext'


function App() {
  return (
<CategoriasProvider>
  <RecetasProvider>
    <ModalProvider>
   <Header/>

   <div className="container mt-5">
     <div className="row">
        <Formulario/>
     </div>
     <ListaRecetas />
   </div>
   </ModalProvider>
   </RecetasProvider>
</CategoriasProvider>
  );
}

export default App;
