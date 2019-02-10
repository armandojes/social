import React from 'react';
import Group from '../group/index.jsx';

function Admin (){

  const data = {
    title: 'admin',
    options: [
      {link: '/crearpost', option: 'crear post', icon: 'public/img/icons/home.png'},
      {link: '/misposts', option: 'mis posts', icon: 'public/img/icons/post.png'},
      {link: '/miperfil', option: 'miperfil', icon: 'public/img/icons/profile.png'},
      {link: '/guardado', option: 'guardado', icon: 'public/img/icons/save.png'},
      {link: '/notificaciones', option: 'notificaciones', icon: 'public/img/icons/home.png'},
    ],
  };

  return (
    <Group data={data} />
  )
}

export default Admin;
