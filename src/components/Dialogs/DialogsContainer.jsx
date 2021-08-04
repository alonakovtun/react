import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import storeContext from '../../storeContext';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    return (
        <storeContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageTextActionCreator(body));
                };

                return <Dialogs
                    updateNewMessageText={onNewMessageChange}
                    sendMessage={onSendMessage}
                    dialogsPage={state} />
            }
        }

        </storeContext.Consumer>
    );
}

export default DialogsContainer;
