<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $project = htmlspecialchars($_POST['project']);
    $message = htmlspecialchars($_POST['message']);
    
    // Configurações do e-mail
    $to = "neusiahilariomassingue@gmail.com"; // Substitua pelo e-mail de destino
    $subject = "Novo Contato do Projeto: " . $project;
    $body = "Nome: $name\n";
    $body .= "E-mail: $email\n";
    $body .= "Projeto: $project\n\n";
    $body .= "Mensagem:\n$message";
    $headers = "From: $email";
    
    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem.";
    }
}
?>
