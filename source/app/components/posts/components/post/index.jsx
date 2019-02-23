import React, { Component } from 'react';
import style from './style.css';
import Responsive from '../../../../components/responsive/index.jsx';
import { Link } from 'react-router-dom';

class Post extends Component{
  constructor(props){
    super(props);

    this.state = {
      active: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({active: !this.state.active})
  }

  render(){
    return (
      <div className={style.content}>
        <div className={style.picture}>
          <img className={style.img} src={this.props.picture} />
        </div>
        <div className={style.data}>
          <Link to={`post/${this.props.url}`} className={style.title}>{this.props.title}</Link>
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
        {this.props.options && (
          <div className={style.options_content} onClick={this.handleClick}>
            <img src="public/img/icons/options.png" className={style.options}/>
            {this.state.active && (
              <div className={style.float}>
                {this.props.options.map((option) => {
                  return option.action
                  ? (<div key={option.text} className={style.option_item} onClick={() => {option.action(this.props.id)}}>{option.text}</div>)
                  : (<Link key={option.text} className={style.option_item} to={`${option.link}/${this.props.url}`}>{option.text}</Link>);
                })}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Post;
