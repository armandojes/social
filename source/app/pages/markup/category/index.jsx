import React, { Component } from 'react';
import { load_category } from '../../../flux/category.js';
import { connect } from 'react-redux';
import View from './view.jsx'

class Category extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    if (this.props.loading){
      this.props.dispatch(load_category());
    }
  }

  render(){
    return (
      <View {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.category.loading,
  items: state.category.items,
})
export default connect(mapStateToProps)(Category);
