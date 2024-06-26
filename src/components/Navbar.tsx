// HOOKS
import { useState } from 'react'
import { useResponsiveNavbar } from '../hooks/useResponsiveNavbar'
// REACT ROUTER DOM
import { NavLink } from 'react-router-dom'
// CSS
import styles from './Navbar.module.css'

const Navbar = () => {
  const [soundClick] = useState<boolean>(false)

  const { handleClickButton, handleLinkClick, showMenu } = useResponsiveNavbar()

  const handleAudioDoubleClick = () => {
    const audio = new Audio('/sounds/double_click.mp3')

    if (soundClick) {
      audio.pause()
    } else {
      audio.play()
    }
  }

  return (
    <header className={styles.header}>
      <NavLink to={'/'} className={styles.logo}>
        <span className={styles.logo_span}>Level UP</span>
      </NavLink>

      <nav className={`${styles.links_nav}`}>
        <ul className={`${styles.links_list} ${showMenu ? styles.active : ''}`}>
          <li
            onClick={() => {
              handleLinkClick()
              handleAudioDoubleClick()
            }}
            className={`${styles.active_menu}
                                    ${showMenu ? styles.animation_menu : ''}`}
            style={{ ['--i' as string]: 0 }}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Home
            </NavLink>
          </li>

          <li
            onClick={() => {
              handleLinkClick()
              handleAudioDoubleClick()
            }}
            className={`${styles.active_menu}
                                    ${showMenu ? styles.animation_menu : ''}`}
            style={{ ['--i' as string]: 1 }}
          >
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Sobre
            </NavLink>
          </li>

          <li
            onClick={() => {
              handleLinkClick()
              handleAudioDoubleClick()
            }}
            className={`${styles.active_menu}
                                    ${showMenu ? styles.animation_menu : ''}`}
            style={{ ['--i' as string]: 1 }}
          >
            <NavLink
              to="/missao"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Propósito
            </NavLink>
          </li>

          <li
            onClick={() => {
              handleLinkClick()
              handleAudioDoubleClick()
            }}
            className={`${styles.active_menu}
                                    ${showMenu ? styles.animation_menu : ''}`}
            style={{ ['--i' as string]: 2 }}
          >
            <NavLink
              to="/equipe"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Equipe
            </NavLink>
          </li>

          <li
            onClick={() => {
              handleLinkClick()
              handleAudioDoubleClick()
            }}
            className={`${styles.active_menu}
                                    ${showMenu ? styles.animation_menu : ''}`}
            style={{ ['--i' as string]: 3 }}
          >
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.icons_container} id="container">
        {/* <label>
          <input
            type="checkbox"
            className={styles.input_darc_light_mode}
            onClick={() => {
              handleToggleLightMode()
              handleAudioButtonClick()
            }}
          />

          <FaMoon className={styles.moon_icon} />
          <FaSun className={styles.sun_icon} />
        </label>

        <label style={{ display: paletteInputInvisible ? 'none' : '' }}>
          <input
            type="checkbox"
            className={styles.input_palette_colors}
            onClick={() => {
              handlePaletteToggle()
              handleAudioButtonClick()
            }}
          />

          <FaPalette className={styles.palette} />

          <div
            className={`${styles.toggle_palette_theme}
                                     ${paletteOpen ? styles.palette_open : ''}`}
          >
            <button
              className={`${styles.ball} ${styles.ball_0}`}
              style={{ ['--p' as string]: 1 }}
              onClick={() => handleColorSelection('ball_0')}
            ></button>

            <button
              className={`${styles.ball} ${styles.ball_1}`}
              style={{ ['--p' as string]: 2 }}
              onClick={() => handleColorSelection('ball_1')}
            ></button>

            <button
              className={`${styles.ball} ${styles.ball_2}`}
              style={{ ['--p' as string]: 3 }}
              onClick={() => handleColorSelection('ball_2')}
            ></button>

            <button
              className={`${styles.ball} ${styles.ball_3}`}
              style={{ ['--p' as string]: 4 }}
              onClick={() => handleColorSelection('ball_3')}
            ></button>

            <button
              className={`${styles.ball} ${styles.ball_4}`}
              style={{ ['--p' as string]: 5 }}
              onClick={() => handleColorSelection('ball_4')}
            ></button>
          </div>
        </label> */}

        <button
          onClick={() => {
            handleClickButton()
            handleAudioDoubleClick()
          }}
          className={`${styles.btn_menu}
                ${showMenu ? styles.active : ''}`}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
