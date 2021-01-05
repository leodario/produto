import React from 'react' 
import '../css/VariacaoTamanho.css'

export default function VariacaoTamanho (props) {
    return (
        <div className="Tamsnho col-1">
            <button className={`Botao-tamanho ${props.ativo ? 'active' : ''}`}>{ props.tamanho }</button>
        </div>
    )
}
