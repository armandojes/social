<?php
// model coments

class Coment extends Model {

  private $user_id = null;
  private $post_id;
  private $coment;
  private $meta = '{}';
  private $page;
  private $maxresult = 10;

  //private functions

  //crea la metaetiqueta
  //agrega el autor en el metadata
  //mutted $this->meta
  private function create_meta (){
    if (!$this->user_id) return false;
    $User = new User();
    $User->set_id($this->user_id);
    $data_user = $User->get_single();
    $meta = ['username' => $data_user['username']];
    $this->meta = json_encode($meta);
  }

  private function save_coment(){
    $state = $this->Connect->set("INSERT INTO coments (user_id, post_id, coment, date, meta) VALUES ('$this->user_id', $this->post_id, '$this->coment', $this->date, '$this->meta')");
    return $state;
  }


  // s e t e r s
  public function set_user_id($user_id){
    $this->user_id = (int) $user_id;
  }
  public function set_page($page){
    $this->page = (int) $page;
  }
  public function set_post_id($post_id){
    $this->post_id = (int) $post_id;
  }
  public function set_coment ($coment){
    $this->coment = $this->prepare($coment);
  }


  //public coment
  //entry $this->[usre_id post_id, comment]
  //return state
  public function coment_post(){
    $this->create_meta();
    $state = $this->save_coment();
    return $state;
  }

  //obtener lista de comentario
  //params: id de post y pagina comentarios
  //return comentarios || false;
  public function get_list(){
    $this->Connect->set_list(true);
    $initialfetch = (($this->page - 1) * $this->maxresult);
    $coments = $this->fetch("SELECT * FROM coments WHERE post_id = $this->post_id ORDER BY id DESC LIMIT $initialfetch, $this->maxresult");
    if (!$coments) return false;
    $comentParsed = [];
    foreach ($coments as $coment) {
      $coment['meta'] = json_decode($coment['meta'], true);
      $coment['date'] = convert_date($coment['date']);
      array_push($comentParsed, $coment);
    }
    return $comentParsed;
  }


  //obtiene el total de comentarios
  //parasm:: id de post
  //return total comentarios de un post
  public function total_coments(){
    $this->Connect->set_list(true);
    $count = $this->Connect->fetch("SELECT id FROM coments WHERE post_id = $this->post_id");
    return $count ? count($count): 0 ;
  }


  //obtiene el total de comentarios de un usuario
  //parasm:: id user
  //return total comentarios de un usuario
  public function total_user_coments(){
    $this->Connect->set_list(true);
    $count = $this->Connect->fetch("SELECT id FROM coments WHERE user_id = $this->user_id ");
    return $count ? count($count): 0 ;
  }




  //obtiene el total de paginas
  //params:id de post
  //return: (int) total de paginas de comentarios
  public function get_pages(){
    $counter = $this->total_coments();
    $pages = (int) ceil($counter / $this->maxresult);
    return $pages;
  }

}
