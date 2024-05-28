// CSS
import styles from "./Missao.module.css";
// COMPONENT
import Transition from "../../components/Transition";
// IMGAGENS
import AboutImg from "../../../public/imgs/levelUpLogo2.png";
// FRAMER MOTION
import { motion } from "framer-motion";
import { useState } from "react";

const Missao = () => {
  const [soundClick] = useState<boolean>(false);

  const handleAudioButtonClick = () => {
    const audio = new Audio("/sounds/button_click.mp3");

    if (soundClick) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <Transition onAnimationComplete={() => {}}>
      <section className={[styles.about, styles.container].join(" ")}>
        <video
          className="video_background"
          autoPlay
          muted
          loop
          id="background-video"
        >
          <source src="video/bg-dragom.mp4" type="video/mp4" />
          Seu navegador não suporta o vídeo de fundo.
        </video>

        <div className={styles.container_img_skills}>
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: [0.3, 0, 0.2, 1],
            }}
          >
            <img className={styles.about_img} src={AboutImg} alt="about_img" />
          </motion.div>
        </div>

        <div>
          <motion.div
            className={styles.about_content}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.2, 0, 0.2, 1],
            }}
          >
            <h2>
              <span>{`//`}</span> Missão da <span>Level Up</span>
            </h2>

            <p>
              - Empoderar jovens, ajudando-os a descobrir e desenvolver seus
              pontos fortes, para que possam trilhar o melhor caminho rumo aos
              seus objetivos profissionais. Utilizamos métodos inovadores e
              interativos para garantir que cada jovem atinja potencial/máximo.
            </p>
          </motion.div>
          <motion.div
            className={styles.about_content}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.2, 0, 0.2, 1],
            }}
          >
            <h2>
              <span>{`//`}</span> Valores da <span>Level Up</span>
            </h2>

            <p>
              - Ser a principal referência em educação gamificada, criando um
              ambiente onde aprender é envolvente, inspirador e diretamente
              conectado às demandas do mercado de trabalho. Buscamos transformar
              a forma como o aprendizado profissional e percebido e
              implementado, preparando os jovens para o futuro com habilidades
              práticas e relevantes.
            </p>
          </motion.div>

          <div className={styles.btn_box}>
            <a
              href="pdf/riscos-level-up.pdf"
              download
              className={styles.btn}
              onClick={() => {
                handleAudioButtonClick();
              }}
            >
              Riscos Level UP
            </a>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default Missao;
