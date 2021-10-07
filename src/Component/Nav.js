import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={"deep-purple darken-1"}>
      <div className={"nav-wrapper"}>
        <ul className={"left"}>
          <li>
            <Link to={"/"}>
              <a className={"white-text"}>หน้าหลัก</a>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <a className={"white-text"}>เกี่ยวกับ QR-Donate</a>
            </Link>
          </li>
          <li>
            <Link to={"/howto"}>
              <a className={"white-text"}>วิธีการใช้งาน</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
