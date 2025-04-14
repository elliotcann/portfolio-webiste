<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../assets/vendor/phpmailer/src/PHPMailer.php';
require __DIR__ . '/../assets/vendor/phpmailer/src/SMTP.php';
require __DIR__ . '/../assets/vendor/phpmailer/src/Exception.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    error_log("Form Data: Name=$name, Email=$email, Subject=$subject, Message=$message");

    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = 'mail.elliotcann.com'; // Replace with your SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'me@elliotcann.com'; // Replace with your email
            $mail->Password = 'I)8.RefHjg~j'; // Replace with your email password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;

            // Sender and recipient settings
            $mail->setFrom('me@elliotcann.com', 'Elliot Cann'); // Replace with your email
            $mail->addAddress('me@elliotcann.com', 'Elliot Cann'); // Replace with your email

            // Email content for you
            $mail->isHTML(true);
            $mail->Subject = "New Contact Form Submission: $subject";
            $mail->Body = "
                <h3>New message from your website:</h3>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
                <p><strong>Subject:</strong> $subject</p>
                <p><strong>Message:</strong><br>$message</p>
            ";

            $mail->send();

            // Send confirmation email to the sender
            $mail->clearAddresses();
            $mail->addAddress($email, $name);
            $mail->Subject = "Thank you for contacting me!";
            $mail->Body = "
                <h3>Hi $name,</h3>
                <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
                <p><strong>Your Message:</strong><br>$message</p>
                <p>Best regards,<br>Elliot Cann</p>
            ";

            $mail->send();

            echo json_encode(['status' => 'success', 'message' => 'Your message has been sent successfully!']);
        } catch (Exception $e) {
            echo json_encode(['status' => 'error', 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Please fill in all fields.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}

?>