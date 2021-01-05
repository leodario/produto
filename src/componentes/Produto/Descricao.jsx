import React from 'react' 
import '../css/Descricao.css'

export default function Descricao (props) {
    return (
        <div className="Descricao col-12">
            <p>{ props.texto }</p>
        </div>
    )
}