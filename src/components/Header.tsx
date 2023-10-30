// import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-bgHeader shadow-orange-200 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-8 flex  justify-between ">
        <div className="logo">
          <NavLink to="/">
            <img src="/image1.svg" alt="" />
          </NavLink>
        </div>
        <div className="flex gap-x-9">
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="#">О нас</NavLink>
          <NavLink to="#">Контакты</NavLink>
          <div className="flex gap-x-5 ">
            <NavLink to="/">
              <img src="/image4.svg" alt="" />
            </NavLink>
            <NavLink to="/kor">
              <img src="/image5.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
