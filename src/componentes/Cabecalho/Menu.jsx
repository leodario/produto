import React, { useState } from 'react'
import '../css/Menu.css'
import MenuItem from './MenuItem'
import { BrowserRouter } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export default function Menu() {

    const [menu, setMenu] = useState(false)

    function toogleMenu() {
        setMenu(!menu)
    }

    const show = (menu) ? "show" : "";

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-md col-md-6 Menu col-12 desktop">
                <button className="navbar-toggler" type="button" onClick={toogleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse " + show}>
                    <ul className="navbar-nav">
                        <MenuItem link="#" item="Sapatos" />
                        <MenuItem link="#" item="Bolsas" />
                        <MenuItem link="#" item="Acessórios" />
                        <MenuItem link="#" item="Off" />
                    </ul>
                </div>
            </nav>

            <Navbar expand="lg" className="Menu-mobile">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  zIndex={10}>
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Sapatos</Nav.Link>
                        <Nav.Link href="#">Bolsas</Nav.Link>
                        <Nav.Link href="#">Acessórios</Nav.Link>
                        <Nav.Link href="#">Off</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </BrowserRouter>
    )
}