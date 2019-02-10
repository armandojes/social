import React from 'react';
import style from './style.css';

function View (props){
  return (
    <div className={style.input_comment_box}>
      <textarea onChange={props.handleChange} value={props.content_coment} className={style.textarea} />
      <button className={style.button} onClick={props.handleClick}>Comentar</button>
    </div>
  )
}

export default View;
