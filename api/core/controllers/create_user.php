<?php

use  PHPMailer\PHPMailer\PHPMailer;
use  PHPMailer\PHPMailer\Exception;

class Create_user extends Controller {

  public function execute(){

    //verificar datos requeridos
    $passed = $this->required([$this->data['mail'], $this->data['password'], $this->data['name'], $this->data['username'], $this->data['sexo']]);
    if(!$passed) $this->response_error('falta algun dato del formulario');

    //crear instancias
    $User = new User();
    $Mail = new PHPMailer();
    $Security = new Security();

    //setear datos
    $User->set_name($this->data['name']);
    $User->set_username($this->data['username']);
    $User->set_mail($this->data['mail']);
    $User->set_password($this->data['password']);
    $User->set_genero($this->data['sexo']);
    $Security->set_password($this->data['password']);

    //obtener clave de activacion
    $activateKey = $Security->create_token();
    $User->set_key($activateKey);

    //verificar disponibilidad de correo
    $Mail_disp = $User->available_mail();
    if (!$Mail_disp) $this->response([
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
    $User->create_activation();

    //enviar correo de activacion
    $Mail->IsSMTP();
    $Mail->SMTPAuth = true;
    $Mail->Host = "smtp.hostinger.mx"; // SMTP a utilizar. Por ej. smtp.elserver.com
    $Mail->Username = "registro@asicspace.com.mx"; // Correo completo a utilizar
    $Mail->Password = "Jesuselpoeta4772"; // Contraseña
    $Mail->Port = 587; // Puerto a utilizar
    $Mail->From = "registro@asicspace.com.mx"; // Desde donde enviamos (Para mostrar)
    $Mail->FromName = SITENAME;

    $Mail->AddAddress($this->data['mail']); // Esta es la dirección a donde enviamos
    $Mail->IsHTML(true); // El correo se envía como HTML
    $Mail->Subject = "Bienvenido a ".SITENAME."! confirma tu correo electronico."; // Este es el titulo del email.
    $body = mail_template($id, $activateKey);
    $Mail->Body = $body; // Mensaje a enviar
    $stateMail = $Mail->Send(); // Envía el correo.

    $this->response([
      'status' => 'ok',
      'error' => false,
      'id' => $id,
    ]);
  }
}
