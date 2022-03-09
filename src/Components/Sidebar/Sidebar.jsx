import React from 'react';
import LoginContainer from '../Login/LoginContainer';
import Logo from '../Logo/Logo';
import NavContainer from '../Nav/NavContainer';
import style from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={style.container}>
            <Logo />
            <NavContainer />
            <LoginContainer />
        </div>
    );
}

export default Sidebar;
