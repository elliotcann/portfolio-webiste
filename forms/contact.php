<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = 'smtp.elliotcann.com'; // Replace with your SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'me@elliotcann.com'; // Replace with your email
            $mail->Password = 'I)8.RefHjg~j'; // Replace with your email password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Sender and recipient settings
            $mail->setFrom('me@elliotcann.com', 'Elliot Cann'); // Replace with your email
            $mail->addAddress('me@elliotcann.com', 'Elliot Cann'); // Replace with your email
            $mail->addReplyTo($email, $name);

            // Email content for you
            $mail->isHTML(true);
            $mail->Subject = "New Contact Form Submission: $subject";
            $mail->Body = "
                <h3>New message from your website:</h3>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
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