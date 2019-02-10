import React from 'react';
import style from './style.css';

function Loading (){
  return (
    <div className={style.loading}>
      <div className={style.metaloading}></div>
      <div className={style.text_loading}></div>
      <div className={style.text_loading}></div>
    </div>
  )
}

export default Loading;
