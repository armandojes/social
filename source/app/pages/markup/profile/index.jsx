import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set_username, load_data } from './flux.js';
import View from './view.jsx';

class Profile extends Component {
  constructor(props){
    super(props);

    console.log(props);
  }

  componentWillMount(){
    this.props.dispatch(set_username(this.props.username));
  }

  componentDidMount(){
    this.props.dispatch(load_data());
  }

  render(){
    return (
      <View {...this.props} />
    )
  }
}

function mapStateToProps(state, props){
  return {
    username: props.match.params.username,
    loading: state.pages.profile.loading,
    posts: state.pages.profile.posts,
    data: state.pages.profile.data,
  }
}

export default connect(mapStateToProps)(Profile);
