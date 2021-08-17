import React from 'react'
import s from  "./Header.module.css"

const Header = () =>{
    return(
    <header className={s.header}>
        <img
          src="https://www.alamerbrighton.com.au/wp-content/themes/alamerlp/images/alamer-logo.svg" 
          height="70"
          alt="img"
        ></img>
      </header>
    );
}

export default Header;