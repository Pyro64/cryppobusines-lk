import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './Title.module.scss'
const Title = (props) => {
    let location = useLocation();
    let title = location.state;
    if (title === null) {
        return (
            <h1 className={style.title}>Дашборд</h1>

        );
    } else {
        return (
            <h1 className={style.title}>{title.name}</h1>
        )
    }


}

export default Title;

