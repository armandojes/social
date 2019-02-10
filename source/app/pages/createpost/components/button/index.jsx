import React, { Component } from 'react';
import style from './style.css';


class Button extends Component {
  constructor (props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.editor = this.editor.bind(this);
  }

  handleClick(){
    if(this.props.view === 'form') this.verify();
    if (this.props.view === 'preview') this.create();
  }

  editor(){
    this.props.set_view('form');
  }

  create(){
    this.props.create();
  }

  verify(){
    let errorMesssage = false;
    if (this.props.title.length < 31){
      errorMesssage = 'El titulo es demaciado corto!';
    } else if (this.props.content.length < 100){
      errorMesssage = 'El contenido del post es muy corto';
    } else if (this.props.category == ""){
      errorMesssage = 'Selecciona una categoria';
    } else if (this.props.tags.length < 3){
      errorMesssage = 'agrega al menos 3 etiquetas!'
    } else if (this.props.picture == 'form' || this.props.picture == 'loading'){
      errorMesssage = 'Agrega una imagen destacada porfavor!'
    }

    errorMesssage
    ? this.props.set_alert(errorMesssage)
    : this.props.set_view('preview');
  }

  render(){
    return (
      <div className={style.button_container}>
        {this.props.view === 'preview' && (
          <div className={style.button_cancel} onClick={this.editor}>
            Volver a editar
          </div>
        )}
        <div className={style.button} onClick={this.handleClick}>
          {this.props.view === 'preview' ? ('publicar!') : ('previsializar y publicar!')}
        </div>
      </div>
    )
  }
}

export default Button;
