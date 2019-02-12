<?php

class Create_user extends Controller {

  public function execute(){

    //verificar datos requeridos
    $passed = $this->required([$this->data['mail'], $this->data['password'], $this->data['name'], $this->data['username'], $this->data['sexo']]);
    if(!$passed) $this->response_error('falta algun dato del formulario');

    $User = new User();

    //setear datos
    $User->set_name($this->data['name']);
    $User->set_username($this->data['username']);
    $User->set_mail($this->data['mail']);
    $User->set_password($this->data['password']);
    $User->set_genero($this->data['sexo']);

    //verificar disponibilidad de correo
    $mail_disp = $User->available_mail();
    if (!$mail_disp) $this->response([
      'error' => true,
      'errorDescript' => 'El correo ingresado ya esta registrado anteriormente',
      'errorCode' => 1,
      'errorType' => 'mail',
    ]);

    //verificar disponivilidad de username
    $username_disp = $User->available_username($this->data['username']);
    if (!$username_disp) $this->response([
      'error' => true,
      'errorDescript' => 'El "Alias" elegido ya esta en uso, porfavor elige otro.',
      'errorCode' => 1,
      'errorType' => 'username',
    ]);


    $id = $User->create();
    $response = [
      'status' => 'ok',
      'error' => false,
      'id' => $id,
    ];

    $this->response($response);
  }


}
