import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css"
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.dialogsPage.messagesData.map(m => <Message message={m.messages} />);

    /* let newDialogElement = React.createRef(); */
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

   /*  let onMessageChange = () => {
        let text = newDialogElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    } */

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(body))
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
                    <button onClick={addMessage} className={s.btnItem}>
                        Send
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
