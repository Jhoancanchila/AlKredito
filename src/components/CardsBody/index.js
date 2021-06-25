import React from 'react'
import { DivCardsBody, DivContentCards, TittleCards, ParrafoCards, ButtonCardsBody } from './styles'

export const CardsBody = ({ tittle, parrafo, txtbutton }) => {
  return (
    <DivCardsBody>
      <DivContentCards>
        <TittleCards>{tittle}</TittleCards>
        <ParrafoCards>{parrafo}</ParrafoCards>
        <ButtonCardsBody>{txtbutton}</ButtonCardsBody>
      </DivContentCards>
    </DivCardsBody>
  )
}
