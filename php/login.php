<?php

var_dump($_POST);

$usuario = $_POST['username'];
$password = $_POST['password'];

echo "usuario: {{$usuario}}, contraseña: {{$password}}";


?>