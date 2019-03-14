import React, { Fragment } from 'react';
import PostView from '../../../components/posts/view.jsx';
import Header from '../../../components/user_header/index.jsx';
import { Helmet } from 'react-helmet';

function View (props){

  return (
    <Fragment>
      <Helmet>
        <title>{props.name}</title>
        <meta name="description" content={`Lista de posts de la categoria: ${props.name}`} />
        <meta name="robots" content="index" />
      </Helmet>
      <Header
        text={props.name || 'Categoria'}
        image="public/img/icons/category.png"
      />
      <PostView {...props} />
    </Fragment>
  )
}

export default View;
