<?php
// activate user
// path: post:: /user/activate
// data: id_user, code

class Activate_user extends Controller {

  public function execute(){

    //validar datos requeridos
    $this->validate(['id_user', 'code']);

    //crear intancias
    $User = new User();

    //setear_datos
    $User->set_id($this->data['id_user']);
    $User->set_key($this->data['code']);

    //verificar usuario existente
    $user_data = $User->get_single();
    if (!$user_data) $this->response([
      'error' => true,
      'errorCode' => '404',
      'errorDescript' => 'el usuario con el ingresado no existe'
    ]);

    //verificar estado usuario
    if ($user_data['state'] === 'active') $this->response([
      'error' => true,
      'errorCode' => '401',
      'errorDescript' => 'El usuario ya se encuentra activo!'
    ]);

    //verificar codigo de activacion
    if (!$User->validate_code()) $this->response([
      'error' => true,
      'errorCode' => '403',
      'errorDescript' => 'la clave de activacion es incorrecto'
    ]);

    // a c t i v a r   u s u a r i o
    $User->activate();
    $this->response([
      'error' => false
    ]);

  }

}
