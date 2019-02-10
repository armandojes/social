import React, { Component } from 'react';
import Markup from '../markup/index.jsx';
import style from './style.css';
import Preloader from '../../../../components/preloader/index.jsx';


class Picture extends Component {
  constructor(props){
    super(props)

    this.selectPicture = this.selectPicture.bind(this);
    this.deletePicture = this.deletePicture.bind(this);
  }

  selectPicture(e){
    if( e.target.value.length === 0 ) return false;
    let picture = new FormData();
    picture.append("picture", e.target.files[0]);
    this.props.upload_miniature(picture);
  }

  deletePicture(){
    this.props.set_picture('form');
  }

  render(){
    const message = this.props.picture != 'loading' && this.props.picture != 'form'
    ? 'haz click sobre la imagen para eliminar'
    : 'Selecciona una imagen para usarlo como miniatura!';

    return (
      <Markup state={this.props.picture != 'loading' && this.props.picture != 'form'} text="Picture" message={message}>
        <div className={style.body}>
          <div className={style.container}>
            {this.props.picture === 'form' && (
              <label htmlFor="picture" className={style.form}>
                <img className={style.picture} src="public/img/icons/picture.png" />
                <input type="file" id="picture" className={style.input} onChange={this.selectPicture} accept="image/*" />
              </label>
            )}
            {this.props.picture === 'loading' && (
              <div className={style.loading}>
                <Preloader/>
              </div>
            )}
            {this.props.picture != 'loading' && this.props.picture != 'form' && (
              <img className={style.pircture_loaded} src={this.props.picture} onClick={this.deletePicture}/>
            )}
          </div>
        </div>
      </Markup>
    )
  }
}

export default Picture;
