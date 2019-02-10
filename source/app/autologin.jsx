import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login_token, set_user } from './flux/user.js';
import { bindActionCreators } from 'redux';

class Autologin extends Component {

  componentWillMount(){

    const id = get_cookie('id');
    const mail = get_cookie('mail');
    const token = get_cookie('token');
    const passlook = get_cookie('passlook');
    if (!id || !mail || !token || !passlook){
      this.props.set_user({
        logged: false,
        name: '',
        type: '',
        token: '',
        id: '',
      });
    } else {
      if (this.props.logged === true)  return true;
      this.props.login_token({id: id, mail: mail, token: token, passlook: passlook});
    }
  }


  render(){
    return null;
  }
}

function mapStateToProps(state){
  return {
    logged: state.user.logged,
    loading: state.user.loading,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({login_token, set_user}, dispatch);
}


export const set_cookie = (name, value) => {
  var d = new Date(); d.setTime(d.getTime() + (7*24*60*60*1000));
  const expires = "expires="+d.toUTCString();
  document.cookie = `${name} = ${value};  ${expires}; path=/`;
  return true;
}

export const get_cookie = (name) => {
  return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

export default connect(mapStateToProps, mapDispatchToProps)(Autologin);
