import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>главная страница</NavLink>
        </li>
        <li>
          <NavLink to={"/bucket"}>ваша корзина</NavLink>
        </li>
        {/* <a href="https://www.wildberries.ru/">llllllll</a> */}
      </ul>
    </div>
  );
};

export default NavBar;
