
import React from "react";
import style from './ThemeControl.module.scss'
export default function ThemeControl(props) {
    let toggle = props.toggle
    return (
        <div onClick={toggle} className={style.block}>
            <div className={`${style.item} switchTheme`}>
            </div>
        </div>
    )
}
