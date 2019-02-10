import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view.jsx';
import { set_contentcoment, sed_coment } from '../../flux.js';


class NewComent extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(e){
    this.props.dispatch(set_contentcoment(e.target.value));
  }

  handleClick(){
    if (this.props.content_coment.length < 10){
      alert('comentario demaciaod corto');
    } else {
      this.props.dispatch(sed_coment());
    }
  }

  render(){
    if(this.props.loading || this.props.error) return null;

    return (
      <div>
        <View
          {...this.props}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    content_coment: state.pages.post.content_coment,
    loading: state.pages.post.loading,
    error: state.pages.post.error,
  }
}

export default connect(mapStateToProps)(NewComent);
