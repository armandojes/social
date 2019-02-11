import React, { Component } from 'react';
import style from './style.css';
import Input from '../../../search/index.jsx';
import { connect } from 'react-redux';
import { set_active } from '../../../../../../flux/search.js';

class Search extends Component {
  constructor (props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.dispatch(set_active(!this.props.active))
  }

  render(){
    return (
      <div to="/" className={`${this.props.className} ${style.content}`}>
        <img src="public/img/icons/search_white.png" onClick={this.handleClick}/>
        {this.props.active && (
          <div className={style.search_container}>
            <Input />
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    active: state.search.active,
  }
}

export default connect(mapStateToProps)(Search);
