import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className={styles.navWrapper} id="nav">
      <nav className={styles.navbar}>
          <div className={styles.logowrap}>
        <Link to="hero" spy={true} smooth={true} offset={-1000} duration={200}>
            <img className={styles.logo} src={getImageUrl("nav/LogoHS.png")} alt="HITESH SAKHARE"/>
            {/* <h1 className={styles.title}></h1> */}
        </Link>
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
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="about" spy={true} smooth={true} offset={-300} duration={100}>About</Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} offset={-400} duration={100}>Skills</Link>
          </li>
          <li>
            <Link to="experience" spy={true} smooth={true} offset={-500} duration={100}>Experience</Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={100}>Projects</Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={0} duration={100}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};
