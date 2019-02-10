import React, { Component } from 'react';
import style from './style.css';
import Markup from '../markup/index.jsx';
import HOC from './HOC.jsx';


class Tags extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  deleteTag(tagName){
    this.props.set_delete(tagName);
  }

  handleClick(e){
    document.getElementById('input').focus();
  }

  handleChange(e){
    const inputvalue = e.target.value.trim().toLowerCase();
    const lastChar = inputvalue.slice(-1);
    lastChar === ','
    ? this.insertTag()
    : this.updateTagtext(inputvalue);
  }

  updateTagtext(inputvalue){
    if(inputvalue.length < 16){
      this.props.set_tagtext(inputvalue);
    }
  }

  insertTag(){
    if(this.props.tag_text.length > 3){
      if(this.props.tags.length < 5 )this.props.insert_tag(this.props.tag_text);
      this.props.set_tagtext('');
    }
  }

  render(){
    const message = this.props.tags.length > 2
      ? 'Haz click sobre la etiqueta para eliminar'
      : 'Agrega al menos 3 etiquetas separadas por comas';

    return (
      <Markup text="Etiquetas" state={this.props.tags.length > 2} message={message}>
        <div className={style.body}>
          <div className={style.text_area_fake} onClick={this.handleClick}>
            <div className={style.flex}>
              {this.props.tags.map( tag =>
                <div
                  onClick={() => this.deleteTag(tag)}
                  key={tag}
                  className={style.tag}>{tag}
                </div>
              )}
              <input
                type="text" className={style.input}
                id="input"
                onChange={this.handleChange}
                value={this.props.tag_text}
              />
            </div>
          </div>
        </div>
      </Markup>
    )
  }
}

export default Tags;
