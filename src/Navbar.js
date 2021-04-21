import React, {useState, useRef, useEffect} from 'react'
import {FaBars, FaTwitter} from 'react-icons/fa'
import {links, social} from './data'

export default function Navbar() {
  const [showLink, setShowLink] = useState(false);
  const handleToggle = () => {
    setShowLink(!showLink);
    console.log(showLink)
  }

  return (
    <nav>
      <div className="nav-header">
        <h1>CSSLICK</h1>
        <button className="toggle" onClick={handleToggle}>
          <FaBars />
        </button>
      </div>
      <div className={`link-container ${showLink && 'show'}`}>
        <ul className="links">
          {
            links.map(link => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              )
            })
          }
        </ul>
        <ul className="sns">
          {
            social.map(s => {
              return (
                <li key={s.id}><a href={s.url}>{s.icon}</a></li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}
