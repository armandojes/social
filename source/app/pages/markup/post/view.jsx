import React, { Fragment } from 'react';
import Post from './components/post/index.jsx';
import NewComent from './components/new_coment/index.jsx';
import ListComents from './components/list_coments/index.jsx';
import Actions from './components/actions/index.jsx';
import Error from '../../../components/errorpage/index.jsx';

function View (props){

  if (props.error) return (<Error title="Error 404 Post no encontrado"/>)

  return (
    <Fragment>
      <Post url={props.url} />
      <Actions />
      <NewComent />
      <ListComents />
    </Fragment>
  )
}

export default View;
