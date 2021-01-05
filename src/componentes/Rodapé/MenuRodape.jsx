/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/MenuRodape.css'
import seloebit from '../img/selo-ebit.png'
import selovtex from '../img/vtex-pci-200.png'

export default function MenuRodape() {
    return (
        <div className="row MenuRodape">
            <div className="col-md-3 Selos-seguranca desktop">
                <img src={seloebit} alt="Selo de segurança" />
                <img src={selovtex} alt="Selo de segurança" />
            </div>
            <div className="col-md-3 Selos-seguranca mobile">
                <img src={selovtex} alt="Selo de segurança" />
                <img src={seloebit} alt="Selo de segurança" />
            </div>
            <div className="col-md-3 Menu-rodape desktop">
                <h4>Institucional</h4>
                <ul>
                    <li><a href="#">A marca</a></li>
                    <li><a href="#">Lojas</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div className="col-md-3 Menu-rodape desktop">
                <h4>Informações</h4>
                <ul>
                    <li><a href="#">Formas de Pagamento</a></li>
                    <li><a href="#">Trocas e devoluções</a></li>
                    <li><a href="#">Cuidados Com o Produto</a></li>
                </ul>
            </div>
            <div className="col-md-3 Menu-rodape desktop">
                <h4>Conheça</h4>
                <ul>
                    <li><a href="#">Franquias e Multimarcas</a></li>
                    <li><a href="#">Trabalhe com a gente</a></li>
                    <li><a href="#">Procon-RJ</a></li>
                </ul>
            </div>
        </div>
    )
}