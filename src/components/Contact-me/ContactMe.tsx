"use client";
import React, { useState } from "react";
import styles from "./ContactMe.module.css";
import { sendEmail } from "../../utils/sendEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { HorizontalWrapper } from "../HorizontalWrapper";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Contact } from "../icons/Contact";

export const ContactMe = () => {
  const [wasSentEmail, setWasSentEmail] = useState<boolean>(false);
  const contactMe = async (formData: FormData) => {
    try {
      sendEmail(formData);
      setWasSentEmail(true);
      setTimeout(() => {
        setWasSentEmail(false);
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section id="contact" className={styles.contact}>
      <HorizontalWrapper>
        <article className={styles._container}>
          <div className={styles._header}>
            <p className={styles._title}>
              <Contact />
            </p>
            <p className={styles._subtitle}>
              Feel free to Contact me by submitting the form and I will get back
              to you as soon as possible
            </p>
          </div>
          <div className={styles._content}>
            {!wasSentEmail ? (
              <form
                className={styles._form}
                action={(formData) => contactMe(formData)}
              >
                <div className={styles.form__information}>
                  <div className={styles.form__name}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className={styles.form__email}>
                    <input
                      type="text"
                      name="email"
                      placeholder="Your e-mail"
                      required
                    />
                  </div>
                </div>
                <div className={styles.form__message}>
                  <input
                    type="text"
                    name="message"
                    placeholder="Enter your message here..."
                  ></input>
                </div>
                <div className={styles.form__button}>
                  <button type="submit">Send</button>
                </div>
              </form>
            ) : (
              <div className={styles._response}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>Thanks for contact me</p>
              </div>
            )}
          </div>
          <footer className={styles._footer}>
            <p>© Made by Andrés Cifuentes - 2025</p>
            <div className={styles.footer__social}>
              <Link href="https://www.linkedin.com/in/andr%C3%A9s-cifuentes-castro-513b74306/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="https://github.com/andrescf098">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </footer>
        </article>
      </HorizontalWrapper>
    </section>
  );
};
