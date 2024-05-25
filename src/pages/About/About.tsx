// CSS
import styles from './About.module.css'
// COMPONENT
import Transition from '../../components/Transition'
// IMGAGENS
import AboutImg from '../../../public/imgs/levelUpLogo.png'
// FRAMER MOTION
import { motion } from 'framer-motion'
// REACT ICONS
import { FaGitAlt } from 'react-icons/fa6'
import { GrMysql } from 'react-icons/gr'
import { SiCanva } from 'react-icons/si'
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoFirebase,
  BiLogoRedux,
  BiLogoVisualStudio,
  BiLogoBootstrap,
} from 'react-icons/bi'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const About = () => {
  return (
    <Transition onAnimationComplete={() => {}}>
      <section className={styles.about}>
        <div className={styles.container_img_skills}>
          <motion.div
            initial={{ opacity: 0, y: '80%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: [0.3, 0, 0.2, 1],
            }}
          >
            <img className={styles.about_img} src={AboutImg} alt="about_img" />
          </motion.div>

          <div className={styles.skills}>
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
                <span>//</span> Skills <span>&</span> Tolls
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
          </div>
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
              <span>//</span> Quem é <span>André Luiz</span>
            </h2>

            <p>
              - Olá! Eu sou o André Luíz, um apaixonado por programação e
              desenvolvimento de soluções inovadoras. Com habilidades sólidas em
              JavaScript, TypeScript, ReactJS, React Native, NextJS e NodeJS,
              tenho experiência FullStack e utilizo metodologias ágeis como
              Scrum e Kanban. Ao longo da minha carreira, aprimorei meu
              conhecimento em Css-in-JS (Stitches, Styled-Components) e adquiri
              familiaridade com tecnologias como REST, SOLID, arquitetura MVC,
              Docker, MonoRepo e TurboRepo. Além disso, possuo noções de Python,
              Java, TDD e BDD.
            </p>
          </motion.div>
        </div>
      </section>
    </Transition>
  )
}

export default About
