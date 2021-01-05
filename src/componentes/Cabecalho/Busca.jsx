import React from 'react' 
import lupa from '../img/Union.png'
import '../css/Busca.css'

export default function Busca () {
    return (
        <div className="Busca col-md-2">
            <button><img src={ lupa } alt="Lupa"/></button>
            <input type="text" name="busca" placeholder="Busca"/>
        </div>

    )
}