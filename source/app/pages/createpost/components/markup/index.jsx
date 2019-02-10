import React from 'react';
import style from './style.css';
import Verify from '../verify/index.jsx';

function Markup(props){
  return (
    <div className={style.markup}>
      <div className={style.header}>
        <Verify text={props.text} state={props.state} />
      </div>
      {props.message && (
        <div className={style.message}>
          {props.message}
        </div>
      )}
      {props.children}
    </div>
  )
}

export default Markup;
