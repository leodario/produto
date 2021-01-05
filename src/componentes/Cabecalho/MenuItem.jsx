import React from 'react'
import '../css/MenuItem.css'
import { Link } from 'react-router-dom'

export default function MenuItem(props) {
    return (
        <li className="nav-item">
            <Link to={props.link} className="MenuItem">{props.item}</Link>
        </li>
    )
}