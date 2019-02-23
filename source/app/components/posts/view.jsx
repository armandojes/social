import React from 'react';
import style from './style.css';
import Loading from './components/loading/index.jsx';
import Post from './components/post/index.jsx';
import Empty from '../empty/index.jsx';

function View (props){

  if (!props.loading && !props.items.length ){
    return (
      <Empty />
    )
  }

  if (props.items.length){
    return (
      <div className={style.post_container}>
        {
          props.items.map( item => <Post key={item.id} {...item} options={props.options}/>)
        }
        {props.loading && (
          <Loading />
        )}
      </div>
    )
  }

  return (
    <div className={style.post_container}>
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </div>
  )

}

export default View;
