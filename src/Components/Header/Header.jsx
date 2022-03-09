import React from 'react';
import ThemeControl from '../ThemeControl/ThemeControl';
import Title from '../Title/Title';
import style from './Header.module.scss'
const Header = (props) => {
    return (
        <div className={style.container}>
            <Title />
            <ThemeControl theme={props.theme} toggle={props.toggle} />
        </div>
    );
}

export default Header;
