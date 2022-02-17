import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li className="nav-item active">
                <NavLink className="nav-link" to="/" exact>
                    <i className="fas fa-tachometer-alt">Home</i>
                </NavLink>
            </li>

            <li className="nav-item active">
                <NavLink className="nav-link" to="/Destinos" exact>
                    <i className="fas fa-tachometer-alt">Destinos</i>
                </NavLink>
            </li>

            <li className="nav-item active">
                <NavLink className="nav-link" to="/Promocoes" exact>
                    <i className="fas fa-tachometer-alt">Promoções</i>
                </NavLink>
            </li>

            <li className="nav-item active">
                <NavLink className="nav-link" to="/Contato" exact>
                    <i className="fas fa-tachometer-alt">Contato</i>
                </NavLink>
            </li>
      </ul>
    </div>
  </nav>
    
    
    
    
    
    
    
    
    )
}
export default Navbar;