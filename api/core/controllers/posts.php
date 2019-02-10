<?php
//lista de posts
//path: get::post/page/${page}

class Posts extends controller {

  public function execute(){

    //validar datos necesarios
    $this->validate(['page'], 'params');

    //crear instancias
    $Post = new Post();

    //setear datos
    $Post->set_page($this->params['page']);

    //obtener posts
    $posts = $Post->get_list();
    $total_posts = $Post->get_total_items();
    $total_pages = $Post->get_total_pages();

    if ($posts) {
      $response = [
        'error' => false,
        'items' => $posts,
        'pages' => $total_pages,
        'total_items' => $total_posts,
      ];
    } else {
      $response = [
        'error' => true,
        'items' => $Post,
        'pages' => $total_pages,
        'total_items' => $total_posts,
        'errorMessage' => ' error inesperado paginacion superada!'
      ];
    }

    $this->response($response);
  }

}
