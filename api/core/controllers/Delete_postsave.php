<?php
// controlador para borrar post guardado
//entry: id_user, token, id_post
// path: post:: /post/delet

class Delete_postsave extends Controller {

  public function execute(){
    $this->session();

    //validar datos requeridos
    $this->validate(['id_saved', 'id_user' , 'token']);

    //crear instancias
    $Post = new Post();
    $User = new User();

    //setear datsos
    $Post->set_saved($this->data['id_saved']);
    $Post->set_user($this->data['id_user']);
    $User->set_saved($this->data['id_saved']);

    //verificar propietario saved
    $owner_post = $User->get_user_for_saved();
    if ($owner_post != $this->data['id_user']) $this->response([
      'error' => true,
      'errorCode' => 403,
      'errorMessage' => 'propietario incorrecto, not autorized!'
    ]);


    //Borrar post
    $status = $Post->delete_save();

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
