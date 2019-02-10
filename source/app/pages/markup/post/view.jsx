import React from 'react';
import Post from './components/post/index.jsx';
import NewComent from './components/new_coment/index.jsx';
import ListComents from './components/list_coments/index.jsx';
import Actions from './components/actions/index.jsx';

function View (props){

  return (
    <div>
      <Post url={props.url} />
      <Actions />
      <NewComent />
      <ListComents />
    </div>
  )
}

export default View;
