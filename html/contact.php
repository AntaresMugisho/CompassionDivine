<?php

    $to = "antaresmugisho@gmail.com";
    $subject = "Sujet";
    $message = wordwrap($message, 70, "\r\n");

    $retour = mail($to, "Sujet", "Message", "");

    if ($retour){
        echo "Message sent succesfully"
    }
    else{
        echo "Failed to send the mail"
    }

?>