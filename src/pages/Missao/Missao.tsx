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

        <div className={styles.about_container}>
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
              Inspiração: Incentivamos a busca pela melhor versão de si mesmo e
              a compreensão dos pontos fortes para atingir objetivos.
              <br />
              Cuidado: Prioridade para as pessoas antes dos processos.
              <br />
              Autonomia e Liberdade: Valorizamos a autonomia dos clientes e
              colaboradores, incentivando a tomada de decisões próprias.
              <br />
              Tecnologia e Inovação: Compromisso com soluções inovadoras e
              tecnologias de ponta.
              <br />
              Criatividade: Valorizamos ideias pensadas fora da caixa.
              <br />
              Colaboração: Promovemos a colaboração e o trabalho em equipe,
              acreditando que melhores resultados são alcançados juntos.
              <br />
              Excelência: Compromisso em revolucionar o ensino com qualidade
              impactante e interativa.
            </p>
          </motion.div>

          <div className={styles.about_cards}>
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
                interativos para garantir que cada jovem atinja
                potencial/máximo.
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
                conectado às demandas do mercado de trabalho. Buscamos
                transformar a forma como o aprendizado profissional e percebido
                e implementado, preparando os jovens para o futuro com
                habilidades práticas e relevantes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.2, 0, 0.2, 1],
              }}
            >
              <div className={styles.scratch}>
                <div className={styles.btn_box}>
                  <a
                    href="pdf/riscos-level-up.pdf"
                    download
                    className={styles.btn}
                    onClick={() => {
                      handleAudioButtonClick();
                    }}
                  >
                    Riscos
                  </a>
                </div>

                <p>Saiba mais sobres os riscos da Level UP.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default Missao;
