// CSS
import styles from './Home.module.css'
// REACT ROUTER DOM
import { NavLink } from 'react-router-dom'
// COMPONENTS
import Transition from '../../components/Transition'
// REACT ICONS
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa6'
// IMGAGENS
import HomeImg from '../../../public/imgs/levelUpLogo.png'
// FRAMER MOTION
import { motion } from 'framer-motion'
import { useState } from 'react'

const Home = () => {
  const [soundClick] = useState<boolean>(false)

  const handleAudioButtonClick = () => {
    const audio = new Audio('/sounds/button_click.mp3')

    if (soundClick) {
      audio.pause()
    } else {
      audio.play()
    }
  }

  return (
    <>
      <Transition onAnimationComplete={() => {}}>
        <section className={[styles.home, styles.container].join(' ')}>
          <video
            className="video_background"
            autoPlay
            muted
            loop
            id="background-video"
          >
            <source src="video/videobg.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo de fundo.
          </video>
          <div className={styles.home_content}>
            <h1 className={styles.animate_h1}>Level UP</h1>

            {/* <div className={styles.transparent_text}>
                            <h3 className={styles.animation_text}>DESVENDE A MASMORRA</h3>
                        </div> */}
            <h3 className={styles.first_h3}>DESVENDE A MASMORRA</h3>
            <h3 className={styles.first_h3}>
              DO MERCADO DE <span>TRABALHO</span>
            </h3>

            <div className={styles.social_media}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 1.2,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: 'spring',
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <NavLink
                  to="https://api.whatsapp.com/send?phone=5562996106990"
                  className={styles.whatsapp_link}
                >
                  <FaWhatsapp />
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: 'spring',
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <NavLink
                  to="https://www.instagram.com/adventureandre/"
                  className={styles.instagram_link}
                >
                  <FaInstagram />
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.7,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: 'spring',
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <NavLink
                  to="https://www.linkedin.com/in/adventureandre"
                  className={styles.linkedin_link}
                >
                  <FaLinkedinIn />
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 1.9,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: 'spring',
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <NavLink
                  to="https://github.com/LevelUP-Startup"
                  className={styles.github_link}
                >
                  <FaGithub />
                </NavLink>
              </motion.div>
            </div>

            <div className={styles.btn_box}>
              <a
                href="pdf/Plano-de-negócio.pdf"
                download
                className={styles.btn}
                onClick={() => {
                  handleAudioButtonClick()
                }}
              >
                Plano de Negócio
              </a>
            </div>
          </div>

          <motion.div
            className={styles.home_img}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition={{
              duration: 2,
              delay: 0.7,
              ease: [0.2, 0, 0.2, 1],
            }}
          >
            <img src={HomeImg} alt="home_img" />
          </motion.div>
        </section>
      </Transition>
    </>
  )
}

export default Home
