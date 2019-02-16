<?php
//test controller
// get:: /test



class Test extends controller {
  public function execute(){
    var_dump($this->data);
  }
};
