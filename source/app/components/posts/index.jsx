import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view.jsx';

import { load_post } from '../../flux/posts.js';


class Posts extends Component {
  constructor(props){
    super(props)

    this.handleScroll =  this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    if (!this.props.current_page){
      this.props.dispatch(load_post());
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e){
    if(this.props.loading) return null;
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    if( (scrolled + viewportHeight + 10) < fullHeight) return null;
    if (this.props.current_page >= this.props.pages) return null;
    this.props.dispatch(load_post());
  }

  render(){
    return (
      <View
        items={this.props.items}
        loading={this.props.loading}
      />
    )
  }
}

function mapState(state){
  return {
    items: state.posts.items,
    loading: state.posts.loading,
    pages: state.posts.pages,
    current_page: state.posts.current_page,
  }
}


export default connect(mapState)(Posts);
