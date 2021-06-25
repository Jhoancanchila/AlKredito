import React, { useState } from 'react'
import { login } from '../../actions'
import { connect } from 'react-redux'
import { SectionLogin, SectionContainerLogin, DivTittleAlkredito, Link, DivContainerLogin, FormLoginContainer, InputLogin, ButtonForm } from './styles'
import { Link as LinkRegister } from 'react-router-dom'

const Login = (props) => {
  const [form, setForm] = useState({
    user: ''
  })

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log(form)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.login(form)
    props.history.push('/resumen');
  }

  return (
    <>
      <SectionLogin>
        <SectionContainerLogin>
          <DivTittleAlkredito>
            <Link to='/'>Alkredito</Link>
          </DivTittleAlkredito>
          <DivContainerLogin >
            <h2>Inicia sesión</h2>
            <FormLoginContainer onSubmit={handleSubmit}>
              <InputLogin
                type='text'
                placeholder='Número de cédula'
                name='cedula'
                onChange={handleInput}
              />
              <InputLogin
                type='password'
                placeholder='Contraseña'
                name='password'
                onChange={handleInput}
              />
              <ButtonForm>Iniciar sesión</ButtonForm>
            </FormLoginContainer>
            <div>
              <p><a href="/">¿Olvidaste tú contraseña?</a></p>
              <p><LinkRegister to="/registro">¿No tienes cuenta?, crea una aquí</LinkRegister></p>
            </div>
          </DivContainerLogin>
        </SectionContainerLogin>
      </SectionLogin>
    </>
  )
}
const mapDispachToProps = {
  login,
}
export default connect(null, mapDispachToProps)(Login)
