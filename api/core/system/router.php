<?php
/*
*
*/
class Router {
  private $routes = [];  // totas las rutas definidas
  private $request;      // objeto request

  public function __construct(){
    $request = strtolower($_GET['params']);
    $this -> request = $this -> mapRequest($request);
  }

  //verifica si existen parametros en la url
  private function paramsRouteVerific ($route){
    $routepart = explode('/',$route);
    foreach ($routepart as $routepartUnique) {
      if (preg_match('/^:[a-zA-Z]+$/',$routepartUnique)) return true;
    }
    return false;
  }
  private function mapRequest ($request){
    return [
      'path' => '/'.$request,
      'parts' => explode('/',$request),
      'method' => $_SERVER['REQUEST_METHOD'],
    ];
  }
  private function mapRoute($route, $controllerName, $method){
    return  [
      'path' => $route,
      'parts' => explode('/',substr($route, 1)),
      'method' => $method,
      'controllerName' => $controllerName,
      'params' => $this -> paramsRouteVerific(substr($route, 1))
    ];
  }
  private function verific(){
    foreach ($this -> routes as $route) {
      if ($route['method'] === $this->request['method'] && count($this->request['parts']) === count($route['parts'])){
        $result = $route['params'] ? $this->paramsMatch($route) : $this->simpleMatch($route);
        if ($result) return ['controllerName' => $route['controllerName'], 'path' => $route['path']];
      }
    }
    return false;
  }
  private function extractParams($route){
    $routeparts = explode('/',substr($route, 1));
    $params = [];
    foreach ($routeparts as $key => $uniquePart) {
      if (preg_match('/^:[a-zA-Z]+$/',$uniquePart)){
        $namePart = str_replace(':', '' , $uniquePart);
        $params = array_merge($params, [$namePart => $this->request['parts'][$key]]);
      }
    }
    return $params;
  }
  private function routeNotFound(){
    $response = [
      'error' => true,
      'errorCode' => 404,
      'errorDescript' => 'Error 404 pagina no encontrado',
    ];
    echo json_encode($response);
  }

  //verificadores de match
  private function simpleMatch($route){
    return $route['path'] === $this->request['path'] ? true : false;
  }
  private function paramsMatch($routeparts){
    // recorrer parametros unicos y retornar false cuando no haya conicidencias
    foreach ($routeparts['parts'] as $key =>  $uniquepattern) {
      if (preg_match('/^:[a-zA-Z]+$/',$uniquepattern)){
        if (!preg_match('/^[[:digit:]]+$/',$this->request['parts'][$key])){
          return false;
        }
      } else {
        if ($uniquepattern != $this->request['parts'][$key]) return false;
      }
    }
    return true;
  }

  # Funciones publicas para definir rutas
  public function get ($route, $controllerName){
    array_push($this -> routes, $this -> mapRoute($route, $controllerName, 'GET'));
  }
  public function post ($route, $controllerName){
    array_push($this -> routes, $this -> mapRoute($route, $controllerName, 'POST'));
  }

  #iniciar controlador
  public function instanceController($controllerName, $params = false){
    $controller = new $controllerName($params);
    $controller -> execute();
  }

  # encargado de ejecutar funcion
  public function dispatch(){
    $resulRoute = $this -> verific(); //false = 404

    if (!$resulRoute) return $this -> routeNotFound();

    $paramsExist = $this -> paramsRouteVerific($resulRoute['path']); // verifica si existen parametros
    if ($paramsExist) {
      $params = $this->extractParams($resulRoute['path']);
      $this->instanceController($resulRoute['controllerName'],$params);
    } else {
      $this->instanceController($resulRoute['controllerName']);
    }
  }
}
