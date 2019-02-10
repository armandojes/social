import React from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';

function Item (props){
  return (
    <div className={style.item_wrapped} >
      <Link to={`/${props.path}/${props.url || props.name}`} className={style.item} >
        {props.name}
      </Link>
    </div>
  )
}

export default Item;
