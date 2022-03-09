import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Login.module.scss'
export default function LoginLink(props) {

    if (props.message) {
        return (
            <NavLink state={{ name: props.name }} to={props.href} className={({ isActive }) => isActive ? `${style.link} ${style.active} color` : `${style.link} color`}>
                {props.name}
                <div className={style.message}>
                    {props.message}
                </div>
            </NavLink>
        )
    } else
        return (
            <NavLink state={{ name: props.name }} to={props.href} className={({ isActive }) => isActive ? `${style.link} ${style.active} color` : `${style.link} color`}>
                {props.name}
            </NavLink>
        )
}
