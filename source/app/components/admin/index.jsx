import React from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import Loading from '../loadingpage/index.jsx';

function Admin ( WrappedComponent ) {
  function newComponent (props){
    if(props.logged === false){
      props.history.replace('/entrar');
    }

    if (props.logged === true ) {return (
      <WrappedComponent {...props}/>
    )}

    return (
      <Loading />
    )
  }

  const mapStateToProps = (state) => ({
    logged: state.user.logged,
  })

  return connect (mapStateToProps, null)(newComponent);
}

export default Admin;
