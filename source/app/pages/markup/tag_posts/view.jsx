import React, { Fragment } from 'react';
import PostView from '../../../components/posts/view.jsx';
import Header from '../../../components/user_header/index.jsx';
import { Helmet } from 'react-helmet';

function View (props){

  return (
    <Fragment>
      <Helmet>
        <title>{`Etiquete: ${props.name}`}</title>
        <meta name="description" content="Lista de posts en con esta etiqueta" />
        <meta name="robots" content="index" />
      </Helmet>
      <Header
        text={props.name || 'Etiqueta'}
        image="public/img/icons/tag.png"
      />
      <PostView {...props} />
    </Fragment>
  )
}

export default View;
