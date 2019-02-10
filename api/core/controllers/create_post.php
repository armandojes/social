<?php
//create post
//path: post:: /post/create

class Create_post extends Controller {

  public function execute(){

    $this->session();

    //validar datos no vacios
    $passed = $this->required([$this->data['picture'], $this->data['title'], $this->data['content'], $this->data['tags'], $this->data['category'], $this->data['picture']]);
    if (!$passed) $this->response_error('falta algun dato del formulario');

    //crear instancias
    $Post = new Post();

    //setear datos
    $Post->set_title($this->data['title']);
    $Post->set_picture($this->data['picture']);
    $Post->set_content($this->data['content']);
    $Post->set_category($this->data['category']);
    $Post->set_tags($this->data['tags']);
    $Post->set_user($this->session);


    //crear post
    $urlpost = $Post->create();

    $response = [
      'url' => $urlpost,
      'error' => false,
      'status' => 'ok',
    ];

    $this->response($response);

  }

}
