import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    {/* Funciona como el anchor tag de HTML <a href=""></a> per sin re-renderizar toda la pantalla */}
        {/* Lo utilizariamos para navegar a sitios externos principalmente */}
        {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link> */}


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">

            <Link className="navbar-brand" href="/">useContext</Link>
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink 
                    className={(arg) =>  `nav-link ${arg.isActive ? 'active' : ''}`}
                    to="/">
                    Home                    
                </NavLink>

                <NavLink 
                    className={(arg) =>  `nav-link ${arg.isActive ? 'active' : ''}`}
                    to="/about">
                    About                    
                </NavLink>

                <NavLink 
                    className={(arg) =>  `nav-link ${arg.isActive ? 'active' : ''}`}
                    to="/login">
                    Login
                </NavLink>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}
