import React from 'react';
import Data from './components/data/index.jsx';
import Posts from './components/posts/index.jsx';
import Error from '../../../components/errorpage/index.jsx';
import { Helmet } from 'react-helmet';


function View (props){
  if (props.loading === 'error') return (<Error title="Error usuario no encontrado"/>)

  return (
    <div role="Profile">
      <Helmet>
        <title>{`Perfil: ${props.data.username}`}</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
      </Helmet>
      <Data {...props.data} loading={props.loading}/>
      <Posts posts={props.posts} loading={props.loading} />
    </div>
  )
}

export default View;
