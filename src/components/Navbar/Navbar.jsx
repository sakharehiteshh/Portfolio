import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToComponent = (id) => {
  const element = document.getElementById(id);
  if (!element) return;
  window.scroll({
    top: element.offsetTop - 20,
    behavior: 'smooth',
  });
};
  

  return (
    <div className={styles.navWrapper} id="nav">
      <nav className={styles.navbar}>
        <div className={styles.logowrap}>
            <img
              className={styles.logo}
              src={getImageUrl("nav/LogoHS.png")}
              alt="HITESH SAKHARE"
              onClick={() => scrollToComponent('nav')}
            />
        </div>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${
              menuOpen && styles.menuOpen
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <li onClick={() => scrollToComponent('about')}>About</li>
            <li onClick={() => scrollToComponent('skills')}>Skills</li>
            <li onClick={() => scrollToComponent('experience')}>Experience</li>
            <li onClick={() => scrollToComponent('projects')}>Projects</li>
            <li onClick={() => scrollToComponent('contact')}>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
