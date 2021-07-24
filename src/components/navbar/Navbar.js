import { useState } from "react"
import './styles.scss'

import {
  Link
} from "react-router-dom";

const Navbar = () => {
  const [hamburgerOn, setHamburgerOn] = useState(false)

  return (
    <nav>
      <ul className={`nav-links ${hamburgerOn ? 'nav-links-show' : ''}`}>
        <li><Link className="link" onClick={() => setHamburgerOn(false)} to='/' >HOME</Link></li>
        <li><Link className="link" onClick={() => setHamburgerOn(false)} to='/calendar' >CALENDAR</Link></li>
        <li><Link className="link" onClick={() => setHamburgerOn(false)} to='/create_account' >CREATE ACCOUNT</Link></li>
      </ul>
      <div className="navbar">
        <div className="nav-rectangle">
          <div className="nav-circle">
            <Link onClick={() => setHamburgerOn(false)} to='/'>
              <img src="https://res.cloudinary.com/sazza/image/upload/v1627021393/color_small_logo_ck2kt5.svg" alt="" />
            </Link>
          </div>
          
            <div className='hamburger' onClick={() => setHamburgerOn(val => !val)}>
              <div className={`ham-top ${hamburgerOn ? 'ham-top-transition' : ''}`} ></div>
              <div className={`ham-middle ${hamburgerOn ? 'ham-middle-transition' : ''}`} ></div>
              <div className={`ham-bottom ${hamburgerOn ? 'ham-bottom-transition' : ''}`} ></div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
