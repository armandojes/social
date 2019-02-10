import React, { Fragment } from 'react';
import PostView from '../../../components/posts/view.jsx';
import Header from '../../../components/user_header/index.jsx';


function View (props) {
  return (
    <Fragment>
      <Header
        text="Mis posts"
        image="public/img/icons/post.png"
      />
      <PostView {...props} />
    </Fragment>
  )
}

export default View;
