import React from 'react'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css"
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Alona Kovtun' },
        { id: 2, name: 'Username' },
        { id: 3, name: 'Bob Potato' }
    ];

    let messagesData = [
        { id: 1, messages: "Hello World!" },
        { id: 2, messages: "Hi!" },
        { id: 3, messages: "Bye!" },

    ];

    let dialogsElements = dialogsData.map( d =>  <DialogItem name={d.name} id={d.id} />);
    let messagesElement = messagesData.map( m => <Message message={m.messages} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;
