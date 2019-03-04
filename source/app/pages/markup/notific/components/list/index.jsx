import React, { Fragment } from 'react';
import Notific from '../notific/index.jsx';
import Loading from '../../../../../components/posts/components/loading/index.jsx';

function List (props){
  return (
    <div name="list">
      {props.items.map((item) => <Notific {...item} key={item.id} />)}
      {props.loading && (<Loading />)}
    </div>
  )
}

export default List;
