import React, { Fragment } from 'react';
import PostView from '../../../components/posts/view.jsx';
import Header from '../../../components/user_header/index.jsx';


function View (props){

  return (
    <Fragment>
      <Header
        text={props.name || 'Categoria'}
        image="public/img/icons/category.png"
      />
      <PostView {...props} />
    </Fragment>
  )
}

export default View;
