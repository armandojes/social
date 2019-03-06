import React from 'react';
import style from './style.css';
import notifichoc from '../../../notifichoc/index.jsx';
import List from '../list/index.jsx';

function Notific (props){
  return (
    <div className={`${props.className} ${style.content}`} onClick={props.handleActive}>
      <img src="public/img/icons/notific_test.png" />
      {props.pending === true && (
        <div className={style.pending}>
        </div>
      )}
      {props.active === true &&(
        <List />
      )}
    </div>
  )
}

export default notifichoc(Notific);
