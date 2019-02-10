<?php
// post cstroller
//path: GET:: /post/id/{id}


class Post_controller extends Controller {

  public function execute(){

    $this->validate(['id'], 'params');

    //crear instancias
    $Post = new Post();

    //setear Datos
    $Post->set_id($this->params['id']);

    //request
    $post_data = $Post->get_single();


    if (!$post_data){
      $response = [
        'error' => true,
        'errorCode' => 404,
        'errorMessage' => 'El post que estas buscando no existe'
      ];
    } else {
      $response = [
        'error' => false,
        'status' => 'ok'
      ];
      $response = array_merge($response, $post_data);
    }


    //responder cliente
    $this->response($response);
  }
}
