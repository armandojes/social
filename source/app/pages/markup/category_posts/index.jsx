import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view.jsx';
import { set_url, load_data, set_initialState, load_posts } from './flux.js';


class CategoryPosts extends Component {
  constructor(props){
    super(props)

    this.handleScroll =  this.handleScroll.bind(this);
  }

  componentWillMount(){
    this.props.dispatch(set_url(this.props.category));
  }

  async componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    const response = await this.props.dispatch(load_data());
    if (response.error){
      this.props.history.replace('/error');
    } else {
      this.props.dispatch(load_posts());
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    this.props.dispatch(set_initialState());
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

  render(){
    return (
      <View
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state, props) => ({
  category: props.match.params.category,
  loading: state.pages.category.loading,
  items: state.pages.category.items,
  pages: state.pages.category.pages,
  current_page: state.pages.category.current_page,
  name: state.pages.category.name,
})

export default connect(mapStateToProps)(CategoryPosts);
