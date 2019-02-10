import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_posts, set_name, set_initialState } from './flux.js';
import View from './view.jsx';

class TagPosts extends Component {
  constructor (props){
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount(){
    this.props.dispatch(set_name(this.props.name));
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    if (this.props.loading){
      this.props.dispatch(load_posts());
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    this.props.dispatch(set_initialState())
  }

  handleScroll(e){
    if(this.props.loading) return null;
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    if( (scrolled + viewportHeight + 10) < fullHeight) return null;
    if (this.props.current_page >= this.props.pages) return null;
    this.props.dispatch(load_posts());
  }


  render (){
    return (
      <View {...this.props} />
    )
  }
}

function mapStatetoProps(state, props){
  return {
    name: props.match.params.etiqueta,
    loading: state.pages.tag.loading,
    items: state.pages.tag.items,
    current_page: state.pages.tag.current_page,
    pages: state.pages.tag.pages,
  }
}


export default connect(mapStatetoProps)(TagPosts);
