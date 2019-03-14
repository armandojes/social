import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view.jsx';
import {set_initial_state, upload_miniature, picture_upload, create, set_title, set_view, set_content, set_category, set_tagtext, insert_tag, set_delete, set_picture, set_images} from './flux.js';
import { set_alert } from '../../flux/alert.js';
import Admin from '../../components/admin/index.jsx';
import { Helmet } from 'react-helmet';

class CreatePost extends Component {

  render(){
    return(
      <Fragment>
        <Helmet>
          <title>Crear post</title>
          <meta name="description" content="" />
          <meta name="robots" content="noindex" />
        </Helmet>
        <View
          {...this.props}
          message_loading="Publicando post..."
        />
      </Fragment>
    )
  }

  componentWillUnmount(){
    this.props.set_initial_state();
  }
}

const mapStateToProps = (state) => ({
  view: state.pages.create_post.view,
  title: state.pages.create_post.title,
  url: state.pages.create_post.url,
  category: state.pages.create_post.category,
  content: state.pages.create_post.content,
  images: state.pages.create_post.images,
  tag_text: state.pages.create_post.tag_text,
  tags: state.pages.create_post.tags,
  picture: state.pages.create_post.picture,
  username: state.user.username,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    set_title,
    set_view,
    set_content,
    set_category,
    set_tagtext,
    insert_tag,
    set_delete,
    set_picture,
    set_images,
    upload_miniature,
    picture_upload,
    create,
    set_alert,
    set_initial_state,
  }, dispatch)

export default Admin(connect(mapStateToProps, mapDispatchToProps)(CreatePost));
