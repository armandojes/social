import React from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import Home from './home/index.jsx';
import Post from './post/index.jsx';
import MyPosts from './myposts/index.jsx';
import MySaved from './mysaved/index.jsx';
import Category from './category/index.jsx';
import Category_posts from './category_posts/index.jsx';
import Tags from './tags/index.jsx';
import TagPosts from './tag_posts/index.jsx';

function Router (){
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:url" component={Post} />
      <Route exact path="/misposts" component={MyPosts} />
      <Route exact path="/guardado" component={MySaved} />
      <Route exact path="/categorias" component={Category} />
      <Route exact path="/categoria/:category" component={Category_posts} />
      <Route exact path="/etiquetas" component={Tags} />
      <Route exact path="/etiqueta/:etiqueta" component={TagPosts} />
    </Switch>
  )
}

export default Router;
