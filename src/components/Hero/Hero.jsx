import React, { useState, useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const mainGif = getImageUrl("hero/HitMemoji2.gif");
  const hoveredGif = getImageUrl("hero/HitMemoji.gif");
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1mI1pgsCrZIexSEyts0Lf1rQWVcF6N1Io/view', '_blank');
  };

  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.style.animationPlayState = isPaused ? 'paused' : 'running';
    }
  }, [isPaused]);

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };

  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hitesh</h1>
        <div
          className={styles.scrollContainer}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
         
        >
          <div className={styles.scrollText} ref={scrollContainerRef}>
            👋 Hello! I'm Hitesh Sakhare, a Software Engineer with a serious passion for using technology to unravel complex problems and craft captivating user experiences. My journey in software development is backed by a Master’s degree in Computer Science from the University of Dayton, and I approach every new project with an undying spirit for innovation and a comprehensive skill set.
            <br /><br />
            🔍 What I Do: I have a knack for simplifying complex challenges. From crafting responsive web applications to analyzing big data and building efficient data pipelines, my approach blends sophisticated programming skills with the latest frameworks and cloud technologies. This ensures that every project is not only cutting-edge but also robust and scalable. I'm constantly on the pulse of new tech trends, adapting quickly, and finding smarter ways to boost efficiency and spark innovation. My goal? To deliver solutions that propel businesses forward and keep them at the forefront.
            <br /><br />
            My journey hasn't just been about coding and data. Working with diverse teams and clients has honed my interpersonal skills: Communication, Teamwork, Ownership, Multitasking, Flexibility, Curiosity, and Adaptability.
            <br /><br />
            📈 Looking Ahead: I’m on the lookout for opportunities to collaborate with fellow tech enthusiasts and to tackle challenges that stretch the limits of software engineering. Whether it’s pioneering new applications or enhancing existing ones, I'm all about adding remarkable value and achieving great results.
          </div>

        </div>
        <button onClick={openResume} className={styles.contactBtn}>Resume</button>
      </div>
      <div className={styles.heroImg}>
        <div
          className={styles.gifWrapper}
          onMouseEnter={(e) => { e.currentTarget.children[0].src = hoveredGif; }}
          onMouseLeave={(e) => { e.currentTarget.children[0].src = mainGif; }}
        >
          <img
            src={mainGif}
            alt="Hero GIF"
            className={styles.heroImg}
          />
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
