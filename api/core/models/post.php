<?php
//post model

class Post extends Model {

  private $id;
  private $title;
  private $picture;
  private $meta = '{}';
  private $content;
  private $category;
  private $tags;
  private $tag;
  private $tagnames;
  private $url;
  private $user;
  private $itemsforpage = 20;
  private $page = 1;
  private $saved;

  // s e t e r s
  public function set_id ($id){
    $this->id = (int) $id;
  }
  public function set_saved ($saved){
    $this->saved = (int) $saved;
  }
  public function set_tag ($tag){
    $this->tag = (int) $tag;
  }
  public function set_page ($page){
    $this->page = (int) $page;
  }
  public function set_title ($title){
    $this->title = $this->prepare($title);
  }
  public function set_picture ($pictureurl){
    $this->picture = $pictureurl;
  }
  public function set_meta ($meta){
    $this->meta = $this->prepare($meta);
  }
  public function set_content ($content){
    $this->content = $this->prepare($content);
  }
  public function set_category ($category){
    $this->category = (int) $category;
  }
  public function set_tags ($tags){
    $this->tags = $tags;
  }
  public function set_url ($url){
    $this->url = $this->prepare($url);
  }
  public function set_user ($userid){
    $this->user = (int) $userid;
  }


  //convierte tag_name => id_tags
  //entry [$this->tags]
  //mutted: [$this->tags]
  private function convert_tags(){
    $Tag = new Tag();
    $Tag->set_tags($this->tags);
    $this->tags = $Tag->convert_tag();
  }

  //inserta nuevo post bd
  // entry: {...this->date}
  // set_this->id; return state;
  private function insert(){
    $id = $this->Connect->create("INSERT INTO posts (title, category, content, picture, user, date, meta) values ('$this->title', '$this->category', '$this->content', '$this->picture', $this->user, '$this->date', '$this->meta')");
    $this->id = (int) $id;
    return $id;
  }

  //actualiza la url del post
  //entry: $this->$title
  //mutted $this->url
  private function update_url(){
    $this->url = url_construct($this->title);
    $this->url = $this->id.'-'.$this->url;
    $this->Connect->set("UPDATE posts SET url = '$this->url' WHERE id = $this->id LIMIT 1");
  }

  //crea relaciones tag => post
  private function create_relation_tag(){
    $Tag = new Tag();
    $Tag->set_ids($this->tags);
    $Tag->set_post($this->id);
    $Tag->create_relation();
  }


  private function create_meta(){
    $meta = [];
    $User = new User();
    $User->set_id($this->user);
    $user_date = $User->get_single();
    $meta['name'] = $user_date['name'];
    $meta['username'] = $user_date['username'];
    $meta['tags'] = $this->tags;
    $this->meta = json_encode($meta);
  }


  //delete relation tags
  //entry: id_tags and id post
  //return status
  private function clean_tags(){
    $status = $this->Connect->set("DELETE FROM relation_tag WHERE post = $this->id");
    return $status;
  }

  //crea un nuevo Post
  //entry [...this->data
  //return url post
  public function create(){
    $this->create_meta();
    $this->convert_tags();
    $this->insert();
    $this->update_url();
    $this->create_relation_tag();
    return $this->url;
  }


  //actualizar datos de post
  //entry [...this->data
  //return url post
  public function update(){
    $this->create_meta();
    $this->clean_tags();
    $this->convert_tags();
    $this->create_relation_tag();
    $sql = "UPDATE posts SET title = '$this->title', category = $this->category, content = '$this->content',  picture = '$this->picture', meta = '$this->meta' WHERE id = $this->id LIMIT 1";
    $status = $this->Connect->set($sql);
    return $status;
  }

  //obtienes lista de posts
  //entry: $this->page
  //return posts || false
  public function get_list(){
    $this->set_list(true);
    $initialfetch = (($this->page - 1) * $this->itemsforpage);
    $posts = $this->fetch("SELECT id, title, picture, category,url, meta date FROM posts ORDER BY id DESC LIMIT $initialfetch, $this->itemsforpage ");
    return $posts;
  }

  //obtiene total de posts
  //entry: empty
  //return totalitems;
  public function get_total_items(){
    $count = $this->fetch("SELECT id FROM posts");
    return $count ? count($count) : 0;
  }

  //total de paginas
  //entry none
  //return: total pages avalaible
  public function get_total_pages(){
    $count = $this->get_total_items();
    if (!$count) return 0;
    $count = ($count / $this->itemsforpage);
    return (int) ceil($count);
  }
  //obtienes lista de posts de una categoria
  //entry: $this->page, $this->category
  //return posts || false
  public function get_list_category(){
    $this->set_list(true);
    $initialfetch = (($this->page - 1) * $this->itemsforpage);
    $posts = $this->fetch("SELECT id, title, picture, category,url, meta date FROM posts WHERE category = $this->category ORDER BY id DESC LIMIT $initialfetch, $this->itemsforpage ");
    return $posts;
  }

  //obtiene total de posts
  //entry: empty
  //return totalitems;
  public function get_total_items_category(){
    $count = $this->fetch("SELECT id FROM posts WHERE category = $this->category");
    return $count ? count($count) : 0;
  }

