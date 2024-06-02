import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_z68dc6j",
        "template_ti8v6zr",
        formRef.current,
        "unTCKpU6iA1G9l8dx"
      );
      console.log(result.text);
      setDone(true);
      formRef.current.reset(); // Clear the form fields after submission

      // Hide the thank you message after 5 seconds
      setTimeout(() => {
        setDone(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("An error occurred while sending the email. Please try again later.");
    }
  };

  return (
    <footer id="contact">
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Let's Connect</h2>
          <p>Feel free to reach out to me!</p>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a href="mailto:sakharehiteshh@gmail.com" target="blank">
                <img
                  src={getImageUrl("contact/emailIcon.png")}
                  alt="Email icon"
                />
                <p>sakharehiteshh@gmail.com</p>
              </a>
            </li>
            <li className={styles.link}>
              <a href="https://www.linkedin.com/in/hiteshsakhare/" target="blank">
                <img
                  src={getImageUrl("contact/linkedinIcon.png")}
                  alt="LinkedIn icon"
                />
                <p>linkedin.com/in/hiteshsakhare/</p>
              </a>
            </li>
            <li className={styles.link}>
              <a href="https://github.com/sakharehiteshh/" target="blank">
                <img
                  src={getImageUrl("contact/githubIcon.png")}
                  alt="Github icon"
                />
                <p>github.com/sakharehiteshh/</p>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.formwrap}>
          <h1>Send me a message!!</h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" required />
            <input type="text" placeholder="Subject" name="user_subject" required />
            <input type="email" placeholder="Email" name="user_email" required />
            <textarea rows="15" placeholder="Message" name="message" required />
            <button type="submit">Submit</button>
            {done }{ <p className={styles.thankYou}>Thank you, I'll contact you soon.</p>}
          </form>
        </div>
      </div>

    </footer>
  );
};
