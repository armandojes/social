import React, { Component } from 'react';
import style from './style.css';

class Content extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.uploadImages = this.uploadImages.bind(this);
  }

  componentDidMount(){
    tinymce.init({
      setup: this.handleChange,
      selector: '#editor',
      plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste imgsurfer textcolor emoticons"],
      toolbar1: "bold,italic,blockquote,bullist,numlist | alignleft,aligncenter,alignright,alignjustify |link,unlink,table,fullscreen,undo,redo,wp_adv,spellchecker,dfw",
      toolbar2: "formatselect,fontselect,fontsizeselect,emoticons | forecolor,backcolor | underline",
      language: "es",
      theme: "modern",
      resize: true,
      relative_urls: false,
      remove_script_host: true,
      document_base_url: "",
      height: "500px"
    })
  }

  async uploadImages(e){

    if( e.target.value.length === 0 ) return false;
    let picture = new FormData();
    picture.append("picture", e.target.files[0]);
    const response = await this.props.picture_upload(picture);

    if (response){
      tinyMCE.execCommand('mceInsertRawHTML',false, `<img src="${response}" style="max-width: 100%" />`);
    }
  }


  handleChange(editor){
    editor.on('change',() => {
      const content = editor.getContent();
      this.props.set_content(content);
    });
  }

  componentWillUnmount(){
    tinymce.remove("#editor")
  }


  render(){
    return (
      <div className={style.content}>
        <div className={style.header}>
          <label className={style.button}>
            <img className={style.icon} src="public/img/icons/picture.png "/>
            Agregar imagen
            <input type="file" className={style.input} onChange={this.uploadImages}/>
          </label>
          {this.props.images === 'loading' && (
            <img className={style.loading} src="public/img/preloaders/preload.gif" />
          )}
        </div>
        <textarea id="editor" className={style.textarea} defaultValue={this.props.content} />
      </div>
    )
  }
}

export default Content;
