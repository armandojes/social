import React from 'react';
import Data from './components/data/index.jsx';
import Posts from './components/posts/index.jsx';
import Error from '../../../components/errorpage/index.jsx';

function View (props){
  if (props.loading === 'error') return (<Error title="Error usuario no encontrado"/>)

  return (
    <div role="Profile">
      <Data {...props.data} loading={props.loading}/>
      <Posts posts={props.posts} loading={props.loading} />
    </div>
  )
}

export default View;
