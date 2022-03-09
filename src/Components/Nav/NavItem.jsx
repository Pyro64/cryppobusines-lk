import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.scss'
export default function NavItem(props) {

    return (
        <NavLink state={{ name: props.name }} to={props.href} className={({ isActive }) => isActive ? `${style.link} ${style.active} background` : `${style.link} background`}>
            <img src={props.svg} alt={props.name} />
            <p>{props.name}</p>
        </NavLink>
    )
}
