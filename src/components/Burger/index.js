import React from 'react'
import { Header, AncleMenu } from './styles'
import { bool, func } from 'prop-types'

export const Burger = ({ open, setOpen }) => {

  const handleButtonMenuBurger = (e) => {
    e.preventDefault();
    setOpen(!open)
  }
  return (
    <Header>
      <AncleMenu open={open} onClick={handleButtonMenuBurger}>
        <span></span>
        <span></span>
        <span></span>
      </AncleMenu>
    </Header>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

