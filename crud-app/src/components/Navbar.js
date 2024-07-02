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
        <li>홈</li>
        <li>소개</li>
        <li>서비스 사용법</li>
        <li>FAQ</li>
      </ul>
      <div className="login">
        <a href="/login">LOGIN</a>
      </div>
    </div>
  );
};

export default Navbar;
