import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import { set_menu } from '../../../../../../flux/menu.js';
import { loggout } from '../../../../../../flux/user.js';



class Menu extends Component {
  constructor (props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleClick(){
    this.props.dispatch(set_menu(!this.props.active));
  }

  logout(){
    this.props.dispatch(loggout());
  }

  render(){
    return (
      <div className={`${this.props.className} ${style.content}`} onClick={this.handleClick}>
        <img src="public/img/icons/menu_white.png" />
        {this.props.active && (
          <div className={style.menu_float}>
            <div className={style.item}>
              inicio
            </div>
            <div className={style.item}>
              Mi perfil
            </div>
            <div className={style.item}>
              Configuracion
            </div>
            <div className={style.item} onClick={this.logout}>
              Cerrar session
            </div>
          </div>
        )}
      </div>
    )
  }
}

function mapStatetoProps (state){
  return {
    active: state.menu.active,
  }
}

export default connect(mapStatetoProps)(Menu);
