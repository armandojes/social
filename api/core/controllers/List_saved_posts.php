<?php
// Obtienes lista de posts guardados
// path: post:: posts/saved

class List_saved_posts extends Controller {
  public function execute(){

    $this->session();

    //validar datos necesarios
    $this->validate(['page', 'id_user']);

    //crear instancias
    $Post = new Post();

    //setear datos
    $Post->set_page($this->data['page']);
    $Post->set_user($this->data['id_user']);

    //obtener posts
    $total_posts = $Post->get_total_items_saved();
    $posts = $total_posts ? $Post->get_list_saved() : 0;
    $total_pages = $total_posts ? $Post->get_total_pages_saved() : 0;

    if ($total_posts) {
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
