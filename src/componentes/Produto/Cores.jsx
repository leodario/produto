import React from 'react'
import '../css/Cores.css'
import Cor from './Cor';

export default function Cores() {
    return (
        <div className="Cores">
            <div className="row cor-labels">
                <span className="label-cor">Cor:</span> <span className="cor-selecionada">(fucsia)</span>
            </div>
            <div className="row cores-botoes">
                <Cor corFundo="#A9095E" ativo="true" />
                <Cor corFundo="#2A5A75" />
                <Cor corFundo="#A14830" />
                <Cor corFundo="#000000" />
            </div>
        </div>
    )
}