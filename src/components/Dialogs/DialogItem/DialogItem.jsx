import React from 'react'
import { NavLink } from 'react-router-dom';
import s from "./DialogItem.module.css"


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img src="https://image.flaticon.com/icons/png/512/149/149995.png" alt="" width="30" height="30"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
