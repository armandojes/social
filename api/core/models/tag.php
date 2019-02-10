<?php
// model
//tag function

class Tag extends Model {

  private $name;
  private $id;
  private $list_tags = [];
  private $ids = [];
  private $post;
  private $page;
  private $itemsforpage = 20;


  //s e t e r s
  public function set_name($name){
    $this->name = $this->prepare($name);
  }
  public function set_id($id){
    $this->id =  (int) $id;
  }
  public function set_post($idpost){
    $this->post =  (int) $idpost;
  }
  public function set_tags($list_tags){
    foreach ($list_tags as $value) {
      array_push($this->list_tags, $this->prepare($value));
    }
  }
  public function set_ids($ids){
    $this->ids = $ids;
  }
  public function set_page($page){
    $this->page = $page;
  }


  //maptagList
  //entry listTga
  //verifica array existentes y obtiene id
  //muted: list_tags, $ids
  private function map(){
    $ids = [];
    $names = [];
    foreach ($this->list_tags as $tag) {
      $result = $this->Connect->fetch("SELECT id FROM tags WHERE name = '$tag' LIMIT 1");
      $result ? array_push($ids, (int) $result['id']) : array_push($names, $tag);
    }
    $this->list_tags = $names;
    $this->ids = $ids;
  }


  //crear nuevas etiquetas
  //entry: $this->list_tags
  //muted: $this->ids concat
  private function create (){
    if(empty($this->list_tags)) return false;
    foreach ($this->list_tags as $tag_name) {
      $id_tag = $this->Connect->create("INSERT INTO tags (name) VALUES ('$tag_name')");
      array_push($this->ids, $id_tag);
    }
  }

  //convierte tagnam => id y si no existe crea en la BD
  //entry [tagname]
  //return: ids
  public function convert_tag(){
    $this->map();
    $this->create();
    return $this->ids;
  }


  //crea relaciones tag=>post en bad
  //entry: [ids] = $this->ids && idpost
  //return state
  public function create_relation(){
    foreach ($this->ids as  $id) {
      $this->Connect->create("INSERT INTO relation_tag (tag, post) VALUES ($id, $this->post)");
    }
    return true;
  }

  //obtiene lista de posts
  //entry $this->page
  //return [items]
  public function get_list(){
    $this->Connect->set_list(true);
    $initialfetch = (($this->page - 1) * $this->itemsforpage);
    $tags = $this->fetch("SELECT * FROM tags ORDER BY name ASC LIMIT $initialfetch, $this->itemsforpage ");
    return $tags;
  }

  //obtiene total de tags
  //entry: empty
  //return totalitems;
  public function get_total_items(){
    $count = $this->fetch("SELECT id FROM tags");
    return $count ? count($count) : 0;
  }

  //total de paginas
  //entry none
  //return: total pages
  public function get_pages(){
    $count = $this->get_total_items();
    if (!$count) return 0;
    $count = ($count / $this->itemsforpage);
    return (int) ceil($count);
  }

  //obtiene el id
  //input tag name
  //output tag id
  public function get_id (){
    $id = $this->Connect->fetch("SELECT id FROM tags WHERE name = '$this->name' LIMIT 1");
    return $id ? (int) $id['id'] : false;
  }
}
