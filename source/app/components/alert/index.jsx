import React, { Component } from 'react';
import style from './style.css';
import { connect } from 'react-redux';
import { set_alert } from '../../flux/alert.js';
import { bindActionCreators } from 'redux';

class Alert extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.set_alert(null);
  }

  render(){
    return this.props.message ?
    (
      <section className={style.alert}>
        <div className={style.box} onClick={this.handleClick}>
          <div className={style.close}>X</div>
          {this.props.message}
        </div>
      </section>
    ):
    null
  }
}


function mapStateToProps(state){
  return {
    message: state.alert.message,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({set_alert}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Alert);
