import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set_tagtext, insert_tag, set_delete } from '../../flux.js';


function HigOrderComponent (WrappedComponent){
  class NewComponent extends Component {


    render(){
      return(
        <WrappedComponent
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          deleteTag={this.deleteTag}s

          
          {...this.props}
        />
      )
    }
  }

}

export default HigOrderComponent;
