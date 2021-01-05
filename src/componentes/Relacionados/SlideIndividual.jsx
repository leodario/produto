import React from 'react'
import Cor from '../Produto/Cor'
import { Link } from 'react-router-dom'


export default function SlideIndividual(props) {
    return (
        <Link to="#" className="Link-slide-individual">
            <div className="col-12 Slide-individual">
                <img src={props.imagem} alt="Foto produto" className="Imagem-slide" />
                <div className="row Barra-baixo">
                    <div className="col Preco-slider">
                        {props.preco}
                    </div>
                    <div className="col desktop">
                        <div className="row justify-content-end">
                            <div className="col-1">
                                <Cor corFundo="#A9095E" />
                            </div>
                            <div className="col-1">
                                <Cor corFundo="#2A5A75" />
                            </div>
                            <div className="col-1">
                                <Cor corFundo="#A14830" />
                            </div>
                            <div className="col-1">
                                <Cor corFundo="#000000" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mobile">
                        <p className="parcela-relacionados">Ou 6x de R$34,15</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}