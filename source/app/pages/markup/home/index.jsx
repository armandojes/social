import React from 'react';
import style from './style.css';
import Posts from '../../../components/posts/index.jsx';



function Home (props){
  return (
    <div className={style.content}>
      <Posts />
    </div>
  )
}

export default Home;
