import React, { useState } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

  const mainGif = getImageUrl("hero/HitMemoji2.gif");
  const hoveredGif = getImageUrl("hero/HitMemoji.gif");

  
  const [isPaused, setIsPaused] = useState(false);
  
  const handleMouseOver = () => {
      setIsPaused(true);
  };
  
  const handleMouseOut = () => {
      setIsPaused(false);
  };
  
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hitesh</h1>

        <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
        <marquee behavior="scroll" direction="up" className={styles.description} scrollamount={isPaused ? 0 : 3}>Hello, I'm Hitesh Vilas Sakhare, a dedicated and passionate software engineer with a Master of Science in Computer Science from the University of Dayton and a Bachelor of Engineering in Electronics Engineering from the University of Mumbai. With a solid foundation in both theoretical concepts and practical applications, I bring a diverse skill set and a wealth of experiences to every project I undertake.

Key Skills,

I specialize in a wide range of programming languages, including Java, Python, JavaScript, and SQL, allowing me to adapt to various project requirements seamlessly. My expertise extends to popular frameworks such as Angular, React, and Django, as well as cloud services like AWS, GCP, and Azure.

What Sets Me Apart is my ability to not only deliver high-quality code but also to think strategically and creatively to solve complex problems. Moreover, my commitment to continuous learning and professional development ensures that I stay updated with the latest technologies and best practices in the industry.

Thank you for taking the time to learn more about me. I look forward to the opportunity to collaborate and contribute to exciting projects that push the boundaries of what's possible in the world of technology.

</marquee>
</div>
        <a href="mailto:sakharehiteshh@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.heroImg}>

        <div className="gifWrapper" 
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
