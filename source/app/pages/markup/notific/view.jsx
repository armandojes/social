import React from 'react';
import style from './style.css';
import List from './components/list/index.jsx';
import LoadingPage from './components/loading/index.jsx';
import Empty from '../../../components/empty/index.jsx';

function View (props){

  if (props.items.length > 0) return (<List items={props.items} loading={props.loading} />);
  if (props.loading) return (<LoadingPage />)
  if (!props.loading && props.items.length == 0) return (<Empty message="No tienes notificaciones"/>)
  return 'error'
}

export default View;
