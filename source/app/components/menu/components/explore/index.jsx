import React from 'react';
import Group  from '../group/index.jsx';

function Explore () {
  const data = {
    title: 'explorar',
    options: [
      {link: '/', option: 'Inicio', icon: 'public/img/icons/home.png'},
      {link: '/categorias', option: 'Categorias', icon: 'public/img/icons/category.png'},
      {link: '/etiquetas', option: 'Etiquetas', icon: 'public/img/icons/tag.png'},
    ],
  };

  return (
    <Group data={data} />
  )
}

export default Explore;
