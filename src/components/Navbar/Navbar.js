import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-scroll'

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
            Portfo<span className='theme__span'>lio</span>
          </div>
          <ul className='nav__menu'>
            <li className='nav__item'>
              <Link
                className='nav__link'
                to='home'
                smooth='true'
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                className='nav__link'
                to='projects'
                smooth='true'
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
