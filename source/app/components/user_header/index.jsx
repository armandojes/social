import React from 'react';
import style from './style.css';

function UserHeader (props){
  const { text, image } = props;

  return (
    <div className={style.content}>
      <img className={style.icon} src={image} />
      <div className={style.text}>{text}</div>
    </div>
  )
}

export default UserHeader;
