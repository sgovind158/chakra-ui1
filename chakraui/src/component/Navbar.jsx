import React, { useState } from 'react'

import style from "./style.module.css"

const Navbar = ({showNavbar}) => {
  return (
      <>
    <div>
        
     <nav className= {`navbar navbar-expand-lg navbar-light bg-light ${style.nav} `}  >  
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>Logo</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inspiration</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div>
            <li><a className="dropdown-item" href="#">Explore Design Work </a></li>
            <li><a className="dropdown-item" href="#">Trending Design to inspire you</a></li>
            </div>
            <div>
            <li><a className="dropdown-item" href="#">New & Noteworthy</a></li>
           <li><a className="dropdown-item" href="#">Up-and-coming Designers</a></li>
           </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Find Work</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div>
            <li><a className="dropdown-item" href="#">Job Board</a></li>
            <li><a className="dropdown-item" href="#">Find Your dream design job</a></li>
            </div>
            <div>
            <li><a className="dropdown-item" href="#">Freelance Projects</a></li>
           <li><a className="dropdown-item" href="#">An exclusive list for contract  work</a></li>
           </div>
          </ul>
        </li>
        <li className="nav-item ">
          <a className="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Learn Degian
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hire Designers</a>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className={`btn ${style.btn1}`} type="submit">SignIn</button>
        <button className={`btn ${style.btn2}`} type="submit">SignUp</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Navbar
