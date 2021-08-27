<?php

// Calling fields

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$description = $_POST['description'];

// Data for the mail

$destiny = "franborgiani2003@gmail.com";
$asunto = "Contacto Desde francoborgiani.codes";

$carta = "De: $nombre \n";
$carta .= "Correo: $email";
$carta .= "Motivo: $subject";
$carta .= "Descripción: $description";

// Enviendo mensaje

mail($destiny, $asunto, $carta);
header('location:send.html')

?>