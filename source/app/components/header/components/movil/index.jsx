import React from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';
import Search from './components/search/index.jsx';
import notificHoc from '../notifichoc/index.jsx';


function Movil (props){
  return (
    <div className={style.content}>
      <Link to="/" className={style.icons}>
        <img src="public/img/icons/logo.png" />
      </Link>
      <Link to="/" className={style.icons}>
        <img src="public/img/icons/home_test.png" />
      </Link>
      <Search className={style.icons} />
      <Link to="/" className={style.icons}>
        <img src="public/img/icons/user_test.png" />
      </Link>
      <Link to="/notificaciones" className={`${style.icons} ${style.notific}`}>
        <img src="public/img/icons/notific_test.png" />
        {props.pending === true && (
          <div className={style.pending}>
          </div>
        )}
      </Link>
      <Link to="/menu" className={style.icons}>
        <img src="public/img/icons/menu_test.png" />
      </Link>
    </div>
  )
}

export default notificHoc(Movil);
