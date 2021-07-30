import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "It's my first post", countLike: 15 },
      { id: 2, message: "Hi, how are you?", countLike: 20 },
    ],
    newPostText: ''
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
    newMessageText: ''
  },
};

window.state = state;


export let addPost = () => { 
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    countLike: 0
  };
  state.profilePage.postsData.push(newPost)
  state.profilePage.newPostText = '';
  renderEntireTree(state);
} 

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export let addMessage = (message) => {
  let newMessage = {
    id: 4,
    messages: message
  };

  state.dialogsPage.messagesData.push(newMessage);
  renderEntireTree(state);
}

export let updateNewMessageText = (newText) =>{
  state.dialogsPage.newMessageText = newText;
  renderEntireTree(state);
}


export default state;
