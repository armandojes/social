import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { set_mail, set_password, set_repassword, set_name, set_username, set_sexo, create_user} from './flux.js';
import {set_alert} from '../../flux/alert.js';
import style from './style.css';
//components
import Container from '../../components/container/index.jsx';
import Preloader from '../../components/preloader/index.jsx';
import Form from './components/form/index.jsx';

class Register extends Component {

  componentWillMount(){
    if(this.props.logged === true){
      this.props.history.replace('/');
    }
  }
  componentDidUpdate(){
    if(this.props.logged === true){
      this.props.history.replace('/');
    }
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
              {this.props.view === 'success' && (
                <div> SUCCESS</div>
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
    mail: state.pages.register.mail,
    password: state.pages.register.password,
    re_password: state.pages.register.re_password,
    view: state.pages.register.view,
    name: state.pages.register.name,
    username: state.pages.register.username,
    sexo: state.pages.register.sexo,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    create_user,
    set_mail,
    set_password,
    set_repassword,
    set_name,
    set_username,
    set_sexo,
    set_alert,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
