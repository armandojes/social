<?php
//procesador de nuevo comentario
// path:  post::coments/new

class New_coment extends Controller {


  public function execute(){
    if (!empty($this->data['id_user'])) $this->session();

    //crear instancias
    $Coment = new Coment();

    //verificar datos requeridos
    $this->validate(['id_post', 'coment']);


    //setear datos
    if ($this->session) $Coment->set_user_id($this->data['id_user']);
    $Coment->set_post_id($this->data['id_post']);
    $Coment->set_coment($this->data['coment']);
    $state = $Coment->coment_post();
    var_dump($state);
  }


}
