import React from 'react'
import '../css/TituloProdutoMobile.css'

export default function TituloProdutoMobile (props) {
    return (
        <div className="TituloProdutoMobile">
            <h2 className="Titulo-produto">{props.titulo}</h2>
            <span className="Sku">{props.sku}</span>
        </div>
    )
}