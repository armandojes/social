import React, { Fragment } from 'react';
import style from './style.css'
import LoadingPost from '../../../../../components/posts/components/loading/index.jsx';
import Post from '../../../../../components/posts/components/post/index.jsx';

function Posts(props){
  return (
    <div>
      <div className={style.title}> Ultimos Posts </div>
      <div>
        {props.loading === true && (
          <Fragment>
            <LoadingPost />
            <LoadingPost />
            <LoadingPost />
          </Fragment>
        )}
        {props.loading === false && props.posts.length === 0 && (
          <div className={style.empty_posts_container}>
            Aun no hay posts publicados...
          </div>
        )}
        {props.loading === false && props.posts.length > 0 && (
          props.posts.map ((post) => <Post {...post} key={post.id} />)
        )}
      </div>
    </div>
  )
}

export default Posts;
