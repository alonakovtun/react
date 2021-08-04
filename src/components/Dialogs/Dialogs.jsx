import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css"
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = state.messagesData.map(m => <Message message={m.messages} />);

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div className={s.dialogsItems}>
                    {messagesElement}
                </div>

                <textarea
                    onChange={onNewMessageChange}
                    /* ref={newDialogElement} */
                    value={props.dialogsPage.newMessageText}
                    placeholder="Enter your massage">
                </textarea>
                {/*  <input type="text" placeholder="Message..." ref={newDialogElement}/> */}
                <div className={s.btn}>
                    <button onClick={onSendMessage} className={s.btnItem}>
                        Send
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
