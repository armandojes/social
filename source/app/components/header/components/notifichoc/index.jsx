import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_pending, set_active } from '../../../../flux/notific.js';

function mapStateToProps(state){
  return {
    pending: state.notific.pending,
    active: state.notific.active,
    logged: state.user.logged,
  }
}

function Hoc (WrappedComponent){
  class newComponent extends Component {
    constructor(props){
      super(props);

      this.handleActive = this.handleActive.bind(this);
    }

    handleActive(){
      this.props.dispatch(set_active(!this.props.active));
    }

    initialFetch(){
      if (this.props.logged === true && this.props.pending === false){
        this.props.dispatch(load_pending());
      }
    }

    componentDidMount(){
      this.initialFetch();
    }

    componentDidUpdate(){
      this.initialFetch();
    }

    render(){
      return (<WrappedComponent
        {...this.props}
        handleActive={this.handleActive}
      />)
    }

  }

  return connect(mapStateToProps)(newComponent)
}

export default Hoc;
