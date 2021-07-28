import React from 'react'
import { NavLink } from 'react-router-dom';
import s from "./Message.module.css"


const Message = (props) => {
    return (
        <div className={s.message}>
            <img src="https://image.flaticon.com/icons/png/512/594/594846.png" alt="" width="15" height="15" />
            <span>{props.message}</span>
        </div>


    )
}

export default Message;
