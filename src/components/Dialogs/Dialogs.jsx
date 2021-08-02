import React from 'react'
import { NavLink } from 'react-router-dom';
import { updateNewMessageText } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css"
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.dialogsPage.messagesData.map(m => <Message message={m.messages} />);

    let newDialogElement = React.createRef();
    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () =>{
        let text = newDialogElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div className={s.dialogsItems}>
                    {messagesElement}
                </div>

                <textarea onChange={onMessageChange} ref={newDialogElement} value={props.dialogsPage.newMessageText}></textarea>
                {/*  <input type="text" placeholder="Message..." ref={newDialogElement}/> */}
                <div className={s.btn}>
                    <button onClick={addMessage} className={s.btnItem}>
                        Send
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
