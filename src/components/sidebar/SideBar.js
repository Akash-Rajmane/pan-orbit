import React from 'react';
import "./sidebar.css";
import { sidebarData } from './sidebarData';
import {NavLink} from "react-router-dom";

const SideBar = () => {
  return (
    <nav className={"sidebar"}>
        <ul className={"nav-content"}>
        {sidebarData.map((item, index) => {
              return (
                <li key={index}  className={item.cName}>
                  <NavLink to={item.path} >
                    <span >{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
        </ul>
    </nav>
  )
}

export default SideBar;