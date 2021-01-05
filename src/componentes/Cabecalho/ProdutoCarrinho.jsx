import React from 'react'
import Imagem from '../img/prod02.png'

export default function ProdutoCarrinho (props) {
    return (
        <div className="col-12 produto-carrinho">
            <div className="row">
                <div className="col-3">
                    <img src={ props.imagem } alt="Imagem Produto" className="imagem-carrinho"/>
                </div>
                <div className="col-3 alinhar-esquerda">
                    <p className="titulo-produto-carrinho">{ props.titulo }</p>
                    <span className="preco-produto-carrinho">R${props.preco}</span>
                </div>
                <div className="col-3">
                    <div className="row alterar-quantidade-carrinho">
                        <div className="col-4">
                            <button className="botao-menos-carrinho">-</button>
                        </div>
                        <div className="col-4">
                            <span className="selecionar-quantidade-carrinho"> {props.quantidade} </span>
                        </div>
                        <div className="col-4">
                            <button className="botao-mais-carrinho">+</button>
                        </div>
                    </div>
                </div>
                <div className="col-3 remover-carrinho">
                    <button className="botao-remover-carrinho">X</button>
                </div>
            </div>
        </div>
    )
}