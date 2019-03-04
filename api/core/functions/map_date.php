<?php
function map_date($item){
  $item['date'] = convert_date($item['date']);
  return $item;
}
