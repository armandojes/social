<?php
//upload miniature
//path: /picture/uploadminiature

class Upload_miniature extends Controller {

  public function execute(){

    $Picture = new Picture();
    $Picture->set_rezise(300,300);

    $url = $Picture->upload($_FILES['picture']);

    if ($url) {
      $response = [
        'error' => false,
        'status' => 'ok',
        'url' => $url,
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
