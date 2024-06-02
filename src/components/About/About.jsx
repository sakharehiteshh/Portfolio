import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section id="about">
      <div className={styles.container}>

      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/HitMemoji3.gif")}
          alt="looking"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/web.gif")} alt="Web icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm a Full-Stack Developer with experience in building responsive sites and developing optimized APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ai.gif")} alt="AI icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning & AI</h3>
              <p>
              Experienced in implementing machine learning algorithms using libraries like TensorFlow and scikit-learn, optimizing models for accuracy and efficiency 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/database.gif")} alt="Database icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineering</h3>
              <p>
              Skilled in designing and implementing data pipelines, ensuring reliable data processing and analysis.
              </p>
            </div>
          </li>
        </ul>
      </div>

      </div>
    </section>
  );
};
