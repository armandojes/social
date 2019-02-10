<?php
//lista de posts
//path: get::post/page/${page}

class Posts_user extends controller {

  public function execute(){

    //validar datos necesarios
    $this->validate(['page', 'userid'], 'params');

    //crear instancias
    $Post = new Post();

    //setear datos
    $Post->set_page($this->params['page']);
    $Post->set_user($this->params['userid']);

    //obtener posts
    $posts = $Post->get_list_user();
    $total_posts = $posts ? $Post->get_total_items_user() : 0;
    $total_pages = $posts ? $Post->get_total_pages_user() : 0;

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
