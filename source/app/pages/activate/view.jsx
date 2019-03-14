import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import Container from '../../components/container/index.jsx';
import Preloader from '../../components/preloader/index.jsx';
import Success from '../../components/success/index.jsx';
import Error from '../../components/error/index.jsx';
import { Helmet } from 'react-helmet';

function View (props){

  if (props.logged === true ) return null;

  return (
    <div className={style.fullpage}>
      <Helmet>
        <title>Activar cuenta</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Container>
        <div className={style.page}>
          {(props.logged === 'loading' || props.status === 'loading') && (
            <div className={style.box}>
              <Preloader />
            </div>
          )}
          {props.logged === false && props.status === 'success' && (
            <div className={style.box}>
              <Success />
              <h2 className={style.message}>Cuenta activado correctamente!</h2>
              <Link className={style.button}to="/entrar">Iniciar session</Link>
            </div>
          )}
          {props.logged === false && props.status === 'activated' && (
            <div className={style.box}>
              <Success />
              <h2 className={style.message}>Cuenta activado correctamente!</h2>
              <Link className={style.button}to="/entrar">Iniciar session</Link>
            </div>
          )}
          {props.logged === false && props.status === 'error' && (
            <div className={style.box}>
              <Error />
              <h2 className={style.message}>Error de activacion!</h2>
              <p>Hubo un error al activar tu cuenta! por favor intente otra vez</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default View;
