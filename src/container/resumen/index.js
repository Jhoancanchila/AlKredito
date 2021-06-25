import React from 'react'
import { Wrapper } from '../../components/wrapper'
import { ResumenItem } from '../Resumen-item'
import { MenuUserLoged } from '../MainScreen'
import { connect } from 'react-redux'

const Resumen = ({ credits }) => {
  return (
    <>
      <MenuUserLoged>
        <Wrapper>
          {
            credits.map(credit => <ResumenItem key={credit.id} {...credit} />)
          }
        </Wrapper>
      </MenuUserLoged>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    credits: state.credits,
  }
}

export default connect(mapStateToProps, null)(Resumen)