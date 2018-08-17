<?php

// collect data
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

// validate
if (empty($name) || empty($visitor_email)) {
    echo "Name and email are required!";
    exit;
}
$email_from = "$name";
$email_subject = "New Email submission";
$email_body = "$message";

$to = "solarchapterofficial@gmail.com";
$headers = "From: $email_from \r\n";

// send email
mail($to, $email_subject, $email_body, $headers);

// done, redirect to index.html
header('Location: index.html');
?>