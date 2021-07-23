import React from 'react'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css"
import Message from './Message/Message';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Alona Kovtun" id="1"/>
                <DialogItem name="Username" id="2"/>
                <DialogItem name="Bob Potato" id="3"/>
            </div>

            <div className={s.messages}>
                <Message message="Hello World!" />
                <Message message="Hi!" />
                <Message message="Bye!" />
            </div>
        </div>
    )
}

export default Dialogs;
