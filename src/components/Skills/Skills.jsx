import React, { useState } from 'react';
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import showMoreImage from "../../../assets/skills/down.gif";
import hideImage from "../../../assets/skills/up.gif";
import { getImageUrl } from "../../utils";



export const Skills = () => {
    
  const [showAllSkills, setShowAllSkills] = useState(false);

  const toggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  // Define the number of skills to initially display and the increment when "Show More" is clicked
  const initialSkillsToShow = 19;
  const totalSkills = showAllSkills ? skills.length : initialSkillsToShow;
  
  
  return (
   <div id="skills">
     <section className={styles.container} >
        <h1 className={styles.title}>SKILLS</h1>
      <div className={styles.skills}>
        {skills.slice(0, totalSkills).map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
        <div className={styles.buttonWrapper}>
        {skills.length > initialSkillsToShow && (
          <div className={styles.skillImageContainer} id={styles.button} onClick={toggleSkills}>
            <img src={showAllSkills ? hideImage : showMoreImage} alt={showAllSkills ? "Hide" : "Show More"} />
          </div>
        )}
        <p className={styles.altText}>{showAllSkills ? "Hide" : "Show More"}</p>
        </div>
      </div>
    </section>
   </div>
  );
}

