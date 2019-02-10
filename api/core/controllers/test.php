<?php
//test controller
// get:: /test

class Test extends controller {


    public function execute(){

      //datos para category
      $Tag = new Tag();
      $Tag->set_name('state');
      $id_tag = $Tag->get_id();

      if ($id_tag){
        $Post = new Post();
        $Post->set_tag($id_tag);
        $Post->set_page(1);
        $num_items = $Post->get_num_items_tag();
        $num_pages = $num_items ? $Post->get_num_pages_tag() : 0;
        $posts_list = $num_items ? $Post->get_list_tag() : false ;
      } else {
        $posts_list = false;
        $num_items = 0;
        $num_pages = 0;
      }

      if ($posts_list){
        $response = [
          'error' => false,
          'items' => $posts_list,
          'pages' => $num_pages,
          'num_items' => $num_items,
        ];
      } else {
        $response = [
          'error' => true,
          'errorDescript' => $id_tag ? 'error de paginacion no hay mas posts' : 'la etiqueta no existe',
          'errorCode' => '404',
        ];
      }

      $this->response($response);

    }


};
