import React from 'react'
import light from '../../Images/logo-light.svg'
import style from './Logo.module.scss'

export default function Logo() {
    return (
        <img src={light} className={`${style.logo} filter`} />
    )
}
