import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import './Navbar.scss';
import Logo from './creekimagelogo.png';
import Header from './Header';

const Navbar = () => {
    return (
            <Header className="navbar navbar-expand-lg navbar-light menu fixed-top d-flex align-items-center">
  <div className="container d-flex align-items-center justify-content-between">
    <Link className="navbar-brand" to="/"><img src={Logo} alt="TechCreek Logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Updates</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Community
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/">Learn</Link></li>
            <li><Link className="dropdown-item" to="/">Create</Link></li>
            <li><Link className="dropdown-item" to="/">Connect</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ongoing Applications
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/">Codegaminators 9.0</Link></li>
            <li><Link className="dropdown-item" to="/">ICT Competency Verification</Link></li>
            <li><Link className="dropdown-item" to="/">ICT Competency Training</Link></li>
          </ul>
        </li>
      </ul>
      <Button />
    </div>
  </div>
</Header>
    )
};

export default Navbar;
