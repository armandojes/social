<?php
// lista de categorias
//path: get::/category

class List_category extends Controller {
  public function execute(){

    $Category = new Category();

    $list_category = $Category->get_list();

    $this->response([
      'error' => false,
      'items' => $list_category,
    ]);
  }
}
