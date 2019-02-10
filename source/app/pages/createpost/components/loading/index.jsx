import React from 'react';
import style from './style.css';
import Container from '../../../../components/container/index.jsx';
import Preloader from '../../../../components/preloader/index.jsx';
import Sucess from '../../../../components/success/index.jsx';
import { Link } from 'react-router-dom';


function Loading (props){
  const { view, url } = props;
  return (
    <Container>
      <div className={style.content}>
        {view === 'loading' && (
          <div className={style.box}>
            Publicando post...
            <Preloader />
          </div>
        )}

        {view === 'success' && (
          <div className={style.box_success}>
            Post publicado correctamente!
            <Sucess />
            <div className={style.buttton_container}>
              <Link to="/" className={style.button}>Inicio</Link>
              <Link to={`/post/${url}`} className={style.button}>Ver post</Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Loading;
