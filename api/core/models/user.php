<?php
// users obgetc

class User extends Model {

  // properties
  private $id;
  private $name;
  private $username;
  private $mail;
  private $password;
  private $genero;
  private $state = 'inactive';
  private $type = 'user';
  private $picture = 'non_picture.png';
  private $token = '';
  private $meta = '{}';


  //seters
  public function set_id($idnumber){
    $this->id = (int) $idnumber;
  }
  public function set_name($name){
    $this->name = $this->prepare($name);
  }
  public function set_username($userName){
    $this->username = $this->prepare($userName);
  }
  public function set_mail($mail){
    $this->mail = $this->prepare($mail);
  }
  public function set_password($password){
    $this->password = $this->prepare($password);
  }
  public function set_genero($genero){
    $this->genero = $this->prepare($genero);
  }
  public function set_state($state){
    $this->state = $this->prepare($state);
  }
  public function set_type($type){
    $this->type = $this->prepare($type);
  }
  public function set_picture($picture){
    $this->picture = $this->prepare($picture);
  }
  public function set_token($token){
    $this->token = $this->prepare($token);
  }
  public function set_meta($meta){
    $this->meta = $this->prepare($meta);
  }


  //functions
  public function create(){
    $sql = "INSERT INTO users (name, username, mail, password, genero, date, state, type, picture, token, meta) values ('$this->name', '$this->username', '$this->mail', '$this->password', '$this->genero', '$this->date', '$this->state', '$this->type', '$this->picture', '$this->token', '$this->meta')";
    $state = $this->Connect->create($sql);
    return $state;
  }


  //verifica diponibilidad de correo
  //entry: mail
  //return: true || false
  public function available_mail() {
    $exist = $this->Connect->fetch("SELECT id FROM users WHERE mail = '$this->mail' LIMIT 1");
    return $exist
    ? false : true;
  }

  //verifica disponibilidad de username mb_encoding_alias
  //entry: username
  //return true || false
  public function available_username() {
    $exist = $this->Connect->fetch("SELECT id FROM users WHERE username = '$this->username' LIMIT 1");
    return $exist
    ? false : true;
  }


  //obtener los datos de un usuario
  //entry:: $this->idea
  //output:: [data...] || false;
  public function get_single(){
    $user = $this->Connect->fetch("SELECT * FROM users WHERE id = $this->id LIMIT 1");
    if (!$user) return false;
    $user['meta'] = json_decode($user['meta'], true);
    $user['id'] = (int) $user['id'];
    return $user;
  }


  //cerra session
  //entry id
  //retus state
  public function logout(){
    $status = $this->Connect->set("UPDATE users set token = '', meta = '{}' WHERE id = $this->id LIMIT 1");
    return $status;
  }

}
