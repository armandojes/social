import React, { Fragment} from 'react';
import style from './style.css';
import Item from './components/item/index.jsx';
import LoadingItem from './components/loading_item/index.jsx';

function Section (props){

  if (props.loading ===true && props.items.length === 0){
    return(
      <div className={style.content}>
        <LoadingItem /> <LoadingItem /> <LoadingItem />
        <LoadingItem /> <LoadingItem /> <LoadingItem />
        <LoadingItem /> <LoadingItem /> <LoadingItem />
        <LoadingItem /> <LoadingItem /> <LoadingItem />
        <LoadingItem /> <LoadingItem /> <LoadingItem />
      </div>
    )
  }

  if(props.items.length ){
    return (
      <div className={style.content}>
        {props.items.map( (item, index ) =>
          <Item
            {...item}
            key={item.id || index}
            path={props.path}
          />
        )}
        {props.loading === true && (
          <Fragment>
            <LoadingItem /> <LoadingItem />
            <LoadingItem /> <LoadingItem /> <LoadingItem />
          </Fragment>
        )}
      </div>
    );
  }

  return ('algo esta pasando...')
}

export default Section;
