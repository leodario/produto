import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import '../css/Caminho.css'

export default function Caminho(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <BrowserRouter>
                    <span className="Caminho">Home / <Link to={props.link}>{props.nome}</Link></span>
                </BrowserRouter>
            </div>
        </div>
    )
}