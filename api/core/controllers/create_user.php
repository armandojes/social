<?php

class Create_user extends Controller {

  public function execute(){

    //verificar datos requeridos
    $passed = $this->required([$this->data['mail'], $this->data['password'], $this->data['name'], $this->data['username'], $this->data['sexo']]);
    if(!$passed) $this->response_error('falta algun dato del formulario');

    //verificar disponibilidad de correo
    $User = new User();
    $mail_disp = $User->available_mail($this->data['mail']);
    if (!$mail_disp) $this->response([
      'error' => true,
      'errorDescript' => 'El correo ingresado ya esta registrado anteriormente',
      'errorCode' => 1,
      'errorType' => 'mail',
    ]);

    //setear datos
    $User->set_name($this->data['name']);
    $User->set_username($this->data['username']);
    $User->set_mail($this->data['mail']);
    $User->set_password($this->data['password']);
    $User->set_genero($this->data['sexo']);

    $id = $User->create();
    $response = $id ? [
      'status' => 'ok',
      'error' => false,
      'id' => $id,
    ] : [
      'status' => 'fail',
      'error' => true,
      'errorDescript' => 'error interno del servidor',
    ];

    $this->response($response);
  }


}
