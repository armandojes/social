<?php

function convert_date($date){
  $actual_date = time();

  $diference = $actual_date - $date;

  if ($diference < 3600){
    $minuts = (int) round($diference / 60);
    return 'hace ' . $minuts .( $minuts > 1 ? ' minutos' : ' minuto');
  } else if ($diference < 86400){
    $hours = (int) round($diference / 3600);
    return 'hace ' . $hours . ( $hours > 1 ? ' horas' : ' hora');
  } else if ($diference < 2592000){
    $days = (int) round($diference / 86400);
    return 'hace ' . $days . ( $days > 1 ? ' dias' : ' dia');
  }
  $mount = (int) round($diference / 2592000);
  return 'hace ' . $mount . ( $mount > 1 ? ' meses' : ' mes');
}
