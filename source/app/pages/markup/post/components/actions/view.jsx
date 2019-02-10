import React, { memo } from 'react';
import style from './style.css';
import Responsive from '../../../../../components/responsive/index.jsx';

function View (props){

  const {id, saved, url, loading, savePost, messageLogin } = props;

  if(loading) return null;

  return (
    <div className={style.content}>
      {saved === true && (
        <div className={style.buttons}>
          <img  className={style.icon} src="public/img/icons/save.png" />
          Guardado <Responsive rule="min-width:800px">en favoritos </Responsive>
        </div>
      )}
      {saved === false  && (
        <div className={style.buttons} onClick={savePost}>
          <img  className={style.icon} src="public/img/icons/save.png" />
          Guardar <Responsive rule="min-width:800px">a favoritos </Responsive>
        </div>
      )}
      {saved === 'loading'  && (
        <div className={style.buttons} onClick={messageLogin}>
          <img  className={style.icon} src="public/img/icons/save.png" />
          Guardar <Responsive rule="min-width:800px">a favoritos </Responsive>
        </div>
      )}
      <div className={style.buttons}>
        <img  className={style.icon} src="public/img/icons/facebook.png" />
        Compartir
      </div>
      <div className={style.buttons}>
        <img  className={style.icon} src="public/img/icons/twitter.png" />
        Compartir
      </div>
    </div>
  )
}

export default memo(View);
