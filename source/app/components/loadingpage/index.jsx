import React from 'react';
import style from './style.css';
import Preloader from '../preloader/index.jsx';

function Loading (props){
  return (
    <div className={style.content}>
      {props.title && (
        <div className={style.title}>{props.title}</div>
      )}
      <Preloader />
    </div>    
  )
}

export default Loading;
