import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DivPerfil, DivWrapperForm, InputUpdateInfo, FormUpdateInfo } from './styles'
import { updateInfoUser } from '../../actions'

const PerfilItem = () => {

  const [dataUpdateInfo, setDataUpdateInfo] = useState({})

  const handleInput = (evt) => {
    setDataUpdateInfo({
      ...dataUpdateInfo,
      [evt.target.name]: evt.target.value
    })
    console.log(dataUpdateInfo)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateInfoUser(dataUpdateInfo);
  }
  return (
    <DivPerfil>
      <div>
        <article>
          <div className='container__article'>
            <div className='info__nombre'>
              <span>Nombre Completo</span>
              <p>JHOAN CARLOS CANCHILA LAZARO</p>
            </div>
            <div>
              <span>cédula</span>
              <p>1019012524</p>
            </div>
          </div>
        </article>
      </div>
      <div>
        <article className='art-update-info'>
          <div>
            <div>
              <span>Los Datos Marcados con (*) son obligatorios</span>
            </div>
            <div>
              <DivWrapperForm>
                <FormUpdateInfo onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="">(*)Email</label>
                    <InputUpdateInfo type="email" required="required" name='email' onChange={handleInput} />
                  </div>
                  <div>
                    <label htmlFor="">(*)Celular</label>
                    <InputUpdateInfo type="tel" required="required" name='celular' onChange={handleInput} />
                  </div>
                  <div>
                    <label htmlFor="">Teléfono</label>
                    <InputUpdateInfo type="tel" name='telefono' onChange={handleInput} />
                  </div>
                  <div>
                    <label htmlFor="">(*)Dirección</label>
                    <InputUpdateInfo type="text" required="required" name='direccion' onChange={handleInput} />
                  </div>
                  <div>
                    <button>Guardar Información</button>
                  </div>
                </FormUpdateInfo>
              </DivWrapperForm>
            </div>
          </div>
        </article>
      </div>
    </DivPerfil>
  )
}

const mapDispatchToProps = {
  updateInfoUser,
}

export default connect(null, mapDispatchToProps)(PerfilItem)
