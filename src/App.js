import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      {/* <Profile /> */}
      <div className="content">
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
