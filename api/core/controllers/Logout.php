<?php
// controlador cerrar session
// path post:: user/logout
// data: [id, token]

class Logout extends Controller {

  public function execute(){

    $this->session();

    $User = new User();
    $User->set_id($this->data['id_user']);
    $state = $User->logout();

    $response = [
      'error' => $state ? false : true,
    ];

    $this->response($response);
  }
}
