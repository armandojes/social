<?php
//notificaciones pendientes
//entry id_user
//path:  post:: /notific/pending

class Notific_pending extends Controller {
  public function execute (){

    //verificard datos requeridos
    $this->validate(['id_user']);

    //crear intancias
    $Notific = new Notific();

    //setear datos
    $Notific->set_touser($this->data['id_user']);

    //obtener datos
    $pending = $Notific->get_pending();

    $this->response([
      'error' => false,
      'pending' => $pending, 
    ]);
  }
}
