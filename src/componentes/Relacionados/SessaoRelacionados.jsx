import React from 'react'
import '../css/SessaoRelacionados.css'
import TituloRelacionados from './TituloRelacionados'
import SliderRelacionados from './SliderRelacionados'

export default function SessaoRelacionados() {
    return (
        <div className="SessaoRelacionados container-fluid">
            <div className="row">
                <TituloRelacionados />
                <SliderRelacionados />
            </div>
        </div>
    )
}