// CSS
import styles from "./Contact.module.css";
// HOOKS
import { useState } from "react";
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// COMPONENT
import Transition from "../../components/Transition";
// EMAILJS
import emailjs from "@emailjs/browser";
// SWEETALERT
import Swal from "sweetalert2";
// FRAMER MOTION
import { motion } from "framer-motion";
// REACT ICONS
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [subjectError, setSubjectError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      subject === "" ||
      message === ""
    ) {
      setNameError(name === "");
      setEmailError(email === "");
      setPhoneError(phone === "");
      setSubjectError(subject === "");
      setMessageError(message === "");

      return;
    }

    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setSubjectError(false);
    setMessageError(false);

    const templateParams = {
      name,
      email,
      phone,
      subject,
      message,
    };

    emailjs
      .send(
        "service-test",
        "template_kips",
        templateParams,
        "jepDfkVVycJn4KjTM"
      )
      .then(
        (response) => {
          if (response.status === 200) {
            Swal.fire({
              title: "Otimo!",
              text: "Mensagem enviada com sucesso!",
              icon: "success",
            });
          }

          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("ERRO AO ENVIAR O EMAIL ", error);
        }
      );
  }

  return (
    <Transition onAnimationComplete={() => {}}>
      <section className={[styles.contact, styles.container].join(" ")}>
        <video
          className={styles.video_background}
          autoPlay
          muted
          loop
          playsInline
          id="background-video"
        >
          <source src="video/dragao.mp4" type="video/mp4" />
          Seu navegador não suporta o vídeo de fundo.
        </video>
        <div className={styles.header_container}>
          <h2>
            <span>{`//`}</span> Contate <span>Nos!</span>
          </h2>

          <div className={styles.social_media}>
            <motion.div
              className={styles.icon_container}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 3,
                delay: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <NavLink
                to="https://www.instagram.com/insights_level_up?igsh=YnFjdGF5dGZlYWhp"
                target="_blank"
                className={styles.instagram_link}
              >
                <FaInstagram />
              </NavLink>
            </motion.div>

            <motion.div
              className={styles.icon_container}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 3,
                delay: 1.9,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <NavLink
                to="https://github.com/LevelUP-Startup"
                target="_blank"
                className={styles.github_link}
              >
                <FaGithub />
              </NavLink>
            </motion.div>
          </div>
        </div>

        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.input_box}>
            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Nome Completo"
                className={`${styles.item} ${nameError ? styles.error : ""}`}
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                value={name}
              />

              <div
                id="error_name"
                className={`${styles.error_message} ${nameError ? styles.show_message : ""}`}
              >
                Nome não pode ficar em branco
              </div>
            </div>

            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="email"
                placeholder="Endereço do Email"
                className={`${styles.item} ${emailError ? styles.error : ""}`}
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                value={email}
              />

              <div
                id="error_email"
                className={`${styles.error_message} ${emailError ? styles.show_message : ""}`}
              >
                Email não pode ficar em branco
              </div>
            </div>
          </div>

          <div className={styles.input_box}>
            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="number"
                placeholder="Número do Telefone"
                className={`${styles.item} ${phoneError ? styles.error : ""}`}
                id="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError(false);
                }}
                value={phone}
              />

              <div
                id="error_phone"
                className={`${styles.error_message} ${phoneError ? styles.show_message : ""}`}
              >
                Telefone não pode ficar em branco
              </div>
            </div>

            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Assunto"
                id="subject"
                className={`${styles.item} ${subjectError ? styles.error : ""}`}
                onChange={(e) => {
                  setSubject(e.target.value);
                  setSubjectError(false);
                }}
                value={subject}
              />

              <div
                id="error_subject"
                className={`${styles.error_message} ${subjectError ? styles.show_message : ""}`}
              >
                Assunto não pode ficar em branco
              </div>
            </div>
          </div>

          <div className={`${styles.textarea_field} ${styles.field}`}>
            <textarea
              name=""
              placeholder="Sua mensagem"
              id="message"
              cols={30}
              rows={10}
              className={`${styles.item} ${messageError ? styles.error : ""}`}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
              value={message}
            ></textarea>

            <div
              id="error_message"
              className={`${styles.error_message} ${messageError ? styles.show_message : ""}`}
            >
              Mensagem não pode ficar em branco
            </div>
          </div>

          <div className={styles.btn_box}>
            <button className={styles.btn} type="submit">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </section>
    </Transition>
  );
};

export default Contact;
