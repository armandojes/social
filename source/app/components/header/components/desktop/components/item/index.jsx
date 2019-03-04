import React from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';

function Item (props){
  return (
    <Link className={style.content} to={props.link}>
      <div className={style.message} dangerouslySetInnerHTML={{__html: props.message}}></div>
      <div className={style.time}>
        <img src="public/img/icons/clock.png"/>
        {props.date}
      </div>
    </Link>
  )
}

export default Item;
