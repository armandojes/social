import React from 'react';
import style from './style.css';

function Loading(){
  return (
    <div className={style.content}>
      <div className={style.picture}>
      </div>
      <div className={style.data}>
        <h2 className={style.title}></h2>
        <h2 className={style.title}></h2>
        <h2 className={style.title}></h2>

      </div>
    </div>
  )
}

export default Loading;
