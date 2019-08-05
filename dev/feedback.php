<?php

// email address
/*$to = 'spehric.zoo@gmail.com'; //вставить свой имейл gans@martens.ru*/
$to = 'vaddhol@yandex.ru'; //вставить свой имейл gans@martens.ru

$subject = 'Сообщение с лендинга';
$name = htmlspecialchars($_POST['user-name']);
$email = htmlspecialchars($_POST['user-email']);
$comment = htmlspecialchars($_POST['user-message']);
$from = $email; //отправитель

$message = "Имя: $name<br>\r\n";
$message .= "Email: $email<br>\r\n";
$message .= "Сообщение: $comment<br>\r\n";
  
$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
$headers .= "From: $from\r\n";
$headers .= "X-Priority: 1\r\n";


$sentMail = mail($to, $subject, $message, $headers);
if($sentMail) //output success or failure messages
{ 
  echo 'done';
}else{
  echo 'error';
}
