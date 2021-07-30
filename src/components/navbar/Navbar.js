import { useState } from "react"
import './styles.scss'

import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [hamburgerOn, setHamburgerOn] = useState(false)

  const logOut = async () => {
    localStorage.clear()
    props.setUser(false)
  }

  return (
    <nav>
      <ul className={`nav-links ${hamburgerOn ? 'nav-links-show' : ''}`}>
        {
          props.navList.map(page => (
            <li key={page.name}>
              <Link 
                className="link" 
                onClick={() => setHamburgerOn(false)} 
                to={page.path}> {page.name}
              </Link>
            </li>
          ))

        }
        <li onClick={logOut}><span className="link">LOG OUT</span></li>
      </ul>
      <div className="navbar">
        <div className="nav-rectangle">
          <div className="nav-circle">
            <Link onClick={() => setHamburgerOn(false)} to='/'>
              <img src="https://res.cloudinary.com/sazza/image/upload/v1627021393/color_small_logo_ck2kt5.svg" alt="lease connect logo and home button" />
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
