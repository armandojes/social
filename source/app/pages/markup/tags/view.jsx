import React, { Fragment } from 'react';
import Section from '../../../components/section/index.jsx';
import Header from '../../../components/user_header/index.jsx';
import Empty from '../../../components/empty/index.jsx';

function View (props){
  if (!props.items.length && !props.loading) return (<Empty />);
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
