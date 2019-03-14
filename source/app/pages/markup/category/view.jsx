import React, { Fragment } from 'react';
import Section from '../../../components/section/index.jsx';
import Header from '../../../components/user_header/index.jsx';
import { Helmet } from 'react-helmet';

function View (props){
  return (
    <Fragment>
      <Helmet>
        <title>Categorias</title>
        <meta name="description" content="Lista de categorias disponibles" />
        <meta name="robots" content="index" />
      </Helmet>
      <Header text="categorias" image="public/img/icons/category.png" />
      <Section
        {...props}
        path="categoria"
      />
    </Fragment>
  )
}

export default View;
