import React, { Component } from 'react';
import style from './style.css';
import { connect } from 'react-redux';

class Search extends Component {
  constructor (props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    alert('submit...')
  }

  render(){
    return (
      <form className={style.search_content} onSubmit={this.handleSubmit}>
        <input type="text" className={style.input}/>
        <button type="submit" className={style.submit}>
          <img className={style.icon} src="public/img/icons/search_white.png" />
        </button>
      </form>
    )
  }

}

export default Search;
