<?php
/*
 archivo shared
 constructor de url
 covierte string a formato url
*/
function url_construct($str){

   $str = trim($str);
   $str = strtolower($str);

   $str = str_replace(' ', '-', $str);
   $str = str_replace(
       array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'),
       array('a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A'),
       $str
   );
   $str = str_replace(
       array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
       array('e', 'e', 'e', 'e', 'E', 'E', 'E', 'E'),
       $str
   );
   $str = str_replace(
       array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
       array('i', 'i', 'i', 'i', 'I', 'I', 'I', 'I'),
       $str
   );
   $str = str_replace(
       array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
       array('o', 'o', 'o', 'o', 'O', 'O', 'O', 'O'),
       $str
   );
   $str = str_replace(
       array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
       array('u', 'u', 'u', 'u', 'U', 'U', 'U', 'U'),
       $str
   );
   $str = str_replace(
       array('ñ', 'Ñ', 'ç', 'Ç'),
       array('n', 'N', 'c', 'C',),
       $str
   );
   $str = str_replace(
       array("\\","¨", "º", "~",
            "#", "@", "|", "!",
            "$", "%", "&", "/",
            "(", ")", "?", "'", "¡",
            "¿", "[", "^", "<code>", "]",
            "+", "}", "{", "¨", "´",
            ">", "< ", ";", ",", ":",
           "`", "\"", "=", "¬"),
       '',
       $str
   );
   return $str;
 }

?>
