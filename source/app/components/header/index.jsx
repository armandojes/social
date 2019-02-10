import React from 'react';
import style from './style.css';
import Container from '../container/index.jsx';
import Responsive from '../responsive/index.jsx';
import Desktop from './components/desktop/index.jsx';
import Movil from './components/movil/index.jsx';

function Header(){
  return (
    <header className={style.content}>
      <div className={style.header}>
        <Container>
          <div className={style.header_int}>
            <Responsive rule="min-width:501px" >
              <Desktop />
            </Responsive>
            <Responsive rule="max-width:500px ">
              <Movil />
            </Responsive>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header;
