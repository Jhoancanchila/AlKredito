import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Burger } from '../../components/Burger/index'
import { Menu } from '../../components/Menu/index'
import { ContainerNav, SectionMailScreen, UlMailScreen } from './styles'

export const MenuUserLoged = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <SectionMailScreen>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
      <ContainerNav>
        <UlMailScreen>
          <li><Link to="/resumen"><span>Resumen</span></Link></li>
          <li><Link to="/facturas"><span>pagar facturas</span></Link></li>
          <li><Link to="/historial"><span>Historial de pagos</span></Link></li>
          <li><Link to="/puntos"><span>puntos de ventas</span></Link></li>
          <li><Link to="/documentos"><span>Documentos</span></Link></li>
          <li><Link to="/perfil"><span>Perfil</span></Link></li>
        </UlMailScreen>
      </ContainerNav>
      {children}
    </SectionMailScreen>
  )
}

