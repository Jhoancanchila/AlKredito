import React from 'react'
import { Wrapper } from '../../components/wrapper'
import PerfilItem from '../Perfil-item'
import { MenuUserLoged } from '../MainScreen'
import { connect } from 'react-redux'

const Perfil = ({ users }) => {
  return (
    <>
      <MenuUserLoged>
        <Wrapper>
          {/* {
            users.map(user => <PerfilItem key={user.id} {...user} />)
          } */}
          <PerfilItem />
        </Wrapper>
      </MenuUserLoged>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, null)(Perfil)