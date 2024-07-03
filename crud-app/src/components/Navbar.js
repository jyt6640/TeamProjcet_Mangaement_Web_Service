import React, { useState, useEffect } from "react";
import './css/Navbar.css';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${navBackground ? "navbar-scrolled" : ""}`}>
      <img className="logo" src="/img/yANUs.png" alt="yANUs Logo" />
      <ul className="nav-links">
        <li><a href="/home">홈</a></li>
        <li><a href="/about">소개</a></li>
        <li><a href="/services">서비스 사용법</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
      <div className="login">
        <a href="/login">LOGIN</a>
      </div>
    </div>
  );
};

export default Navbar;
