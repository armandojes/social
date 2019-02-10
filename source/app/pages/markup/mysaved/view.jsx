import React, { Fragment } from 'react';
import PostView from '../../../components/posts/view.jsx';
import Header from '../../../components/user_header/index.jsx';


function View (props) {
  return (
    <Fragment>
      <Header
        text="Mis posts favoritos"
        image="public/img/icons/save.png"
      />
      <PostView {...props} />
    </Fragment>
  )
}

export default View;
