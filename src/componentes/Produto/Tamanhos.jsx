import React from 'react' 
import '../css/Tamanhos.css'
import VariacaoTamanho from './VariacaoTamanho'

export default function Tamanhos() {
    return (
        <div className="Tamanhos">
        <div className="row tamanho-labels">
            <span className="label-tamanho">Tamanho:</span> <span className="tamanho-selecionado">(37)</span> <a href="#" className="guia">Guia de medidas</a> 
        </div>
        <div className="row tamanhos-botoes">
            <VariacaoTamanho tamanho="33"/>
            <VariacaoTamanho tamanho="34"/>
            <VariacaoTamanho tamanho="35"/>
            <VariacaoTamanho tamanho="36"/>
            <VariacaoTamanho tamanho="37" ativo="true"/>
            <VariacaoTamanho tamanho="38"/>
            <VariacaoTamanho tamanho="39"/>
            <VariacaoTamanho tamanho="40"/>
            <VariacaoTamanho tamanho="41"/>
            <VariacaoTamanho tamanho="42"/>
        </div>
    </div>
    )
}