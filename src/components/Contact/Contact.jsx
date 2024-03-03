import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className="contact">
        <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:sakharehiteshh@gmail.com" target ="blank"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /><p>sakharehiteshh@gmail.com</p></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/hiteshsakhare/" target ="blank"><img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/><p>linkedin.com/in/hiteshsakhare/</p></a>
        </li>
        <li className={styles.link}>
          
          <a href="https://github.com/sakharehiteshh/" target ="blank"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /><p>github.com/sakharehiteshh/</p></a>
        </li>
      </ul></div>
    </footer>
  );
};
