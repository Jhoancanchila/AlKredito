import React from 'react'
import { DivWrapperCards } from './styles'

export const WrapperCard = ({ children }) => {
  return (
    <DivWrapperCards>
      {children}
    </DivWrapperCards>
  )
}
