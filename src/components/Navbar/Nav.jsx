import React from 'react'
import s from "./Nav.module.css"

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="#">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#">Message</a>
      </div>
      <div className={s.item}>
        <a href="#">News</a>
      </div>
      <div className={s.item}>
        <a href="#">Music</a>
      </div>
    </nav>
  );
}

export default Nav;