  //total de paginas
  //entry none
  //return: total pages avalaible
  public function get_total_pages_category(){
    $count = $this->get_total_items_category();
    if (!$count) return 0;
    $count = ($count / $this->itemsforpage);
    return (int) ceil($count);
  }

  //obtienes lista de posts guardados
  //entry: $this->page, id_user
  //return posts || false
  public function get_list_saved(){
    $this->set_list(true);
    $initialfetch = (($this->page - 1) * $this->itemsforpage);
    $posts = $this->fetch("SELECT saved.id, posts.title, posts.picture, posts.category, posts.url, posts.meta FROM saved INNER JOIN posts ON saved.post_id = posts.id WHERE saved.user_id = $this->user ORDER BY saved.id DESC LIMIT $initialfetch, $this->itemsforpage ");
    return $posts;
  }

  //obtiene total de posts guadados
  //entry: user_id
  //return totalitems;
  public function get_total_items_saved(){
    $count = $this->fetch("SELECT id FROM saved WHERE user_id = $this->user");
    return $count ? count($count) : 0;
  }

  //total de paginas guardados
  //entry user
  //return: total pages avalaible
  public function get_total_pages_saved(){
    $count = $this->get_total_items_saved();
    if (!$count) return 0;
    $count = ($count / $this->itemsforpage);
    return (int) ceil($count);
  }
  //obtienes lista de posts en categoria
  //entry: $this->page, id_tag
  //return posts || false
  public function get_list_tag(){
    $this->set_list(true);
    $initialfetch = (($this->page - 1) * $this->itemsforpage);
    $posts = $this->fetch("SELECT posts.id, posts.title, posts.picture, posts.category, posts.url, posts.meta FROM relation_tag INNER JOIN posts ON relation_tag.post = posts.id WHERE relation_tag.tag = $this->tag ORDER BY posts.id DESC LIMIT $initialfetch, $this->itemsforpage ");
    return $posts;
  }

  //obtiene total de posts en etiquetas
  //entry: user_id, tag_id
  //return totalitems;
  public function get_num_items_tag(){
    $count = $this->fetch("SELECT id FROM relation_tag WHERE tag = $this->tag");
    return $count ? count($count) : 0;
  }

  //total de paginas en etiquetas
  //entry total_posts
  //return: total pages avalaible
  public function get_num_pages_tag(){
    $count = $this->get_num_items_tag();
    if (!$count) return 0;
    $count = ($count / $this->itemsforpage);
    return (int) ceil($count);
  }

  //obtienes lista de posts de un usuario
  //entry: $this->page, $this->user
  //return posts || false
  public function get_list_user(){
    $this->set_list(true);
    $initialfetch = (($this->page - 1) * $this->itemsforpage);
    $posts = $this->fetch("SELECT id, title, picture, category,url, meta date FROM posts WHERE user = $this->user ORDER BY id DESC LIMIT $initialfetch, $this->itemsforpage ");
    return $posts;
  }

  //obtiene total de posts de un usuario
  //entry: $this->username
  //return totalitems;
  public function get_total_items_user(){
    $count = $this->fetch("SELECT id FROM posts WHERE user = $this->user");
    return $count ? count($count) : 0;
  }

  //total de paginas de un usuario
  //entry $this->user
  //return: total pages avalaible
  public function get_total_pages_user(){
    $count = $this->get_total_items_user();
    if (!$count) return 0;
    $count = ($count / $this->itemsforpage);
    return (int) ceil($count);
  }


  //get single post
  //entry $this->id,
  //return post_data
  public function get_single(){
    $post_data = $this->fetch("SELECT * FROM posts WHERE id = $this->id LIMIT 1");
    if (!$post_data) return false;
    $post_data['meta'] = json_decode($post_data['meta'],true);
    return $post_data;
  }

  //verifica si un post esta guardado
  //entry: [userid,postid]
  // output true || false
  public function is_saved(){
    $state = $this->Connect->fetch("SELECT id FROM saved WHERE post_id = $this->id AND user_id = $this->user LIMIT 1");
    return $state;
  }


  // guardar un post en favoritos
  //entry $this->user, $this->id,
  //return true || false
  public function save (){
    $status = $this->Connect->create("INSERT INTO saved (user_id, post_id, meta) VALUES ($this->user, $this->id, '$this->meta')");
    return $status;
  }


  //obtiene el titulo del post
  //entry $this->id
  //muted $this->title, return title;
  public function get_title(){
    $status = $this->Connect->fetch("SELECT title FROM posts WHERE id = $this->id LIMIT 1");
    if ($status){
      $this->set_title($status['title']);
      return $status['title'];
    }
    return false;
  }

  // borrar post
  // entry: id
  // return  true || false
  public function delete(){
    $status = $this->Connect->set("DELETE FROM posts WHERE id = $this->id LIMIT 1");
    return $status;
  }

  //borrar post guardado
  //entry: $this->user, $this->id
  public function delete_save(){
    $status = $this->Connect->set("DELETE FROM saved WHERE id = $this->saved LIMIT 1");
    return $status;
  }
}
