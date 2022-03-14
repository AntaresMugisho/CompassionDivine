<?php

if (isset($_POST["message"])){

    $to = "antaresmugisho@gmail.com";
    $subject = "Ceci est le sujet du message.";
    $message = "Message envoyé via le formulaire de contact du site exemplesite.com
    Nom : " . $_POST["name"] . "
    E-mail : ". $_POST["email"] . "
    Message : " . $_POST["message"];

    $retour = mail($to, $subject, $message, "From:contact@exemplesite.com" . "\r\n" . "Reply-to:" . $_POST["email"]);

    if ($retour){
        echo "Message envoyé avec suscès"
    }
    esle{
        echo "Erreur d'envoie"
    }

}









?>
    
</body>
</html>

