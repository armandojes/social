import React from 'react';
import Group from '../group/index.jsx';
import { connect } from 'react-redux';


function Admin (props){

  const data = {
    title: 'admin',
    options: [
      {link: '/crearpost', option: 'crear post', icon: 'public/img/icons/home.png'},
      {link: '/misposts', option: 'mis posts', icon: 'public/img/icons/post.png'},
      {link: props.username ? `/perfil/${props.username}` : '/entrar', option: 'miperfil', icon: 'public/img/icons/profile.png'},
      {link: '/guardado', option: 'guardado', icon: 'public/img/icons/save.png'},
      {link: '/notificaciones', option: 'notificaciones', icon: 'public/img/icons/home.png'},
    ],
  };

  return (
    <Group data={data} />
  )
}

function mapStateToProps (state){
  return {
    username: state.user.username,
  }
}

export default connect(mapStateToProps)(Admin);
