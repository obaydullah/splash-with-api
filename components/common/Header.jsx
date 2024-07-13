"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import "../../styles/header.css";

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);

  const handleMenu = () => {
    setMenuShow(!menuShow);
  };

  return (
    <>
      <div className="header__area">
        <div className="container">
          <div className="header">
            <div className="header__left">
              <Link href="/">
                <img
                  src="/images/header-logo.png"
                  alt=""
                  className="header-logo"
                />
              </Link>
              <ul className="mainmenu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/bonuses">Bonuses</Link>
                </li>
                <li>
                  <Link href="/leaderboard">Leaderboard</Link>
                </li>
              </ul>
            </div>
            <div className="header__right">
              <a href="#" className="btn btn__primary">
                Register
              </a>

              <FaBars className="menubar" onClick={handleMenu} />
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {menuShow && (
        <div className="mobile__menu">
          <div className="container">
            <IoMdClose className="close" onClick={handleMenu} />
            <ul className="mobilemenu__list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Bonuses</a>
              </li>
              <li>
                <a href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
