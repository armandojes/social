import React from 'react';
import style from './style.css';

function Verify (props){
  return (
    <div className={style.content}>
      {props.state  && (
        <div className={style.circleGreen}></div>
      )}
      {!props.state  && (
        <div className={style.circleRed}></div>
      )}
      {props.text}
    </div>
  )
}

export default Verify;
