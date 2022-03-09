import React from 'react'
import NavItem from '../Nav/NavItem'
import style from './Login.module.scss'
import LoginLink from './LoginLink'

export default function Login(props) {
    let state = props.login.loginData
    return (
        <div className={`${style.container} background`}>
            <div className={style.block}>
                <img src={state.img} alt="avatar" />
                <div className={style.item}>
                    <p className='color'>{state.name}</p>
                    <button className={style.out}>Выйти</button>
                </div>
            </div>
            <div className={style.wrapper}>
                <LoginLink href="/support" name="Служба поддержки" message={state.message} />
                <LoginLink href="/settings" name="Настройки" />
            </div>
        </div>
    )
}
