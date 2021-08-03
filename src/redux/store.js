import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "It's my first post", countLike: 15 },
        { id: 2, message: "Hi, how are you?", countLike: 20 },
      ],
      newPostText: "",
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
      newMessageText: "",
    },
    sidebar: {},
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
    profileReducer(this._state.profilePage, action);
    dialogReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};


export default store;
window.store = store;
