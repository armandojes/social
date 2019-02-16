import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view.jsx'
import { set_code, set_id_user, activate, set_initialState } from './flux.js';

class Activate extends Component {

  constructor(props){
    super(props);


  }

  componentWillMount(){
    this.props.dispatch(set_code(this.props.code));
    this.props.dispatch(set_id_user(parseInt(this.props.id_user)));
  }

  componentDidMount(){
    if (this.props.logged === false){
      this.props.dispatch(activate());
    }
  }

  componentDidUpdate(){

    if (this.props.logged === false && this.props.status === 'loading'){
      this.props.dispatch(activate());
    }
  }

  componentWillUnmount(){
    this.props.dispatch(set_initialState());
  }

  render (){

    return (
      <View
        {...this.props}
      />
    )
  }
}

function mapStateToProps (state, props){
  return {
    code: props.match.params.code,
    id_user: props.match.params.iduser,
    logged: state.user.logged,
    status: state.pages.activate.status,
  }
}


export default connect(mapStateToProps)(Activate);
