<?php
// seguridad del sitio

class Security extends Model {

  private $password;
  private $token;
  private $mail;
  private $id;
  private $passlook;
  private $User;

  public function __construct(){
    parent::__construct();

    $this->User = new User();
  }

  //seters
  public function set_password($password){
    $this->password = $this->prepare($password);
  }
  public function set_token($token){
    $this->token = $this->prepare($token);
  }
  public function set_mail($mail){
    $this->mail = $this->prepare($mail);
  }
  public function set_passlook($passlook){
    $this->passlook = $passlook;
  }
  public function set_id($id){
    $this->id = (int) $id;
  }

  //crear token
  //input: $this->password, $this->date
  //output: token
  public function create_token (){
    $token = md5($this->password.$this->date);
    $this->set_token($token);
    return $token;
  }

  //guardar token en BD
  //input:: $this->token, $this->mail
  //return true || false
  public function save_token(){
    $meta = json_encode(['date' => $this->date]);  //fecha de creacion de token
    $state = $this->Connect->set("UPDATE users SET token = '$this->token', meta = '$meta' WHERE mail = '$this->mail' LIMIT 1");
    return $state;
  }

  //funcion login
  //input: $this->password, $this->mail
  //output: [id, token, passloked, mail] || 'inactive' || false
  public function login (){
    $data = $this->Connect->fetch("SELECT id, mail, type, state, name, username FROM users WHERE password = '$this->password' and mail = '$this->mail' LIMIT 1");
    if (!$data) return false;
    if($data['state'] === 'active') {
      $this->create_token();
      $this->save_token();
      return [
        'id' => (int) $data['id'],
        'token' => $this->token,
        'passlook' => md5($this->password.MASTERKEY),
        'mail' => $this->mail,
        'type' => $data['type'],
        'name' => $data['name'],
        'username' => $data['username'],
      ];
    } else if ($data['state'] === 'inactive') {
      return 'inactive';
    }
  }


  public function login_token(){
    $this->User->set_id($this->id);
    $userdata = $this->User->get_single(); //usuario inexistente
    if (!$userdata) return false;//usuario inexistente
    $expiredSession = !empty($userdata['meta']['date']) ? $this->session_expided($userdata['meta']['date']) : false;
    if ($expiredSession) return false; // session expirado
    if ($this->token != $userdata['token']) return false; // token falso
    if ($this->passlook != md5($userdata['password'].MASTERKEY)) return false; //passlook falso
    return [
      'id' =>  $userdata['id'],
      'mail' =>  $userdata['mail'],
      'name' =>  $userdata['name'],
      'username' =>  $userdata['username'],
      'token' =>  $userdata['token'],
      'type' =>  "user",
    ];
  }

  //verifica session valido
  //entry: $sessiondate::param && $this->date
  //output: true::expired || false::noexpired
  private function session_expided($sessionDate){

    $diff = ($this->date - $sessionDate);
    $sessionLimit = 604800; // una semana;
    return ($diff > $sessionLimit) ? true : false;
  }

  //verificar usuario y toke valido
  //entry: $this->user && $this->token
  public function authorize(){
    $this->User->set_id($this->id);
    $userdata = $this->User->get_single();
    if (!$userdata) return false; //no existe usuario
    if ($userdata['token'] != $this->token) return false;
    return true;
  }

}
