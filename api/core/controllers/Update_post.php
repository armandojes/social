<?php
// controlador actualizar post
// entry: data post, id_user_token
// path: post:: /post/update

class Update_post extends Controller {
  public function execute(){

    $this->session();

    //validar datos requeridos
    $this->validate(['id_post','category', 'content', 'id_user', 'picture', 'tags', 'title', 'token']);

    //crear_instancias
    $Post = new Post();
    $User = new User();


    //setear datos
    $Post->set_id($this->data['id_post']);
    $Post->set_title($this->data['title']);
    $Post->set_picture($this->data['picture']);
    $Post->set_content($this->data['content']);
    $Post->set_category($this->data['category']);
    $Post->set_tags($this->data['tags']);
    $Post->set_user($this->session);
    $User->set_idpost($this->data['id_post']);

    //verificar propietario de post
    $owner_post = $User->get_user_for_post();
    if ($owner_post != $this->data['id_user']) $this->response([
      'error' => true,
      'errorMessage' => 'no autorizado para editar',
      'status' => 'failed'
    ]);


    //actualizar post
    $status = $Post->update();

    if (!$status) $this->response([
      'error' => true,
      'errorCode' => 505,
      'errorMessage' => 'Error interno del servidor.'
    ]);

    $this->response([
      'error' => false,
      'status' => 'OK',
      'message' => 'post updated',
    ]);
  }
}
