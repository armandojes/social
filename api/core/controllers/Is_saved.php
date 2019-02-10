<?php
// verifica si un post esta en favoritos
// path: post post/saved [user_id, post_id]:


class Is_saved extends Controller {
  public function execute(){

    //verific data required
    $this->validate(['user_id', 'post_id']);

    //crear instancias
    $Post = new Post();

    //setear datos
    $Post->set_id($this->data['post_id']);
    $Post->set_user($this->data['user_id']);

    $is_saved = $Post -> is_saved();

    //create response
    $response = [
      'error' => false,
      'saved' => $is_saved ? true : false,
    ];

    $this->response($response);
  }
}
