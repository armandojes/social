import React from 'react';
import style from './style.css';
import Container from '../../components/container/index.jsx';
import Responsive from '../../components/responsive/index.jsx';

//components
import Button from './components/button/index.jsx';
import Post from '../markup/post/components/post/view.jsx';

function Preview (props){
  console.log(props);
  return (
    <div>
      <Container>
        <div className={style.content}>
          <div className={style.primary}>
            <Post
              {...props}
              meta={{}}
            />
            <Button {...props}/>
          </div>
          <Responsive rule="min-width:751px">
            <div className={style.secondary}>
              metas
            </div>
          </Responsive>
        </div>
      </Container>
    </div>
  )
}

export default Preview;
