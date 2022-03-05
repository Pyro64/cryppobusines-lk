import React from 'react';
import Login from '../Login/Login';
import Logo from '../Logo/Logo';
import NavContainer from '../Nav/NavContainer';
import style from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={style.container}>
            <Logo />
            <NavContainer />
            <Login />
        </div>
    );
}

export default Sidebar;
