// import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-bgHeader2 pt-14 pb-5">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-3 pb-14">
          <div className="flex gap-x-14">
            <img src="/image1.svg" alt="" />
            <div className="flex gap-x-10">
              <NavLink to="/catalog">Каталог</NavLink>
              <NavLink to="#">О нас</NavLink>
              <NavLink to="#">Контакты</NavLink>
            </div>
          </div>
          <div className="flex gap-x-7">
            <img src="/image21.svg" alt="" />
            <img src="/image22.svg" alt="" />
            <img src="/image23.svg" alt="" />
          </div>
        </div>
        <span
          className="block bg-slate-400 w-full"
          style={{ height: "1px" }}
        ></span>
        <div className="flex justify-between gap-2 pt-5">
          <p className="text-textColor2">Maroon @ 2020 Все права защищены</p>
          <p className="text-textColor2">Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
