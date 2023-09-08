import React from 'react'
import style from './navbar.module.css'


const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg fs-4 ">
  <div className="container">
    <a className="navbar-brand text-warning fs-1 fw-bold" href="#HOME">sHaaBan</a>
    <button className={`${style.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active ${style.NavLink}`} aria-current="page" href="#ABOUT">About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active ${style.NavLink}`} aria-current="page" href="#SKILLS">Skills</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active ${style.NavLink}`} aria-current="page" href="#PROJECTS">Projects</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active ${style.NavLink}`} aria-current="page" href="#CONTACTS">Contact</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar