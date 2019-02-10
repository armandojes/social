import React from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';

function Group (props){
  return (
    <div className={style.group_container}>
      <div className={style.title_group}>
        {props.data.title}
      </div>
      <div className={style.list}>
        {props.data.options.map(
          (option ,index) =>
          <Link
            key={option.link}
            className={style.option}
            to={option.link}><img
            src={option.icon}
            className={style.icon} />
            {option.option}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Group;
