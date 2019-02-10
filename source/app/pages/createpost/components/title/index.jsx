import React, { Component } from 'react';
import style from './style.css';
import Verify from '../verify/index.jsx';


class Title extends Component {
  constructor(props){
    super(props)

    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle(e){
    if(e.target.value.length < 71){
      this.props.set_title(e.target.value);
    }
  }

  render(){
    return (
      <div className={style.content}>
        <div className={style.header}>
          <Verify text="Titulo" state={this.props.title.length > 30} />
          <div className={style.counter}>(restantes {70 - this.props.title.length })</div>
        </div>
        <input className={style.input} value={this.props.title} onChange={this.handleTitle}/>
      </div>
    )
  }
}

export default Title;
