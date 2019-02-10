<?php
//lista de etiquetas
// path get:: /tags/:page

class List_tags extends Controller {

  public function execute (){

    $this->validate(['page'], 'params');

    $Tag = new Tag();

    $Tag->set_page($this->params['page']);

    $tags_list = $Tag-> get_list();
    $total_items = $Tag->get_total_items();
    $pages = $Tag->get_pages();

    if (!$tags_list){
      $response = [
        'error' => true,
        'errorCode' => 403,
      ];
    } else {
      $response = [
        'error' => false,
        'items' => $tags_list,
        'num_items' => $total_items,
        'num_pages' => $pages,
      ];
    }

    $this->response($response);
  }
}
