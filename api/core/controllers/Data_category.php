<?php
//obtener datos de categoria
// path: post:: category/data

class Data_category extends Controller {

  public function execute(){

    //crear instancia
    $Category = new Category();

    //setear datos
    $Category->set_url($this->data['url']);

    //obtener datos
    $data_category = $Category->get_data();

    if ($data_category){
      $response = [
        'error' => false,
      ];
      $response = array_merge($data_category, $response);
    } else {
      $response = [
        'error' => true,
        'errorCode' => 404,
        'code' => 404,
        'errorDescript' => 'Categoria no encontrado!'
      ];
    }

    $this->response($response);

  }

}
