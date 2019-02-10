import React, { Fragment } from 'react';
import Section from '../../../components/section/index.jsx';
import Header from '../../../components/user_header/index.jsx';

function View (props){
  return (
    <Fragment>
      <Header text="Etiquetas" image="public/img/icons/tag.png" />
      <Section
        {...props}
        path="etiqueta"
      />
    </Fragment>
  )
}

export default View;
