import React, { useState } from 'react' 
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import './App.css'
import Produto from './componentes/Produto/Produto'
import SessaoRelacionados from './componentes/Relacionados/SessaoRelacionados'
import Rodape from './componentes/Rodapé/Rodape'
import DataContext, { data } from './data/DataContext'


export default function App() {
    fetch(process.env.REACT_APP_API_URL || 'http://localhost:3002')
      .then(() => console.log("DEU CERTO"))
      .catch(() => console.log("DEU ERRO"))
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