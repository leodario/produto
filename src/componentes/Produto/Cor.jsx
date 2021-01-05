import React from 'react'
import '../css/Cor.css'

export default function Cor(props) {

    const corBotao = {
        backgroundColor: props.corFundo || '#000'
    }

    return (
        <div className="Cor col-1">
            <button className={`Botao-cor ${props.ativo ? 'active-cor' : ''}`} style={ corBotao }></button>
        </div>
    )
}