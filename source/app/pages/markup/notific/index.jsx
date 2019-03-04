import React, { Component } from 'react';
import { connect } from 'react-redux';
import Admin from '../../../components/admin/index.jsx';
import { load_items } from '../../../flux/notific.js';
import View from './view.jsx';

class Notific extends Component {
  constructor(props){
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    if (this.props.items.length == 0){
      this.props.dispatch(load_items());
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
    if (this.props.current_page >= this.props.num_pages) return null;
    this.props.dispatch(load_items());
  }

  render(){
    return (
      <View {...this.props}/>
    )
  }

}

function mapStateToProps(state){
  return {
    loading: state.notific.loading,
    items: state.notific.items,
    num_pages: state.notific.num_pages,
    current_page: state.notific.current_page,
  }
}

export default Admin(connect(mapStateToProps)(Notific));
