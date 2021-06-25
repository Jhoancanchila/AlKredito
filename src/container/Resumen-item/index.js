import React from 'react'
import { useHistory } from 'react-router-dom'
import { DivResumen } from './styles'

export const ResumenItem = (props) => {
  const history = useHistory()
  const { titular, cupoAprobado, saldoTotalDeuda, cupoDisponible, facturas } = props;

  const handleUpdateInfo = (e) => {
    e.preventDefault()
    history.push('/perfil')
  }
  return (
    <DivResumen>
      <div>
        <article className='art-personal-info'>
          <div><p>PAGA AQUÍ LAS CUOTAS DE TU CRÉDITO</p>
            <button>Pagar</button>
          </div>
          <div className='borderDiv'>
            <p>{titular}</p>
            <button onClick={handleUpdateInfo}>Actualizar Datos</button></div>
        </article>
      </div>
      <div>
        <article>
          <p>RESUMEN</p>
          <div className="resumen__cuenta">
            <div className="resumen__cuenta-detail">
              <p>Cupo Aprobado</p>
              <span className='cupo__aprobado'>{cupoAprobado}</span>
            </div>
            <div className="resumen__cuenta-detail">
              <p>Saldo Total Deuda</p>
              <span className='saldo__deuda'>{saldoTotalDeuda}</span>
            </div>
            <div className="resumen__cuenta-detail">
              <p>Cupo DIsponible</p>
              <span className='cupo__disponible'>{cupoDisponible}</span>
            </div>
          </div>
        </article>
      </div>
      <div>
        <article>
          <p>FACTURAS</p>
          <div className="resumen__cuenta-factura">
            <p className="style__factura">FECHA</p>
            <p className="style__factura">FACTURA</p>
            <p className="style__factura">CUOTA</p>
          </div>
          <div className="detail__factura">
            <p>
              <span>{facturas[0].fecha}</span>
            </p>
            <p>
              <span>{facturas[0].facturaNro}</span>
            </p>
            <p>
              <span>{facturas[0].cuota}</span>
            </p>
          </div>
        </article>
      </div>
    </DivResumen>
  )
}
