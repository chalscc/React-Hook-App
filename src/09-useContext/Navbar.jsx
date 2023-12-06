import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    {/* Funciona como el anchor tag de HTML <a href=""></a> per sin re-renderizar toda la pantalla */}
        {/* Lo utilizariamos para navegar a sitios externos principalmente */}
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
    </>
  )
}
