import React, { Fragment } from 'react';
import Section from '../../../components/section/index.jsx';
import Header from '../../../components/user_header/index.jsx';

function View (props){
  return (
    <Fragment>
      <Header text="categorias" image="public/img/icons/category.png" />
      <Section
        {...props}
        path="categoria"
      />
    </Fragment>
  )
}

export default View;
