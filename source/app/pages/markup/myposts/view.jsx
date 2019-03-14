import React, { Fragment } from 'react';
import PostView from '../../../components/posts/view.jsx';
import Header from '../../../components/user_header/index.jsx';
import { Helmet } from 'react-helmet';

function View (props) {
  return (
    <Fragment>
      <Helmet>
        <title>Mis posts</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header
        text="Mis posts"
        image="public/img/icons/post.png"
      />
      <PostView {...props}
      />
    </Fragment>
  )
}

export default View;
