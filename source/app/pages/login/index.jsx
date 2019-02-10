import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { set_mail, set_password, login, set_initialState } from './flux.js';
import style from './style.css';

//components
import Container from '../../components/container/index.jsx';
import Preloader from '../../components/preloader/index.jsx';
import Form from './components/form/index.jsx';

class Login extends Component {

  componentDidMount(){
    if (this.props.logged === true){
      this.redirect();
    }
  }

  componentDidUpdate(){
    if (this.props.logged === true){
      this.redirect();
    }
  }

  componentWillUnmount(){
    this.props.set_initialState();
  }

  redirect(){
    this.props.history.replace('/');
  }

  render(){
    return (
      <div role="login" className={style.fullpage}>
        <Container>
          <div className={style.login}>
            <div className={style.box}>
              {this.props.view === 'form' && this.props.logged === false && (
                <Form {...this.props}/>
              )}
              {this.props.view === 'loading' && (
                <Preloader />
              )}
              {this.props.logged === 'loading' && (
                <Preloader />
              )}
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    logged: state.user.logged,
    view: state.pages.login.view,
    mail: state.pages.login.mail,
    password: state.pages.login.password,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    set_mail,
    set_password,
    login,
    set_initialState,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
