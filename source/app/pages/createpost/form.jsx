import React from 'react';
import style from './style.css';
import Container from '../../components/container/index.jsx';
import Responsive from '../../components/responsive/index.jsx';

//components
import Title from './components/title/index.jsx';
import Content from './components/content/index.jsx';
import Category from './components/category/index.jsx';
import Tags from './components/tags/index.jsx';
import Picture from './components/picture/index.jsx';
import Button from './components/button/index.jsx';


function Form (props){
  return (
    <div>
      <Container>
        <div className={style.content}>
          <div className={style.primary}>
            <Title set_title={props.set_title} title={props.title} />
            <Content
              content={props.content}
              images={props.images}
              set_content={props.set_content}
              picture_upload={props.picture_upload}
            />
            <Button
              {...props}
            />
          </div>
          <Responsive rule="min-width:751px">
            <div className={style.secondary}>
              <Category
                set_category={props.set_category}
                category={props.category}
              />
              <Tags
                tag_text={props.tag_text}
                tags={props.tags}
                set_tagtext={props.set_tagtext}
                insert_tag={props.insert_tag}
                set_delete={props.set_delete}
              />
              <Picture
                picture={props.picture}
                set_picture={props.set_picture}
                upload_miniature={props.upload_miniature}
              />
            </div>
          </Responsive>
        </div>
      </Container>
    </div>
  )
}

export default Form;
