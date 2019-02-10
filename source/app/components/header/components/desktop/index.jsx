import React from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';
import Search from '../search/index.jsx';
import User from './components/user/index.jsx';

function Desktop (){
  return (
    <div className={style.content}>
      <div className={style.section}>
        <Link to="/" className={style.logo_content}>
          <img className={style.logo} src="public/img/icons/logo.png" />
        </Link>
        <div className={style.search_space}>
          <Search />
        </div>
      </div>
      <div className={style.user_space}>
        <User />
      </div>
    </div>
  )
}

export default Desktop;
