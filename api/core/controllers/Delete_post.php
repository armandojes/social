<?php
// controlador para borrar post
//entry: id_user, token, id_post
// path: post:: /post/delet

class Delete_post extends Controller {

  public function execute(){
    $this->session();

    //validar datos requeridos
    $this->validate(['id_post', 'id_user' , 'token']);

    //crear instancias
    $Post = new Post();
    $User = new User();

    //setear datsos
    $Post->set_id($this->data['id_post']);
    $Post->set_user($this->data['id_user']);
    $User->set_idpost($this->data['id_post']);


    //verificar propietario de post
    $owner_post = $User->get_user_for_post();
    if ($owner_post != $this->data['id_user']) $this->response([
      'error' => true,
      'errorCode' => 403,
      'errorMessage' => 'propietario incorrecto, not autorized!'
    ]);

    //Borrar post
    $status = $Post->delete();

    if (!$status) $this->response([
      'error' => true,
      'errorCode' => 505,
      'errorMessage' => 'Error interno del servidor'
    ]);

    $this->response([
      'error' => false,
      'message' => 'El post se ha borrado correctamente',
    ]);
  }

}
