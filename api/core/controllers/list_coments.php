<?php
// lista de comentarios en post
//params: id_post, page_coment

class list_coments extends Controller {
  public function execute(){

    //crear instancias
    $Coment = new Coment();

    //seters
    $Coment->set_post_id($this->params['id']);
    $Coment->set_page($this->params['page']);
    $comentsCounter = $Coment->total_coments();
    $coments = $comentsCounter ? $Coment->get_list() : [];
    $num_pages_coments = $comentsCounter ? $Coment->get_pages() : 0;

    if(!$comentsCounter){
      $response = [
        'error' => true,
        'errorCode' => 404,
        'errorMessage' => 'no hay comentarios',
        'total_coments' => $comentsCounter,
      ];
    } else {
      $response = [
        'error' => false,
        'coments' => $coments,
        'total_coments' => $comentsCounter,
        'pages_coments' => $num_pages_coments,
      ];
    }

    $this->response($response);
  }
}
