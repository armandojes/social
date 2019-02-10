<?php
// model category

class Category extends Model {
  private $name;
  private $id;
  private $url;

  //S E T T E R S
  public function set_url ($url){
    $this->url = $this->prepare($url);
  }
  public function set_name ($name){
    $this->name = $this->prepare($name);
  }
  public function set_id ($id){
    $this->id = (int) $id;
  }

  //obtener lista de cateorias
  //input: null
  //output: [...category]
  public function get_list(){
    $this->Connect->set_list();
    $data = $this->Connect->fetch("SELECT * FROM category ORDER BY name");
    return $data;
  }


  //obtiene datos de una categoria
  //input: url Category
  //out: {data}
  public function get_data (){
    $category = $this->Connect->fetch("SELECT * FROM category WHERE url = '$this->url' LIMIT 1");
    return $category;
  }
}
