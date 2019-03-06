<?php
// post cstroller
//path: GET:: /post/id/{id}


class Post_controller extends Controller {

  public function execute(){

    $this->validate(['id'], 'params');

    //crear instancias
    $Post = new Post();
    $Category = new Category();

    //setear Datos
    $Post->set_id($this->params['id']);

    //request
    $post_data = $Post->get_single();
    if (!$post_data) $this->response([
      'error' => true,
      'errorCode' => 404,
      'errorMessage' => 'El post que estas buscando no existe'
    ]);

    $Category->set_id($post_data['category']);
    $post_data['meta']['category_name'] = $Category->get_data_from_id()['name'];
    $post_data['meta']['date'] = convert_date($post_data['date']);
    //responder cliente
    $this->response(array_merge(['error' => false, 'status' => 'ok'], $post_data));
  }
}
