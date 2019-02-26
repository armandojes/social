import React from 'react';
import style from './style.css';
import Preloader from '../preloader/index.jsx';
import Container from '../container/index.jsx';

function Loading (props){
  return (
    <Container>
      <div className={style.content}>
        {props.title && (
          <div className={style.title}>{props.title}</div>
        )}
        <Preloader />
      </div>
    </Container>
  )
}

export default Loading;
