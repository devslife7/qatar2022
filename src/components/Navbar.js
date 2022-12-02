import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-scroll'
import qatarLogo from '../assets/img/qatarLogoNoBackground.png'

export default function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <div className={`nav ${scrollNav && 'nav--background'}`}>
        <div className='nav__content container'>
          <div className='nav__logo' onClick={toggleHome}>
            <img src={qatarLogo} alt='qatar2022 world cup logo' />
          </div>
          <ul className='nav__menu'>
            <li className='nav__item'>
              <Link
                className='nav__link'
                to='predictions'
                smooth='true'
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Predictions
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                className='nav__link'
                to='fixtures'
                smooth='true'
                duration={500}
                spy={true}
                exact='true'
                offset={-40}
              >
                Matches
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
