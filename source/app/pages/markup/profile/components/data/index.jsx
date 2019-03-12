import React from 'react';
import style from './style.css';

function Data (props) {
  if (props.loading === false) return (
    <div className={style.content}>
      <div className={style.header}>
        <div className={style.container_picrure}>
          <img className={style.picture} src="public/img/icons/no_user.png"/>
        </div>
        <div className={style.username}>
          @{props.username}
        </div>
      </div>
      <div className={style.data}>
        <div className={style.rows}>
          <div className={style.desc}>
            Nombre:
          </div>
          <div className={style.value}>
            {props.name}
          </div>
        </div>
        <div className={style.rows}>
          <div className={style.desc}>
            Username:
          </div>
          <div className={style.value}>
            @{props.username}
          </div>
        </div>
        <div className={style.rows}>
          <div className={style.desc}>
            Correo:
          </div>
          <div className={style.value}>
            {props.mail}
          </div>
        </div>
        <div className={style.rows}>
          <div className={style.desc}>
            Genero
          </div>
          <div className={style.value}>
            {props.genero}
          </div>
        </div>
        <div className={style.rows}>
          <div className={style.desc}>
            Post publicados:
          </div>
          <div className={style.value}>
            {props.num_posts || 0 }
          </div>
        </div>
        <div className={style.rows}>
          <div className={style.desc}>
            Comentarios hechos:
          </div>
          <div className={style.value}>
            {props.num_coments || 0 }
          </div>
        </div>
      </div>
    </div>
  )

  if (props.loading === true) return (
    <div className={style.content}>
      <div className={style.header}>
        <div className={style.container_picrure}>
          <img className={style.picture} src="public/img/icons/no_user.png"/>
        </div>
        <div className={style.username_loading}>
        </div>
      </div>
      <div className={style.data}>
        <div className={style.rows_loding}></div>
        <div className={style.rows_loding}></div>
        <div className={style.rows_loding}></div>
        <div className={style.rows_loding}></div>
        <div className={style.rows_loding}></div>
        <div className={style.rows_loding}></div>
      </div>
    </div>
  )

  return null;
}

export default Data;
