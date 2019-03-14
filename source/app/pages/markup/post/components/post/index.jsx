import React, { Component, Fragment }from 'react';
import { connect } from 'react-redux';
import View from './view.jsx';
import {load_post, set_id, set_url, set_initialState} from '../../flux.js';
import { Helmet } from 'react-helmet';

class Post extends Component {
  constructor(props){
    super(props)


  }

  shouldComponentUpdate(nextProps){
    return this.props.loading === nextProps.loading ? false : true ;
  }

  componentDidMount(){
    let id = this.props.url;
    id = id.split('-')[0];
    this.props.dispatch(set_id(parseInt(id)));
    this.props.dispatch(set_url(this.props.url));
    this.props.dispatch(load_post());
  }

  render(){

    return (
      <Fragment>
        <Helmet>
          <title>{this.props.title}</title>
          <meta name="description" content="" />
          <meta name="robots" content="index" />
        </Helmet>
        <View
          {...this.props}
        />
      </Fragment>
    )
  }
}

function mapState(state, props){
  return {
    id: state.pages.post.id,
    content: state.pages.post.content,
    title: state.pages.post.title,
    meta: state.pages.post.meta,
    category: state.pages.post.category,
    loading: state.pages.post.loading,
  }
}

export default connect(mapState)(Post);
