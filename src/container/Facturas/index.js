import React from 'react'
import { DivFacturas } from './styles'
import { Wrapper } from '../../components/wrapper'
import { MenuUserLoged } from '../MainScreen'

export const Facturas = () => {
  return (
    <>
      <MenuUserLoged>
        <Wrapper>
          <DivFacturas>
            <div>
              <p>FACTURAS</p>
              <div className="content">
                <p>Puedes pagar varias facturas al mismo tiempo.</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit ut eos minus quidem at facilis consequuntur quibusdam, dignissimos voluptas fuga sequi repellat velit adipisci. Impedit dolor illo pariatur corrupti!</span>
              </div>
            </div>
          </DivFacturas>
        </Wrapper>
      </MenuUserLoged>
    </>

  )
}
