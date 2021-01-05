import React from 'react'
import '../css/Preco.css'

export default function Preco(props) {
    return (
        <div className="row Preco">
            <div className="desktop">
                <div className="col-12 Preco-linha">
                    <span className="Preco-normal">R${props.precoNormal} | </span> <span className="Preco-promocional"> R${props.promocional}</span>
                </div>
                <div className="col-12">
                    <span className="Parcelado">Ou {props.numeroParcelas}x de R${props.valorParcelas}</span>
                </div>
            </div>
            <div className="mobile">
                <div className="col-12 Preco-linha">
                    <span className="Preco-normal">R${props.precoNormal}</span>
                </div>
                <div className="col-12 Preco-linha">
                    <span className="Preco-promocional">R${props.promocional}</span>
                </div>
                <div className="col-12">
                    <span className="Parcelado">Ou {props.numeroParcelas}x de R${props.valorParcelas}</span>
                </div>
            </div>
        </div>
    )
}