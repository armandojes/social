<?php
//notificaciones

class Notific extends Model {
  private $type;
  private $message;
  private $fromuser = 0;
  private $touser;
  private $link;
  private $state = 1;
  private $page;
  private $itemsforpage = 20;
  private $idpost;


  // s e t t e r s
  public function set_type($type){
    $this->type = (string) $type;
  }
  public function set_idpost($idpost){
    $this->idpost = (int) $idpost;
  }
  public function set_message($message){
    $this->message = (string) $message;
  }
  public function set_fromuser($fromuser){
    $this->fromuser = (int) $fromuser;
  }
  public function set_touser($touser){
    $this->touser = (int) $touser;
  }
  public function set_link($link){
    $this->link = (string) $link;
  }
  public function set_state($state){
    $this->state = (string) $state;
  }
  public function set_page($page){
    $this->page = (int) $page;
  }

  //p r i v a t e   m e t h o d s
  //crear nuevo mensage nuevo comentario anonimo
  private function new_comment_anonymous(){
    $Post = New Post();
    $Post->set_id($this->idpost);
    $titlepost = $Post->get_title();
    $this->set_message("Hay un nuevo comentario en tu post <span>$titlepost</span>");
    return $this->message;
  }
  private function new_comment(){
    $User = new User();
    $User->set_id($this->fromuser);
    $namefromuser = $User->get_single();
    $namefromuser = $namefromuser['username'];
    $Post = New Post();
    $Post->set_id($this->idpost);
    $titlepost = $Post->get_title();
    $this->set_message("<span>$namefromuser</span> ha comentado tu post: <span>$titlepost</span>");
    return $this->message;
  }
  private function saved_post(){
    $User = new User();
    $User->set_id($this->fromuser);
    $namefromuser = $User->get_single();
    $namefromuser = $namefromuser['username'];
    $Post = New Post();
    $Post->set_id($this->idpost);
    $titlepost = $Post->get_title();
    $this->set_message("<span>$namefromuser</span> ha guardado en favoritos tu post <span>$titlepost</span>");
    return $this->message;
  }





  //crea un nuevo mensage
  //entry fromuser, type
  //mutted: $this->message && return message
  public function  create_message(){
    if ($this->type === 'new_comment'){
      $message = $this->fromuser
      ? $this->new_comment()
      : $this->new_comment_anonymous();
      return $message;
    } else if ($this->type === 'save_post'){
      $this->saved_post();
    }
    return false;
  }

  //crear link
  //entry idpost
  //mutted: link && return link
  public function create_link(){
    $result = $this->Connect->fetch("SELECT url FROM posts WHERE id = $this->idpost LIMIT 1");
    if (!$result) return false;
    $result = "/post/" . $result['url'];
    $this->set_link($result);
    return $result;
  }

  //crea una notificicacion
  //entry: touser, fromuser, link, message,
  //return state
  public function create (){
    $result = $this->Connect->create("INSERT INTO notific (touser, message, link, state, date) VALUES ($this->touser, '$this->message', '$this->link', $this->state, $this->date)");
    return $result;
  }

  //obtner lista de notificaciones
  //entry $this->touser $this->page
  //return list notic
  public function get_list(){
    $initialfetch = (($this->page - 1) * $this->itemsforpage);
    $this->Connect->set_list(true);
    $data = $this->Connect->fetch("SELECT * FROM notific WHERE touser = $this->touser ORDER BY id DESC LIMIT $initialfetch, $this->itemsforpage");
    return $data ? array_map("map_date",$data) : false ;
  }

  //verificar si hay notificaciones pendientes
  //entry $this->touser
  //return true || false;
  public function get_pending(){
    $data = $this->Connect->fetch("SELECT id FROM notific WHERE touser = $this->touser AND state = 1 LIMIT 1");
    return $data ? true : false ;
  }


  //obtener el numero de elementos total
  //entry: $this->touser
  //reurn num items
  public function get_num_items(){
    $this->Connect->set_list(true);
    $data = $this->Connect->fetch("SELECT id FROM notific WHERE touser = $this->touser");
    return $data ? count($data) : 0;
  }

  //total de paginas disponibles
  //entry: $this->touser
  //return (int) pages
  public function get_num_pages(){
    $count = $this->get_num_items();
    if (!$count) return 0;
    $count = ($count / $this->itemsforpage);
    return (int) ceil($count);
  }

  //actualiza notificaciones en pendientes
  //entry $this->$touser
  //return status
  public function update_status (){
    $status = $this->Connect->set("UPDATE notific SET state = 0 WHERE touser = $this->touser");
    return $status;
  }
}
