import React from 'react';
import style from './style.css'
import { Link } from 'react-router-dom';

function Notific (props) {
  return (
    <Link className={style.content} to={props.link} >
      <div className={style.message} dangerouslySetInnerHTML={{__html: props.message}} >
      </div>
      <div className={style.footer}>
        {props.date}
      </div>
    </Link>
  )
}

export default Notific;
