import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from '../createpost/view.jsx';
import { set_alert } from '../../flux/alert.js';
import {create, load_post, set_id, set_initial_state, upload_miniature, picture_upload, set_title, set_view, set_content, set_category, set_tagtext, insert_tag, set_delete, set_picture, set_images} from './flux.js';
import { bindActionCreators } from 'redux';
import Admin from '../../components/admin/index.jsx';


class Edit extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    const id = parseInt(this.props.url.split('-')[0]);
    this.props.set_id(id);
  }

  componentDidMount(){
    this.props.load_post();
  }

  componentWillUnmount(){
    this.props.set_initial_state();
  }

  render(){
    return (
      <View {...this.props} />
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    set_initial_state,
    upload_miniature,
    picture_upload,
    set_title,
    set_view,
    set_content,
    set_category,
    set_tagtext,
    insert_tag,
    set_delete,
    set_picture,
    set_images,
    set_id,
    load_post,
    create,
    set_alert,
  }, dispatch);
}

function mapStateToProps(state, props){
  return {
    url: props.match.params.url,
    view: state.pages.edit_post.view,
    title: state.pages.edit_post.title,
    category: state.pages.edit_post.category,
    content: state.pages.edit_post.content,
    images: state.pages.edit_post.images,
    tag_text: state.pages.edit_post.tag_text,
    tags: state.pages.edit_post.tags,
    picture: state.pages.edit_post.picture,
    username: state.user.username,
  }
}

export default Admin(connect(mapStateToProps, mapDispatchToProps)(Edit));
