<?php
/*
  module encragdo de mani`pulas imagens
*/
class Picture {
  private $year;
  private $mes;
  private $name;
  private $type;
  private $temp;
  private $path;
  private $public_path;
  private $alto;
  private $ancho;
  private $rezise = false;


  private function rezise(){
    $imageXY = getimagesize($this->path);
    $imageName = explode("/",$this->path);
    $imageName = end($imageName);
    $imageType = $imageXY['mime'];
    $newImage = imagecreatetruecolor($this->ancho,$this->alto);
    $srcAlto = $imageXY['1'];
    $srcAncho = $imageXY['0'];


    switch ( $imageType ){
      case "image/jpg":
      case "image/jpeg":
        $srcImagen = imagecreatefromjpeg( $this->path );
        break;
      case "image/png":
        $srcImagen = imagecreatefrompng( $this->path );
        break;
      case "image/gif":
        $srcImagen = imagecreatefromgif( $this->path );
        break;
    }


    imagecopyresampled($newImage, $srcImagen, 0, 0, 0, 0, $this->ancho, $this->alto, $srcAncho, $srcAlto);
    imagepng( $newImage, $this->path);
    imagedestroy($newImage);
    imagedestroy($srcImagen);

    return True;
  }

  public function __construct(){
    //crear carpetas segun fecha
    $this->year = date("Y");
    $this->mes = date("m");
    !file_exists("../public/$this->year") ? mkdir("../public/$this->year", 0755) : null;
    !file_exists("../public/$this->year/$this->mes") ? mkdir("../public/$this->year/$this->mes", 0755) : null;
  }


  public function upload ($picture){
    $this->name = strlen($picture['name']) > 30 ?  substr($picture['name'], -30) : $picture['name']; //cortar nombre
    $this->name = url_construct(rand(1,9999).'__'.$this->name); //crear url base nombre
    $this->type = $picture['type'];
    $this->temp = $picture['tmp_name'];
    $this->set_path();


    //verificar tipo de imagen
    if ($this->type != 'image/jpg' && $this->type != 'image/png' && $this->type != 'image/jpeg' && $this->type != 'image/gif'){
      return false;
    }

    //mover imagen
    move_uploaded_file($this->temp, $this->path);

    //redimencionar
    if($this->rezise) $this->rezise();

    return $this->public_path;
  }

  public function set_rezise($ancho, $alto){
    $this->ancho = $ancho;
    $this->alto = $alto;
    $this->rezise = true;
  }

  //set path
  //input: relative path public/{relativepath}
  //crea path y public_path
  private function set_path(){
    $this->path = "../public/$this->year/$this->mes/$this->name";
    $this->public_path = "public/$this->year/$this->mes/$this->name";
  }
}
