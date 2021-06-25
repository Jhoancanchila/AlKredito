import React from 'react'
import { Link } from 'react-router-dom'
import { DivFooter, DivFooterElement } from './styles'

const Footer = () => {
  return (
    <DivFooter>
      <DivFooterElement>
        <p>Colombiana de Creditos S.A. NIT 111.111.111-1 SERVICIO AL CLIENTE: </p>
        <p><Link to="/">Preguntas frecuentes</Link></p>
        <p>Línea Bogotá: <Link to="/"></Link>(031) 666 6666</p>
        <p>Línea Gratuita Nacional: <Link to="/">015000 14 8000</Link></p>
        <p>Línea de WhatsApp: <Link to="/"> 3333333333</Link></p>
        <p>Email: <Link to="/">alkreditocartera.requerimientos@alkredito.com.co</Link></p>
      </DivFooterElement>
    </DivFooter>
  )
}

export default Footer
