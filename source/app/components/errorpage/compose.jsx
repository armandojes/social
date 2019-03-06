import React from 'react';
import Markup from '../markup/index.jsx';
import Error from './index.jsx';

function ErrorPage (props){
  return (
    <Markup>
      <Error {...props}/>
    </Markup>
  )
}

export default ErrorPage;
