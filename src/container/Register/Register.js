import React, { useState } from 'react'
import { Link as BackHome } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../actions'
import { SectionRegister, SectionContainerRegister, DivTittleAlkredito, Link, DivContainerRegister, FormRegisterContainer, InputRegister, ButtonFormRegister } from './styles'

export const Register = props => {
  const [dataRegister, setDataRegister] = useState({
    cedula: '',
    email: '',
    password: ''
  });

  const handleInput = evt => {
    setDataRegister({
      ...dataRegister,
      [evt.target.name]: evt.target.value
    });
    console.log(dataRegister)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    register(dataRegister)
    props.history.push('/login');
  }
  return (
    <>
      <SectionRegister>
        <SectionContainerRegister>
          <DivTittleAlkredito>
            <Link to='/'>Alkredito</Link>
          </DivTittleAlkredito>
          <DivContainerRegister >
            <h2>Regístrate con nosotros</h2>
            <FormRegisterContainer onSubmit={handleSubmit}>
              <InputRegister
                type='text'
                placeholder='ingresa tú cédula'
                name='cedula'
                onChange={handleInput}
              />
              <InputRegister
                type='text'
                placeholder='correo electrónico'
                name='email'
                onChange={handleInput}
              />
              <InputRegister
                type='password'
                placeholder='contraseña'
                name='password'
                onChange={handleInput}
              />
              <InputRegister
                type='password'
                placeholder='confirma la contraseña'
                name='password'
                onChange={handleInput}
              />
              <ButtonFormRegister>Regístrate</ButtonFormRegister>
            </FormRegisterContainer>
            <span><BackHome to="/">Regresar al Inicio</BackHome></span>
          </DivContainerRegister>
        </SectionContainerRegister>
      </SectionRegister>
    </>
  )
}

const mapDispachToProps = {
  register,
}

export default connect(null, mapDispachToProps)
