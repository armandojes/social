import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_tags } from './flux.js';
import View from './view.jsx'

class Tags extends Component {
  constructor(props){
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    if (this.props.loading){
      this.props.dispatch(load_tags());
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
    if(this.props.loading) return null;
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    if( (scrolled + viewportHeight + 10) < fullHeight) return null;
    if (this.props.current_page >= this.props.pages) return null;
    this.props.dispatch(load_tags());
  }

  render(){
    return (
      <View
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.pages.tags.loading,
  items: state.pages.tags.items,
  pages: state.pages.tags.pages,
  current_page: state.pages.tags.current_page,
})


export default connect(mapStateToProps)(Tags);
