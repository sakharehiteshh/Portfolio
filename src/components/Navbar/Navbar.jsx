import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollOffsets, setScrollOffsets] = useState({
    about: {
      "320": -30,
      "375": 0,
      "425": -40,
      "768": -100,
      "1024": -150,
      "1440": -200,
      "2560": -250
    },
    skills: {
      "320": -800,
      "375": -750,
      "425": -500,
      "768": -475,
      "1024": -500,
      "1440": -500,
      "2560": -550
    },
    experience: {
      "320": -800,
      "375": -800,
      "425": -850,
      "768": -675,
      "1024": -650,
      "1440": -600,
      "2560": -650
    },
    projects: {
      "320": -900,
      "375": -875,
      "425": -35,
      "768": -50,
      "1024": -60,
      "1440": -70,
      "2560": -80
    },
    contact: {
      "320": 50,
      "375": 0,
      "425": 0,
      "768": 0,
      "1024": 0,
      "1440": 0,
      "2560": 0
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newOffsets = {};
      Object.keys(scrollOffsets).forEach(section => {
        newOffsets[section] = scrollOffsets[section][width.toString()] || 0;
      });
      setScrollOffsets(newOffsets);
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.navWrapper} id="nav">
      <nav className={styles.navbar}>
        <div className={styles.logowrap}>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-1000}
            duration={200}
          >
            <img
              className={styles.logo}
              src={getImageUrl("nav/LogoHS.png")}
              alt="HITESH SAKHARE"
            />
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
            className={`${styles.menuItems} ${
              menuOpen && styles.menuOpen
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={scrollOffsets.about}
                duration={100}
                aria-label="About"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={scrollOffsets.skills}
                duration={100}
                aria-label="Skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={scrollOffsets.experience}
                duration={100}
                aria-label="Experience"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={scrollOffsets.projects}
                duration={100}
                aria-label="Projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={scrollOffsets.contact}
                duration={100}
                aria-label="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
