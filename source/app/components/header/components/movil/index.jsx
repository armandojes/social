import React from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';

function Movil (){
  return (
    <div className={style.content}>
      <Link to="/" className={style.icons}>
        <img src="public/img/icons/logo.png" />
      </Link>
      <Link to="/" className={style.icons}>
        <img src="public/img/icons/home-white.png" />
      </Link>
      <Link to="/" className={style.icons}>
        <img src="public/img/icons/search_white.png" />
      </Link>
      <Link to="/" className={style.icons}>
        <img src="public/img/icons/user_white.png" />
      </Link>
      <Link to="/" className={style.icons}>
        <img src="public/img/icons/notific_white.png" />
      </Link>
      <Link to="/menu" className={style.icons}>
        <img src="public/img/icons/menu_white.png" />
      </Link>
    </div>
  )
}

export default Movil;
