import React from 'react';
// import { connect } from 'react-redux';
import Admin from './components/admin/index.jsx';
import Explore from './components/explore/index.jsx';

function Menu(props){
  return (
    <div>
      <Explore />
      <Admin />
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   logged: state.logged,
// })

export default Menu;
