import React from 'react'
import { Carrousel } from '../../components/Carrousel'
import { CardsBody } from '../../components/CardsBody'
import { Header } from '../../components/Header'
import { WrapperCard } from '../../components/WrapperCard'

export const Home = () => {
      return (
            <>
                  <Header />
                  <Carrousel />
                  <WrapperCard>
                        <CardsBody tittle='Regístrate'
                              parrafo='Ingresa tus datos para activar tu pago Online'
                              txtbutton='Regístrate' />
                        <CardsBody tittle='Información'
                              parrafo='Consulta aquí temas de crédito de tu interés'
                              txtbutton='Información' />
                        <CardsBody tittle='Preguntas frecuentes'
                              parrafo='Aquí están las consultas más comunes de nuestros usuarios'
                              txtbutton='Preguntas frecuentes' />
                        <CardsBody tittle='Puntos de pago'
                              parrafo='En estos puntos puedes cancelar tus cuotas'
                              txtbutton='Puntos de pago' />
                  </WrapperCard>
            </>
      )
}
