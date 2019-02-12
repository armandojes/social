import React, { Component } from 'react';
import style from './style.css';

class Form extends Component {
  constructor(props){
    super(props);

    this.handleClik = this.handleClik.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
  }

  handleUserName(e){
    const char = e.target.value.slice(-1);
    if (char != ' ') this.props.set_username(e.target.value.toLowerCase())
  }

  handleClik(){
    if (this.props.username.length < 3){
      this.props.set_alert('Porfavor escribe un alias o apodo');
    } else if (this.props.name.length < 5){
      this.props.set_alert('Porfavor escriba su nombre completo');
    } else if (this.props.mail.length < 5){
      this.props.set_alert('El correo electronico es invalido');
    } else if (this.props.password.length < 6){
      this.props.set_alert('la contraseña deve tener como 6 caracteres como minimo');
    } else if (this.props.re_password != this.props.password){
      this.props.set_alert('Las contraseñas no coinciden');
    } else if (this.props.sexo === ''){
      this.props.set_alert('porfavor seleccione su genero!');
    } else {
      this.props.create_user();
    }
  }

  render(){
    return (
      <div role="form" className={style.form}>
        <h2 className={style.title}> Registrarse </h2>
        <img className={style.picture} src="public/img/icons/logo.png" />
        <input value={this.props.username} onChange={this.handleUserName}  type="text" placeholder="Alias" className={style.input} />
        <input value={this.props.name} onChange={(e) => {this.props.set_name(e.target.value)}}  type="text" placeholder="nombre completo" className={style.input} />
        <input value={this.props.mail} onChange={(e) => {this.props.set_mail(e.target.value)}}  type="text" placeholder="correo electronico" className={style.input} />
        <input value={this.props.password} onChange={(e) => {this.props.set_password(e.target.value)}}  type="text" placeholder="contraseña" className={style.input} />
        <input value={this.props.re_password} onChange={(e) => {this.props.set_repassword(e.target.value)}}  type="text" placeholder="repite la contraseña" className={style.input} />
        <select value={this.props.sexo} className={style.input} onChange={(e) => {this.props.set_sexo(e.target.value)}}>
          <option value="">seleccionar</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <button  onClick={this.handleClik} className={style.button} >Registrar</button>
        <div className={style.message} >Ya tiene una cuenta inicia session ?</div>
        <button  className={style.button_register} > Entrar </button>
      </div>
    )
  }
};

export default Form;
