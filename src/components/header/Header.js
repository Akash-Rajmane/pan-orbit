import React from 'react';
import { useLocation } from 'react-router';
import "./header.css";

const Header = () => {
  let location = useLocation();
  let title = location.pathname.slice(1);

    return (
    <header className={"header"}>
        <h3 className={"title"}>
            {title}
        </h3>
       <div className='user-data'>
        <div className='circle'></div>
        <span>username abcdfefsfa</span>
       </div>
    </header>
  )
}

export default Header;