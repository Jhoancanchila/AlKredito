import React from 'react'
import { DivContainer, HeaderContainer, DivIniciarSesion, Link } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <DivIniciarSesion>
        <Link to='/login'>INGRESO CUENTA</Link>
      </DivIniciarSesion>
      <DivContainer>
        <h1>Alkredito</h1>
      </DivContainer>
    </HeaderContainer>
  )
}
