import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    };

    return (
        <Dialogs
            updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessage}
            dialogsPage={state} />
    );
}

export default DialogsContainer;
