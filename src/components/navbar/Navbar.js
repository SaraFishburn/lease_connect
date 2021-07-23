import { useState } from "react"
import './styles.scss'
import {
  Link
} from "react-router-dom";

const Navbar = () => {
  const [hamburgerOn, setHamburgerOn] = useState(false)
  const [navShow, setNavShow] = useState(false)

  return (
    <>
      <ul className={`nav-links ${hamburgerOn ? 'nav-links-show' : ''}`}>
        <li><Link onClick={() => setHamburgerOn(false)} to='/' >Home</Link></li>
        <li><Link onClick={() => setHamburgerOn(false)} to='/calendar' >Calendar</Link></li>
        <li><Link onClick={() => setHamburgerOn(false)} to='/' >My Account</Link></li>
      </ul>
      <div className="navbar">
        <div className="nav-rectangle">
          <div className="nav-circle"></div>
          <div className='hamburger' onClick={() => setHamburgerOn(val => !val)}>
            <div className={`ham-top ${hamburgerOn ? 'ham-top-transition' : ''}`} ></div>
            <div className={`ham-middle ${hamburgerOn ? 'ham-middle-transition' : ''}`} ></div>
            <div className={`ham-bottom ${hamburgerOn ? 'ham-bottom-transition' : ''}`} ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
