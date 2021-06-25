import React from 'react'
import { bool } from 'prop-types';
import { Link } from 'react-router-dom'
import { NavMenu } from './styles'

export const Menu = ({ open }) => {
  return (
    <NavMenu open={open}>
      <ul>
        <li><Link to="/resumen">Resumen</Link></li>
        <li><Link to="/facturas">pagar facturas</Link></li>
        <li><Link to="/historial">Historial de pagos</Link></li>
        <li><Link to="/puntos">puntos de ventas</Link></li>
        <li><Link to="/documentos">Documentos</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
    </NavMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
};

