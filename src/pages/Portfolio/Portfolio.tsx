// CSS
import './Portfolio.css'
import styles from './Portfolio.module.css'
// HOOKS
import { useState, useEffect, useRef } from 'react'
// REACT ROUTER DOM
import { NavLink } from 'react-router-dom'
// COMPONENT
import Transition from '../../components/Transition'
// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
// IMGAGENS
import NayImg from '../../../public/imgs/nay.jpeg'

const Equipe = () => {
  const [slidePerview, setSlidePerview] = useState<number>(3)
  const [initialSlide] = useState<number>(1)
  const [transitionCompleted, setTransitionCompleted] = useState(false)

  const data = [
    {
      id: 0,
      image: NayImg,
      name: 'Nay',
      description: 'Colocar a descricao aki',
      technologies: ['Adminstração', 'programacão', 'Direito'],
      linkDeploy: '#',
      linkRepository: '#',
    },
    {
      id: 0,
      image: NayImg,
      name: 'Nay',
      description: 'Colocar a descricao aki',
      technologies: ['Adminstração', 'programacão', 'Direito'],
      linkDeploy: '#',
      linkRepository: '#',
    },
    {
      id: 0,
      image: NayImg,
      name: 'Nay',
      description: 'Colocar a descricao aki',
      technologies: ['Adminstração', 'programacão', 'Direito'],
      linkDeploy: '#',
      linkRepository: '#',
    },
  ]

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 580) {
        setSlidePerview(1)
      } else {
        setSlidePerview(3)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <Transition onAnimationComplete={() => setTransitionCompleted(true)}>
      {transitionCompleted && (
        <section className={styles.portfolio}>
          <h2 className={styles.heading}>
            <span>//</span> Equipe <span>Level UP</span>
          </h2>

          <Swiper
            className="animation-cards"
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            slidesPerView={slidePerview}
            pagination={{ clickable: true }}
            navigation
            initialSlide={initialSlide}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="teste">
                <div className={styles.portfolio_container}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.item_slide}
                  />
                  <div className={styles.portfolio_content}>
                    <h2 className={styles.name}>{item.name}</h2>
                    <p className={styles.description}>{item.description}</p>

                    <div className={styles.technologies}>
                      <h3>Tecnologias Abilidades:</h3>
                      <ul>
                        {item.technologies &&
                          item.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                      </ul>
                    </div>

                    <div className={styles.links}>
                      <NavLink
                        to={item.linkDeploy || ''}
                        className={styles.link}
                      >
                        Deploy
                      </NavLink>

                      <NavLink
                        to={item.linkRepository || ''}
                        className={styles.link}
                      >
                        Saiba Mais
                      </NavLink>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </Transition>
  )
}

export default Equipe
