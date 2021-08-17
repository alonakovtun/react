const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [
    { id: 1, messages: "Hello World!" },
    { id: 2, messages: "Hi!" },
    { id: 3, messages: "Bye!" },
  ],
  dialogsData: [
    { id: 1, name: "Alona Kovtun" },
    { id: 2, name: "Username" },
    { id: 3, name: "Bob Potato" },
  ],
  newMessageText: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        messages: state.newMessageText,
      };
     return { 
        ...state,
        newMessageText: "",
        messagesData: [ ...state.messagesData, newMessage],
       };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { 
        ...state,
        newMessageText: action.newText
       };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default dialogReducer;
