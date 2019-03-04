import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_items } from '../../../../../../flux/notific.js';
import Item from '../item/index.jsx';
import Loading from '../loading/index.jsx';
import style from './style.css';
import { Link } from 'react-router-dom';

class List extends Component {

  componentDidMount(){
    if (this.props.items.length == 0){
      this.props.dispatch(load_items());
    }
  }

  render(){
    return (
      <div className={style.float} name="List">
        {this.props.loading && this.props.items.length == 0 && (
          <div className={style.container}>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </div>
        )}
        {this.props.items.length > 0 && (
          <div className={style.container}>
            {this.props.items.map(
              (item) => <Item {...item} key={item.id}/>
            )}
          </div>
        )}
        {this.props.loading == false && this.props.items.length == 0 && (
          <div className={`${style.container} ${style.center}`}>
            no hay notiticaciones...
          </div>
        )}
        {this.props.items.length > 4 && (
          <Link to="/notificaciones" className={style.more}>
            Ver todos...
          </Link>
        )}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    items: state.notific.items,
    loading: state.notific.loading,
  }
}

export default connect(mapStateToProps)(List);
