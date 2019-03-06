import React from 'react';
import style from './style.css';
import Container from '../container/index.jsx';
import Responsive from '../responsive/index.jsx';
import Menu from '../menu/index.jsx';


function Markup (props){
  return (
    <div role="markup">
      <Container>
        <div className={style.content}>
          <Responsive rule="min-width:701px">
            <nav className={style.nav}>
              <div className={style.fixed_menu}>
                <Menu />
              </div>
            </nav>
          </Responsive>
          <div className={style.body} role="children">
            {props.children}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Markup;
