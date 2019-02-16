<?php
function mail_template($id, $code){
  return '
    <!DOCTYPE html>
    <html lang="es" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body
      style="
        background-color: #eceef1;
        padding: 20px;
      "
      >
        <h1 style="
        text-align: center;
        color: #2196F3;
        font-size: 30px;">
          Confirma tu correo
        </h1>
        <div
        style="
        box-sizing: border-box;
        text-align: center;
        font-size: 20px;
        padding: 20px;
        background: #fff;
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        width: 100%;
        max-width: 300px;
        margin: 30px auto;
        line-height: 30px;"
        >
          <p>
            Gracias por registrarte! ahora formas parte de esta grandiosa comunidad, solo falta  activar tu cuenta, haz click en el siguente enlace para ctivar tu cuenta y confirmar tu correo!
          </p>
        </div>
        <a target="_blank" href="'.DOMINE."/activate/".$id.'/'.$code.'"
          style="
          display: block;
          margin: auto;
          width: 155px;
          background: #2196F3;
          font-size: 20px;
          text-align: center;
          padding: 5px;
          border-radius: 5px;
          color: #fff;
          text-decoration: none;
          "
        >
          Activar cuenta!
        </a>
      </body>
    </html>
  ';
}
