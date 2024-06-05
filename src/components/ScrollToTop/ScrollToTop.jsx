import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import scrollUpImg from "../../../assets/skills/up.gif";



export const ScrollToTop = () => {
    
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            window.scrollY > 100 ? setBackToTopButton(true) : setBackToTopButton(false)
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopButton && (
                <button className={styles.scrollTop} style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                }} onClick={scrollUp}><img className={styles.scrollTopImg}  src={scrollUpImg}></img></button>
            )}
        </div>
    );
}

