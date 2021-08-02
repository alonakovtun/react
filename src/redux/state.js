const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "It's my first post", countLike: 15 },
        { id: 2, message: "Hi, how are you?", countLike: 20 },
      ],
      newPostText: "new post",
    },
    dialogsPage: {
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
      newMessageText: "new message",
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        countLike: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 4,
        messages: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default store;
window.store = store;
