import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view.jsx';
import { set_initialState } from './flux.js';


class Post extends Component {

  componentWillUnmount(){
    this.props.dispatch(set_initialState());
  }

  

  render(){
    return (
      <View
        url={this.props.match.params.url}
      />
    )
  }
}

export default connect(null)(Post);
