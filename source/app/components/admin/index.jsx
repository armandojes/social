import React from 'react';
import { connect } from 'react-redux';
import style from './style.css';

function Admin ( WrappedComponent ) {
  function newComponent (props){
    if(props.logged === false){
      props.history.replace('/entrar');
    }

    if (props.logged === true ) {return (
      <WrappedComponent {...props}/>
    )}

    return (
      <div className={style.loading_content}>
        cargando...
      </div>
    )
  }

  const mapStateToProps = (state) => ({
    logged: state.user.logged,
  })

  return connect (mapStateToProps, null)(newComponent);
}

export default Admin;
