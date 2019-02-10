<?php
//upload miniature
//path: /picture/uploadminiature

class Upload_image extends Controller {

  public function execute(){

    $Picture = new Picture();

    $url = $Picture->upload($_FILES['picture']);

    if ($url) {
      $response = [
        'error' => false,
        'status' => 'ok',
        'url' => DOMINE.'/'.$url,
      ];
    } else {
      $response = [
        'error' => true,
        'errorCode' => 505,
        'errorMessage' => 'Formato de imagen incorrecto!',
      ];
    }

    $this->response($response);
  }
}
