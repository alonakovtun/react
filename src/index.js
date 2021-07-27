import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
  { id: 1, message: "It's my first post", countLike: 15 },
  { id: 2, message: "Hi, how are you?", countLike: 20 }
];

let dialogsData = [
  { id: 1, name: 'Alona Kovtun' },
  { id: 2, name: 'Username' },
  { id: 3, name: 'Bob Potato' }
];

let messagesData = [
  { id: 1, messages: "Hello World!" },
  { id: 2, messages: "Hi!" },
  { id: 3, messages: "Bye!" }
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
