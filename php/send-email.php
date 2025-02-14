<?php
header('Content-Type: application/json');

// Initialize response array
$response = ['success' => false, 'message' => ''];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data from POST request
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $phone_number = filter_var($_POST['phone_number'], FILTER_SANITIZE_STRING);
    $message_text = filter_var($_POST['message_text'], FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Invalid email address.';
        echo json_encode($response);
        exit();
    }

    // Set up email parameters
    $to = 'manager@steradianautomation.com';
    $subject = 'Message from ' . $name;
    $message = "Phone number: " . $phone_number . "\n\n" . $message_text;
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        $response['success'] = true;
        $response['message'] = 'Email sent successfully.';
    } else {
        $response['message'] = 'Failed to send email.';
    }
} else {
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);
?>
