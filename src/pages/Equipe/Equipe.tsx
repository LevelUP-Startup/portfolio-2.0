// CSS
import './Portfolio.css'
import styles from './Portfolio.module.css'
// HOOKS
import { useState, useEffect } from 'react'
// COMPONENT
import Transition from '../../components/Transition'
// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
// IMGAGENS
import NayImg from '../../../public/imgs/nay.png'
import LordImg from '../../../public/imgs/lord.png'
import NandraImg from '../../../public/imgs/nandra.png'
import AndreImg from '../../../public/imgs/andre.png'
import MatheusImg from '../../../public/imgs/matheus.png'
import LucasImg from '../../../public/imgs/lucas.png'

const Equipe = () => {
  const [slidePerview, setSlidePerview] = useState<number>(3)
  const [initialSlide] = useState<number>(1)
  const [transitionCompleted, setTransitionCompleted] = useState(false)

  const data = [
    {
      id: 0,
      image: NayImg,
      name: 'Nayara Candançan Leite',
      description: '202108380792@alunos.estacio.br',
      technologies: [
        'Gestão de empreendedorismo',
        'inovação ',
        'Garantia de qualidade de software',
        'Neurociência',
        'Programação neurolinguística',
      ],
      linkDeploy: '#',
      linkRepository: '#',
    },
    {
      id: 1,
      image: LordImg,
      name: 'Rodrigo de Godoy Domingues',
      description: '202306270756@alunos.estacio.br',
      technologies: [
        'Design',
        'Desenvolvimento de Jogos',
        'Jornalismo',
        'Engenheiro de Sistemas',
        'Engenheiro de Software',
      ],
      linkDeploy: '#',
      linkRepository: '#',
    },
    {
      id: 2,
      image: NandraImg,
      name: 'Nandra Silveira da Silva',
      description: '202404000818@alunos.estacio.br',
      technologies: [
        'Administração e marketing',
        'Inteligência artificial ',
        'Programação',
      ],
      linkDeploy: '#',
      linkRepository: '#',
    },
    {
      id: 3,
      image: AndreImg,
      name: 'André Luiz Ferreira de Souza',
      description: '202208604943@alunos.estacio.br',
      technologies: [
        'Desenvolvedor FullStack',
        'Software Developer',
        'Empreendedor',
        'Developer mobile',
        'Técnico Especializado em Veículos',
      ],
      linkDeploy: '#',
      linkRepository: '#',
    },
    {
      id: 4,
      image: MatheusImg,
      name: 'Matheus André Palmieri',
      description: '202305179771@alunos.estacio.br',
      technologies: ['Full Stack', 'Tech Lead', 'Engenheiro de Software'],
      linkDeploy: '#',
      linkRepository: '#',
    },
    {
      id: 5,
      image: LucasImg,
      name: 'Lucas Santos da Anunciação',
      description: '202401689882@alunos.estacio.br',
      technologies: [
        'Programação',
        'Desenvolvimento de Games',
        'Cybersegurança',
      ],
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
            <span>{`//`}</span> Equipe <span>Level UP</span>
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
                      <h3>Tecnologias Habilidades:</h3>
                      <ul>
                        {item.technologies &&
                          item.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                      </ul>
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
