import React, { useState } from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import showMoreImage from "../../../assets/skills/down.gif";
import hideImage from "../../../assets/skills/up.gif";

export const Experience = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const toggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  // Define the number of skills to initially display and the increment when "Show More" is clicked
  const initialSkillsToShow = 7;
  const incrementSkills = 5;
  const totalSkills = showAllSkills ? skills.length : initialSkillsToShow;

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
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
          {skills.length > initialSkillsToShow && (
            <button className={styles.skillImageContainer} onClick={toggleSkills}>
               <img src={showAllSkills ? hideImage : showMoreImage} alt={showAllSkills ? "Hide" : "Show More"} />
            </button>
          )}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  {/* <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
