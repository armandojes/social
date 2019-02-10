import React from 'react';
import style from './style.css';

function ItemLoading (){
  return (
    <div className={style.item_wrapped} >
      <div className={style.item} >
        <div className={style.shadow_prim}></div>
        <div className={style.shadow_sec}></div>
      </div>
    </div>
  )
}

export default ItemLoading;
