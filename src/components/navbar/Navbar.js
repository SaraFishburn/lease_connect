import { useState } from "react"
import './styles.scss'

const Navbar = () => {
  const [hamburgerOn, setHamburgerOn] = useState(false)
  const [navShow, setNavShow] = useState(false)

  return (
    <>
      <ul className={`nav-links ${hamburgerOn ? 'nav-links-show' : ''}`}>
        <li>My Account</li>
        <li>My Account</li>
        <li>My Account</li>
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
