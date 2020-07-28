import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import cadastroVideo from './pages/cadastro'
import pagina404 from './pages/404'

ReactDOM.render(
    <BrowserRouter>
      <Switch>

        <Route path="/"  component={Home} exact />
        <Route path="/cadastro/novovideo"  component={cadastroVideo} />
        <Route component={pagina404}/>

      </Switch>
    
    </BrowserRouter>,
    
  document.getElementById('root')
);

