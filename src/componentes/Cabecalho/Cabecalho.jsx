import React from 'react'
import logo from '../img/logo-topo.png'
import '../css/Cabecalho.css'
import LoginCadastro from './LoginCadastro'
import Menu from './Menu'
import Busca from './Busca'
import Sacola from './Sacola'
import lupa from '../img/Union.png'

export default function Cabecalho() {
    return (
        <header>
            {/*Header desktop*/}
            <div className="header-desktop">
                <div className="container-fluid">
                    <div className="row">
                        <div className="Sessao1 col-12">
                            <img src={logo} alt="Logo" className="Logo" />
                        </div>
                    </div>
                </div>

                <div className="Sessao2">
                    <div className="container-fluid">
                        <div className="row">
                            <LoginCadastro />
                            <Menu />
                            <Busca />
                            <Sacola />
                        </div>
                    </div>

                </div>
            </div>
            {/*Header mobile*/}
            <div className="header-mobile">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            
                        </div>
                        <div className="col-6">
                            <img src={logo} alt="Logo" className="Logo" />
                        </div>
                        <div className="col-1">
                            <Busca />
                        </div>
                        <div className="col-2" zIndex={'20'}>
                            <Sacola />
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>


        </header>
    )
}