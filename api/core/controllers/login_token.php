<?php
// path: /user/login-token


class Login_token extends Controller {

  public function execute(){

    //verificar existencia de datos
    $exist_data = $this->required([$this->data['passlook'],$this->data['mail'],$this->data['token'],$this->data['id']]);
    if (!$exist_data) $this->response(['error' => true, 'errorCode' => 403, 'errorDescript' => 'campos vacios']);


    //crear instancias
    $Security = new Security();

    $Security->set_mail($this->data['mail']);
    $Security->set_passlook($this->data['passlook']);
    $Security->set_token($this->data['token']);
    $Security->set_id($this->data['id']);

    $result = $Security->login_token();

    if (!$result){
      $response = [
        'error' => true,
        'errorCode' => 403,
        'errorMessage' => 'datos incorrectos',
      ];
    } else {
      $response = array_merge(['error' => false], $result);
    }

    //responder consulta
    $this->response($response);
    
  }
}
