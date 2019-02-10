import React from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';

function Coment (props){
  return (
    <div className={style.coment}>
      <div className={style.header_coment}>
        <div className={style.items}>
          <Link className={style.user} to={`/usuario/jesusmaster`}>
            <img className={style.icons} src="public/img/icons/user.png" />
            {props.meta.username || 'anonimo'}
          </Link>
        </div>
        <div className={style.items}>
          <img className={style.icons} src="public/img/icons/clock.png" />
          {props.date}
        </div>
      </div>
      <div className={style.body}>
        {props.coment}
      </div>
    </div>
  )
}

export default Coment;
