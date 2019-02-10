import React from 'react';
import style from './style.css';

function Empty (props){
  const { title, message , image } = props;

  return (
    <div className={style.content}>
      <img src={image || 'public/img/icons/error404.png'} className={style.picture} />
      <div className={style.big_text}>
        {title || 'Opps!'}
      </div>
      <div className={style.message}>
        {message || 'No hay nada aqui!'}
      </div>
    </div>
  )
}

export default Empty;
