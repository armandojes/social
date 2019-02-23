import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import Login from './pages/login/index.jsx';
import Activate from './pages/activate/index.jsx';
import Register from './pages/register/index.jsx';
import CreatePost from './pages/createpost/index.jsx';
import Markup from './pages/markup/index.jsx';

//components
import Header from './components/header/index.jsx';
import Alert from './components/alert/index.jsx';
import Confirm from './components/confirm/index.jsx'
import Autologin from './autologin.jsx';

//prueba error404 not found
function NotFount(){
  return (
    <div >
      <h2>Error 404 page not found</h2>
    </div>
  )
}


class App extends Component {

  render(){

    return (
      <div role="aplication">
        <Autologin />
        <Alert/>
        <Confirm />
        <Header />
        <div role="body" >
          <Switch>
            <Route path="/crearpost" component={CreatePost} />
            <Route exact path="/entrar" component={Login} />
            <Route exact path="/activate/:iduser/:code" component={Activate} />
            <Route exact path="/registro" component={Register} />
            <Route path="/" component={Markup} />
          </Switch>
        </div>
      </div>
    )
  }

}

export default App;
