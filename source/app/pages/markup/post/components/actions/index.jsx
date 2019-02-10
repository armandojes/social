import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view.jsx';
import { is_saved, save_post } from '../../flux.js';
import { set_alert } from '../../../../../flux/alert.js';

class Actions extends Component {
  constructor(props){
    super(props)
    this.savePost = this.savePost.bind(this);
    this.messageLogin = this.messageLogin.bind(this);
  }

  savePost () {
    this.props.dispatch(save_post());
  }
  messageLogin () {
    this.props.dispatch(set_alert('Inicia session o registrate para continuar!'));
  }

  shouldComponentUpdate(nextProps){
    if (this.props.user !== nextProps.user || this.props.saved !== nextProps.saved || this.props.loading !== nextProps.loading)
    return true;
    return false;
  }

  componentDidUpdate(){
    if (this.props.loading === false && this.props.user.logged === true && this.props.saved === 'loading'){
      this.props.dispatch(is_saved());
    }
  }

  render(){
    return (
      <View
        {...this.props}
        savePost= {this.savePost}
        messageLogin={this.messageLogin}
      />
    )
  }

}

const mapStateToprops = (state) => ({
  user: state.user,
  loading: state.pages.post.loading,
  url: state.pages.post.url,
  saved: state.pages.post.saved,
});

export default connect(mapStateToprops)(Actions)
