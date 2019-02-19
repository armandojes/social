<?php
//lista de notificaciones
//path: post:: /notific
//entry id_user,

class List_notific extends Controller {

  public function execute (){

    //validar datos
    $this->validate(['id_user', 'page']);

    //crear instancias
    $Notific = new Notific();

    //setear datos
    $Notific->set_touser($this->data['id_user']);
    $Notific->set_page($this->data['page']);

    //obtener datos
    $num_items = $Notific->get_num_items();
    $num_pages = $num_items ? $Notific->get_num_pages() : 0;
    $list_notific = $num_items ? $Notific->get_list() : false;

    //error_paginacion superada
    if ($this->data['page'] > $num_pages && $this->data['page'] > 1) $this->response([
      'error' => true,
      'errorCode' => 404,
      'errorMessage' => 'paginacion superada!',
      'items' => [],
      'num_items' => 0,
      'num_pages' => 0,
    ]);

    //no hay notificaciones
    if (!$list_notific) $this->response([
      'error' => false,
      'items' => [],
      'num_items' => 0,
      'num_pages' => 0,
    ]);

    $this->response([
      'error' => false,
      'items' => $list_notific,
      'num_items' => $num_items,
      'num_pages' => $num_pages,
    ]);

  }

}
