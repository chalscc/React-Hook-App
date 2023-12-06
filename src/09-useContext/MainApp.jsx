import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'

export const MainApp = () => {
  return (
    <>
      <h1> MainApp </h1>

        {/* Funciona como el anchor tag de HTML <a href=""></a> per sin re-renderizar toda la pantalla */}
        {/* Lo utilizariamos para navegar a sitios externos principalmente */}
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
      <hr/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* <Route path="/*" element={<h1>404 Not Found</h1>} /> */}
        {/* Si introduces una ruta no existente, te redirige a about */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  )
}
