import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view.jsx';
import {LoadComentsForPost } from '../../flux.js';


class ListComents extends Component {
  constructor(props){
    super(props);

    this.loadComents = this.loadComents.bind(this);
  }

  componentDidMount(){
    this.loadComents();
  }

  loadComents(){
    this.props.dispatch(LoadComentsForPost());
  }

  render(){
    
    if (this.props.error) return null;

    return (
      <View
        {...this.props}
        loadComents={this.loadComents}
      />
    )
  }

}

function mapState(state){
  return {
    coments: state.pages.post.coments,
    error: state.pages.post.error,
    loading_coments: state.pages.post.loading_coments,
    pages_coments: state.pages.post.pages_coments,
  }
}

export default connect(mapState)(ListComents);
