import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';


class Notific extends Component {


  render(){
    return (
      <div className={this.props.className}>
        <img src="public/img/icons/notific_white.png" />
      </div>
    )
  }
}

export default Notific;
