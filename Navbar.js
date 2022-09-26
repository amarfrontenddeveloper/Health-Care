import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="logo"><a href="index.html"><img src="images/logo.png"/></a></div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
             <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" to="health">Health</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" to="medicine">Medicine</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" to="news">News</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" to="client">Client</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" to="contact">Contact Us</Link>
          </li>
          <li className="nav-item">
             <a className="nav-link" href="#"><img src="images/search-icon.png"/></a>
          </li>
       </ul>
    </div>
 </nav>)
}

export default Navbar