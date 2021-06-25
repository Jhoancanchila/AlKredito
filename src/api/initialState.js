export const initialState = {
  'users': {},
  'credits': [
    {
      "id": 1,
      "titular": 'Jhoan Canchila',
      "identificacion": "1111111111",
      "cupoAprobado": "2,500.000",
      "saldoTotalDeuda": "1,500.000",
      "cupoDisponible": "1,200.000",
      "interesesPrestamo": "200,000",
      "numeroCuotas": 12,
      'facturas': [
        {
          "id": 1,
          "fecha": "2021-05-23",
          "facturaNro": "231222",
          "cuota": "120,000",
          "estado": "activa"
        }
      ]
    }
  ]
}
