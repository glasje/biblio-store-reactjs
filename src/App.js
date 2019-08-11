import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Suscriptores from './componentes/suscriptores/Suscriptores';
import EditarSuscriptor from './componentes/suscriptores/EditarSuscriptor';
import MostrarSuscriptor from './componentes/suscriptores/MostrarSuscriptor';
import NuevoSuscriptor from './componentes/suscriptores/NuevoSuscriptor';
import Navbar from './componentes/layout/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/suscriptores" component={Suscriptores} />
            <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptor} />
            <Route exact path="/suscriptores/editar/:id" component={EditarSuscriptor} />
            <Route exact path="/suscriptores/mostrar/:id" component={MostrarSuscriptor} />

          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
