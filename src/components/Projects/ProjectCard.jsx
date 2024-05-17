import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div >
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
      </div>
      
          <div className={styles.links}>
            <a href={source} target="_blank" className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            </a>
          </div> 
      

    
    </div>

  );
};
