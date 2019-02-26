import React from 'react';
import style from './style.css';
import Error from '../error/index.jsx';
import Container from '../container/index.jsx';

function ErrorPage (props){
  return (
    <Container>
      <div className={style.content}>
        {props.title && (
          <div className={style.title}>{props.title}</div>
        )}
        <Error />
      </div>
    </Container>
  )
}

export default ErrorPage;
