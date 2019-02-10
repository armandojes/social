<?php
// path: /user/login


class Login extends Controller {

  public function execute(){

    //verificar existencia de datos
    $exist_data = $this->required([$this->data['password'],$this->data['mail']]);
    if (!$exist_data) $this->response(['error' => true, 'errorCode' => 403, 'errorDescript' => 'campos vacios']);


    //crear instancias
    $Security = new Security();

    $Security->set_mail($this->data['mail']);
    $Security->set_password($this->data['password']);
    $result = $Security->login();

    if ($result === false ){
      $response = [
        'error' => true,
        'errorCode' => 403,
        'errorMessage' => 'Los datos ingresados son incorrectos',
      ];
    } else if ($result === 'inactive'){
      $response = [
        'error' => true,
        'errorCode' => 403,
        'errorMessage' => 'La cuenta esta inactiva, ve a tu correo y activa tu cuenta',
      ];
    } else {
      $response = array_merge(['error' => false], $result);
    }

    //responder consulta
    $this->response($response);

  }
}
