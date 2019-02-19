<?php
//procesador de nuevo comentario
// path:  post::coments/new

class New_coment extends Controller {


  public function execute(){
    if (!empty($this->data['id_user'])) $this->session();

    //crear instancias
    $Coment = new Coment();
    $User = new User();
    $Notific = new Notific();

    //verificar datos requeridos
    $this->validate(['id_post', 'coment']);


    //obtener id de usuario dueo del post


    //setear datos
    if ($this->session) $Coment->set_user_id($this->data['id_user']);
    $Coment->set_post_id($this->data['id_post']);
    $Coment->set_coment($this->data['coment']);
    $User->set_idpost($this->data['id_post']);
    $state = $Coment->coment_post();

    $id_ownerPost = $User->get_user_for_post();
    $id_ownerComent = !empty($this->data['id_user']) ? $this->data['id_user'] : 0;

    if ($id_ownerPost != $id_ownerComent){
      $Notific->set_fromuser($id_ownerComent);
      $Notific->set_touser($id_ownerPost);
      $Notific->set_type('new_comment');
      $Notific->set_idpost($this->data['id_post']);
      $Notific->create_message();
      $Notific->create_link();
      $Notific->create();
    }

    $this->response([
      'error' => false,
    ]);

  }
}
