import React from 'react';
import style from './style.css';
import Posts from '../../../components/posts/index.jsx';
import { Helmet } from 'react-helmet';


function Home (props){
  return (
    <div className={style.content}>
      <Helmet>
        <title>Inicio</title>
        <meta name="description" content="inicio" />
        <meta name="robots" content="index" />
      </Helmet>
      <Posts />
    </div>
  )
}

export default Home;
