import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../assets/styleApp/GlobalStyles'
import Layout from '../components/Layout/Layout'
import Login from '../container/login/Login'
import { Register } from '../container/Register/Register'
import { Home } from '../container/Home/index.js'
import Resumen from '../container/resumen'
import { Facturas } from '../container/Facturas'
import { Historial } from '../container/Historial'
import { Puntos } from '../container/Puntos'
import { Documentos } from '../container/Documentos'
import Perfil from '../container/Perfil'
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/registro' component={Register} />
          <Route exact path='/resumen' component={Resumen} />
          <Route exact path='/facturas' component={Facturas} />
          <Route exact path='/historial' component={Historial} />
          <Route exact path='/puntos' component={Puntos} />
          <Route exact path='/documentos' component={Documentos} />
          <Route exact path='/perfil' component={Perfil} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
