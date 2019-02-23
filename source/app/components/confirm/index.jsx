import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import { set_state } from '../../flux/confirm.js';
import Preloader from '../preloader/index.jsx';


class Confirm extends Component {
  constructor(props){
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  handleClose(){
    this.props.dispatch(set_state(false));
  }

  async handleAction(){
    if (this.props.action){
    this.props.dispatch(set_state('loading'))
    const response = await this.props.dispatch(this.props.action);
    this.props.dispatch(set_state(false));

    } else {
      alert('action_vacio');
    }
  }

  render(){
    if (!this.props.state) return null;

    return (
      <div className={style.confirm}>
        <div className={style.box}>
          <div onClick={this.handleClose} className={style.close_button}>X</div>
          {this.props.state === true &&(
            <div className={style.viewport}>
              <div className={style.title}>{this.props.title}</div>
              <div className={style.message}>{this.props.message}</div>
              <div className={style.action} onClick={this.handleAction}>Confirmar</div>
            </div>
          )}

          {this.props.state === 'loading' && (
            <div className={style.viewport_preloader}>
              <Preloader />
            </div>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    state: state.confirm.state,
    message: state.confirm.message,
    title: state.confirm.title,
    action: state.confirm.action,
  }
}

export default connect(mapStateToProps)(Confirm);
