<?php

// email address
/*$to = 'spehric.zoo@gmail.com'; //вставить свой имейл gans@martens.ru*/
$to = 'vaddhol@yandex.ru'; //вставить свой имейл gans@martens.ru

$subject = 'Бронирование';
$name = htmlspecialchars($_POST['user-name-booking']);
$email = htmlspecialchars($_POST['user-email-booking']);
$phone = htmlspecialchars($_POST['user-phone-booking']);
$checkin = htmlspecialchars($_POST['checkin-booking']);
$checkout = htmlspecialchars($_POST['checkout-booking']);
$adult = htmlspecialchars($_POST['guests-adult-booking']);
$infant = htmlspecialchars($_POST['guests-infant-booking']);
$from = $email; //отправитель

$message = "Имя: $name<br>\r\n";
$message .= "Email: $email<br>\r\n";
$message .= "Телефон: $phone<br>\r\n";
$message .= "Дата заезда: $checkin<br>\r\n";
$message .= "Дата выезда: $checkout<br>\r\n";
$message .= "Взрослые: $adult<br>\r\n";
$message .= "Дети до 2-х лет: $infant<br>\r\n";

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
