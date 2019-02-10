import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import {set_cookie } from '../../../../autologin.jsx';

class Form extends Component {
  constructor(props){
    super(props);

    this.handleClik = this.handleClik.bind(this);
  }

  async handleClik(){
    const status = await this.props.login();
    console.log(status);
    if (status){
      set_cookie('id', status.id);
      set_cookie('passlook', status.passlook);
      set_cookie('token', status.token);
      set_cookie('mail', status.mail);
    }

  }


  render(){
    return (
      <div role="form" className={style.form}>
        <h2 className={style.title}> Iniciar session </h2>
        <img className={style.picture} src="public/img/icons/logo.png" />
        <input value={this.props.mail} type="text" placeholder="Correo electronico" className={style.input} onChange={(e) => {this.props.set_mail(e.target.value)}}/>
        <input value={this.props.password} type="password" placeholder="contraseña" className={style.input} onChange={(e) => {this.props.set_password(e.target.value)}}/>
        <button  onClick={this.handleClik} className={style.button} >Iniciar session </button>
        <div className={style.message} >Aun no tienes una cuenta ?</div>
        <Link  to="/registro" className={style.button_register} > Registrate</Link>
      </div>
    )
  }
};

export default Form;
