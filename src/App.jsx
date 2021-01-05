import React, { useState } from 'react' 
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import './App.css'
import Produto from './componentes/Produto/Produto'
import SessaoRelacionados from './componentes/Relacionados/SessaoRelacionados'
import Rodape from './componentes/Rodapé/Rodape'
import DataContext, { data } from './data/DataContext'


export default function App() {

    const [state, setState] = useState(data)
    return (
        
  <DataContext.Provider  value={ {state, setState} }>
        <div className="App">
            <Cabecalho />
            <Produto />
            <SessaoRelacionados />
            <Rodape />
        </div>
        
  </DataContext.Provider>
    )
}