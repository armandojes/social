import React from 'react';
import style from './style.css';
import Container from '../../components/container/index.jsx';
import Responsive from '../../components/responsive/index.jsx';
import Menu from '../../components/menu/index.jsx';
import Router from './router.jsx';

function Public (){
  return (
    <div role="public_content">
      <Container>
        <div className={style.content}>
          <Responsive rule="min-width:701px">
            <nav className={style.nav}>
              <div className={style.fixed_menu}>
                <Menu />
              </div>
            </nav>
          </Responsive>
          <div className={style.body}>
            <Router />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Public;
