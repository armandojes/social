import React from 'react';
import style from './style.css';

function Post (props){

  if (props.loading ) {return (
    <div className={style.content}>
      <div className={style.title_content}>
        <div className={style.bar_primary_title}></div>
        <div className={style.bar_secondary_title}></div>
      </div>
      <div className={style.contentPost}>
        <div className={style.body_preloader}>
        </div>
        <div className={style.bar_primary_title}></div>
        <div className={style.bar_primary_title}></div>
        <div className={style.bar_primary_title}></div>
        <div className={style.bar_secondary_title}></div>
        <div className={style.bar_secondary_title}></div>
      </div>
    </div>
  )}
  return (
    <div className={style.content}>
      <div className={style.title_content}>
        <h1 className={style.title}>{props.title}</h1>
      </div>
      <div className={style.contentPost} dangerouslySetInnerHTML={{__html: props.content}}>
      </div>
      <div className={style.rows}>

        <div className={style.sections}>
          <img className={style.icons} src="public/img/icons/user.png" />
          {props.meta.username || 'anonimo'}
        </div>

        <div className={`${style.sections} ${style.hiden_tablet}`}>
          <img className={style.icons} src="public/img/icons/category.png" />
          {props.category || 'preview'}
        </div>
        <div className={style.sections}>
          <img className={style.icons} src="public/img/icons/clock.png" />
          <div className={style.hiden_mobile}>hace</div> {props.date || '5'} minutos
        </div>
        <div className={style.sections}>
          <img className={style.icons} src="public/img/icons/coments.png" />
          {props.meta.coments || '5'} <div className={style.hiden_mobile}> comentarios</div>
        </div>
        <div className={style.sections}>
          <img className={style.icons} src="public/img/icons/views.png" />
          {props.meta.views || 0} <div className={style.hiden_mobile}> vistas</div>
        </div>
      </div>
    </div>
  )
}

export default Post;
