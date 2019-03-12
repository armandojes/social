<?php
//controlador de perfil
//entry username
//path: post:: /user

class Profile extends Controller {
  public function execute(){

    //validar datos
    $this->validate(['username']);

    //crear intancias
    $Post = new Post();
    $User = new User();
    $Coment = new Coment();

    //setear datos
    $User->set_username($this->data['username']);

    $date_user = $User->get_single_from_username($this->data['username']);
    if (!$date_user) $this->response([
      'error' => true,
      'errorCode' => 404,
      'errorMessage' => 'error404 no existe usuario.',
      'data' => null,
      'posts' => [],
    ]);

    //obtener ultimos post, numero de posts y comentarios
    $Post->set_user($date_user['id']);
    $Coment->set_user_id($date_user['id']);

    $posts_user = $Post->get_list_user();
    $num_posts_user = $Post->get_total_items_user();
    $num_user_coments = $Coment->total_user_coments();

    $posts_user = $posts_user ? $posts_user : [];
    $date_user['password'] = null;
    $date_user['token'] = null;
    $date_user['num_posts'] = $num_posts_user;
    $date_user['num_coments'] = $num_user_coments;



    $response = [
      'error' => false,
      'data' => $date_user,
      'posts' => $posts_user,
    ];
    $this->response($response);

  }
}
