import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Admin from '../../../components/admin/index.jsx';
import { load_posts } from './flux.js';
import View from './view.jsx';

class MyPosts extends Component {
  constructor(props){
    super(props)

    this.handleScroll =  this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    if (!this.props.current_page){
      this.props.load_posts();
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
    this.props.load_posts();
  }

  render(){
    return (
      <View {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.pages.mysaved.loading,
  items: state.pages.mysaved.items,
  pages: state.pages.mysaved.pages,
  current_page: state.pages.mysaved.current_page,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({load_posts}, dispatch);


export default Admin(connect(mapStateToProps, mapDispatchToProps)(MyPosts));
