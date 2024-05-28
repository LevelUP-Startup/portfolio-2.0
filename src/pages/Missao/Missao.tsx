// CSS
import styles from "./Missao.module.css";
// COMPONENT
import Transition from "../../components/Transition";
// IMGAGENS
import AboutImg from "../../../public/imgs/levelUpLogo2.png";
// FRAMER MOTION
import { motion } from "framer-motion";

const Missao = () => {
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

          {/* <div className={styles.skills}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.2, 0, 0.2, 1],
              }}
            >
              <h3>
                <span>{`//`}</span> Skills <span>&</span> Tolls
              </h3>
            </motion.div>

            <motion.div
              className={styles.icons_container}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>React</span>
                <BiLogoReact className={styles.react} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Redux</span>
                <BiLogoRedux className={styles.redux} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Typescript</span>
                <BiLogoTypescript className={styles.typescript} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Javascript</span>
                <BiLogoJavascript className={styles.javascript} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>MySQL</span>
                <GrMysql className={styles.mysql} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Bootstrap</span>
                <BiLogoBootstrap className={styles.bootstrap} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Git</span>
                <FaGitAlt className={styles.git} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>CSS</span>
                <BiLogoCss3 className={styles.css} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>HTML</span>
                <BiLogoHtml5 className={styles.html} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Firebase</span>
                <BiLogoFirebase className={styles.firebase} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Canva</span>
                <SiCanva className={styles.canva} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>VScode</span>
                <BiLogoVisualStudio className={styles.vscode} />
              </motion.div>
            </motion.div>
          </div> */}
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
        </div>
      </section>
    </Transition>
  );
};

export default Missao;
