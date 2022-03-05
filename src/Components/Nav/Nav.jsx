import React from 'react'
import NavItem from './NavItem'
import style from './Nav.module.scss'



export default function Nav(props) {
    let state = props.nav;
    let navElements = state.navData.map(nav =>
        <NavItem
            id={nav.id}
            svg={nav.svg}
            name={nav.name}
            href={nav.href}
            key={nav.id}
        />
    )
    return (
        <div className={style.container}>
            {navElements}
        </div>
    )
}
