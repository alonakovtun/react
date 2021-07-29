import React from 'react'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css"
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.state.messagesData.map(m => <Message message={m.messages} />);

    let newDialogElement = React.createRef();
    let addMessage = () => {
        let dialog = newDialogElement.current.value;
        alert(dialog);
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

                <form>
                    <input type="text" placeholder="Message..."  ref={newDialogElement}/>
                    <div className={s.btn}>
                        <button onClick={addMessage} className={s.btnItem}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Dialogs;
