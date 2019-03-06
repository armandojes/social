import React from 'react';
import style from './style.css';
import Markup from '../../components/markup/index.jsx';

//components
import Button from './components/button/index.jsx';
import Post from '../markup/post/components/post/view.jsx';

function Preview (props){

  return (
    <Markup>
      <Post
        {...props}
        meta={{}}
      />
      <Button {...props}/>
    </Markup>
  )
}

export default Preview;
