<?php
//upload miniature
//path: /picture/uploadminiature

class Save_post extends Controller {

  public function execute(){

    $this->session();

    //validar datos
    $this->validate(['id_user', 'id_post']);

    //crear instancias
    $Post = new Post();

    //setear datos
    $Post->set_user($this->data['id_user']);
    $Post->set_id($this->data['id_post']);

    //crear post
    $status = $Post->save();
    
    //create response
    $response = [
      'error' => $status ? false : true,
      'status' => 'ok',
    ];

    $this->response($response);

  }
}
