import React from 'react';
import Logo from "../images/logo.png"
import CSS from "./Style.css"

const Header = () =>{
    return (
        <>
         <nav className="navbar navbar-expand-lg bg-white">
  <div className="container">
    <img src={Logo} className="img-fluid" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active me-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-5" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li> 
       
      </ul>
      <div className="d-flex">
        <button className="btn" type="submit">Login</button>
        <button className="rounded-pill border-0 px-3 fw-medium text-white bgOrange" type="submit">Book Scooter</button>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Header