import React from 'react';
import style from './style.css';
import Coment from '../coment/index.jsx';
import LoadingComent from '../loading_coment/index.jsx';

function View (props){
  return (
    <div className={style.content}>
      {props.coments.length == 0 && !props.loading_coments && (
        <div className={style.empty_coments}>
          No hay comentarios!
        </div>
      )}
      {props.coments.length > 0 && (
        props.coments.map((coment, index) => <Coment key={coment.id || index} {...coment}/>)
      )}
      {props.loading_coments && (<LoadingComent />)}
    </div>
  )
}
 export default View;
