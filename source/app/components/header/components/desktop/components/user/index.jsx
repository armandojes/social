import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './style.css';
import Responsive from '../../../../../responsive/index.jsx';
import Menu from '../menu/index.jsx';
import Notific from '../notific/index.jsx';

function User (props){
  let { logged, name } = props.user;
  name = name.split(' ')[0];
  if (logged === true){
    return (
      <div className={style.content}>
        <div className={style.sections}>
          <div className={style.icon}>
            <img src="public/img/icons/user_test.png" />
          </div>
          <div className={style.text}>{name}</div>
        </div>
        <div className={style.sections}>
          <Notific className={style.icon} />
        </div>
        <div className={style.sections}>
          <Menu className={style.icon} />
        </div>

      </div>
    )
  }

  if (logged === false){
    return (
      <div className={style.content}>
        <Link to="/registro" className={style.buttons}>
          Registrate
        </Link>
        <Link to="/entrar" className={style.buttons}>
          <Responsive rule="min-width:601px">
            Inicia session
          </Responsive>
          <Responsive rule="max-width:600px">
            Entrar
          </Responsive>
        </Link>
      </div>
    )
  }

  return null;
}

function mapStateToProps (state){
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(User);
