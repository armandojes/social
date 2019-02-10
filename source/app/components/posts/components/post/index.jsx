import React from 'react';
import style from './style.css';
import Responsive from '../../../../components/responsive/index.jsx';
import { Link } from 'react-router-dom';

function Post(props){
  return (
    <Link className={style.content} to={`post/${props.url}`}>
      <div className={style.picture}>
        <img className={style.img} src={props.picture} />
      </div>
      <div className={style.data}>
        <h2 className={style.title}>{props.title}</h2>
        <Responsive rule="min-width:501px">
          <div className={style.meta_content}>
            <div className={style.meta}>
              <img className={style.meta_icons} src="public/img/icons/user.png" />armando
            </div>
            <div className={style.meta}>
              <img className={style.meta_icons} src="public/img/icons/clock.png" /> hace 5 minutos
            </div>
            <div className={style.meta}>
              <img className={style.meta_icons} src="public/img/icons/category.png" /> hazlo tu mismo
            </div>
            <div className={style.meta}>
              <img className={style.meta_icons} src="public/img/icons/coments.png" /> 51 comentarios
            </div>
          </div>
        </Responsive>
      </div>
    </Link>
  )
}

export default Post;
