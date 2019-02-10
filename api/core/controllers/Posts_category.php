<?php
//lista de posts
//path: get::post/page/${page}

class Posts_category extends controller {

  public function execute(){

    //validar datos necesarios
    $this->validate(['page', 'id_category']);

    //crear instancias
    $Post = new Post();

    //setear datos
    $Post->set_page($this->data['page']);
    $Post->set_category($this->data['id_category']);

    //obtener posts
    $posts = $Post->get_list_category();
    $total_posts = $posts ? $Post->get_total_items_category() : 0;
    $total_pages = $posts ? $Post->get_total_pages_category() : 0;

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
