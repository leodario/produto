import React from 'react'
import '../css/Rodape.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import News from './News'
import MenuRodape from './MenuRodape'
import Logo from '../img/logo-rodape.png'
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'


export default function Rodape() {
    return (
        <div className="Rodape">
            <div className="row desktop">
                <div className="col-md-8">

                </div>
                <div className="col-md-4 Newsletter">
                    <News />
                </div>
            </div>
            <hr className="Linha desktop" />
            <div className="row mobile">
                <div className="col-12 mobile">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-menu">
                            Institucional
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">A marca</Dropdown.Item>
                            <Dropdown.Item href="#">Lojas</Dropdown.Item>
                            <Dropdown.Item href="#">Contato</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-12 mobile">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-menu">
                        Informações
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Formas de Pagamento</Dropdown.Item>
                            <Dropdown.Item href="#">Trocas e devoluções</Dropdown.Item>
                            <Dropdown.Item href="#">Cuidados Com o Produto</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-12 mobile">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-menu">
                        Conheça
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Franquias e Multimarcas</Dropdown.Item>
                            <Dropdown.Item href="#">Trabalhe com a gente</Dropdown.Item>
                            <Dropdown.Item href="#">Procon-RJ</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="row Redes-sociais">
                <div className="col">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-12">
                    <MenuRodape />
                </div>
                <div className="col-12 mobile">
                    <News />
                </div>
            </div>
            <div className="row Rodape-laranja">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <p className="texto-rodape-laranja">Via Mia | V. Milano Centro Comercial de Bolsas Eireli - EPP. <br/> Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100 <br/>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - <br/>E-mail: ecommerce@viamia.com.br</p>
                </div>
                <div className="col-md-4 logo-rodape text-center">
                    <img src={ Logo } alt="Logo"/>
                </div>
            </div>
        </div>
    )
}