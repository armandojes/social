import React from 'react';
import style from './style.css';

function Loading (props){
  return (
    <div className={style.content}>
      <div className={style.message}>
        <div></div>
        <div></div>
      </div>
      <div className={style.time}>
        <div className={style.circle}></div>
        <div className={style.date}></div>
      </div>
    </div>
  )
}

export default Loading;
