import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const mainGif = getImageUrl("hero/HitMemoji2.gif");
  const hoveredGif = getImageUrl("hero/HitMemoji.gif");
  const openResume = () => {
    window.open('https://docs.google.com/document/d/1vt2-cGaSi5IfQ4-ut_VijrA2k8Xv-Eu_cr9hIaH8yyo/edit?usp=sharing', '_blank');
  };

  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.style.animationPlayState = isPaused ? 'paused' : 'running';
    }
  }, [isPaused]);

  const handleMouseOver = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsPaused(false);
  }, []);

  const handleGifMouseEnter = useCallback((e) => {
    e.currentTarget.children[0].src = hoveredGif;
  }, [hoveredGif]);

  const handleGifMouseLeave = useCallback((e) => {
    e.currentTarget.children[0].src = mainGif;
  }, [mainGif]);

  // Preload hovered GIF
  useEffect(() => {
    const img = new Image();
    img.src = hoveredGif;
  }, [hoveredGif]);

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
        <button onClick={openResume} aria-label="Open Resume">Resume</button>
      </div>
      <div className={styles.heroImg}>
        <div
          className={styles.gifWrapper}
          onMouseEnter={handleGifMouseEnter}
          onMouseLeave={handleGifMouseLeave}
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
