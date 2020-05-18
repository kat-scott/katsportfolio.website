<?php

//set each input to variables
$name = filter_input(INPUT_GET, "name");
$email = filter_input(INPUT_GET, "email");
$sub = filter_input(INPUT_GET, "subject");
$message = filter_input(INPUT_GET, "message");
$myEmail = "scott.katherine.elizabeth@gmail.com";

//email goes to email provided through form
$to = $myEmail;

//subject
$subject = $sub;

//html for email
$html = <<<HERE
    <html>
        <head>
            <title>Inquiry</title>
        </head>
        <div style="color: #000; text-align: center; width: 600px; font-family: sans-serif;">
            <h2>Inquiry from katherineelizabethscott.com</h2>
            <h3>from: $email</h3>
            $message
        </div>
    </html>

HERE;

//html variable becomes message in email
$message = $html;

// To send HTML mail, the Content-type header must be set
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

// send email
mail($to, $subject, $message, $headers);

header("Location: index.html");
?>
