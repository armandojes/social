<?php
//upload miniature
//path: /picture/uploadminiature

class Save_post extends Controller {

  public function execute(){

    $this->session();

    //validar datos
    $this->validate(['id_user', 'id_post']);

    //crear instancias
    $Post = new Post();
    $User = new User();
    $Notific = new Notific();


    //setear datos
    $Post->set_user($this->data['id_user']);
    $Post->set_id($this->data['id_post']);
    $User->set_idpost($this->data['id_post']);


    $id_ownerPost = $User->get_user_for_post();

    //crear post
    $status = $Post->save();

    //crear notificaciones
    if ($id_ownerPost != $this->data['id_user']){
      $Notific->set_fromuser($this->data['id_user']);
      $Notific->set_touser($id_ownerPost);
      $Notific->set_type('save_post');
      $Notific->set_idpost($this->data['id_post']);
      $Notific->create_message();
      $Notific->create_link();
      $Notific->create();
    }

    //create response
    $response = [
      'error' => $status ? false : true,
      'status' => 'ok',
    ];

    $this->response($response);

  }
}
