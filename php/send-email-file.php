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

    // Handle file upload
    $uploadDir = 'uploads/'; // Directory to save uploaded files
    $uploadFile = isset($_FILES['file']) ? $uploadDir . basename($_FILES['file']['name']) : null;

    if ($uploadFile && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        // Ensure upload directory exists
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        // Move uploaded file to the designated directory
        if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
            $fileUploadStatus = 'File uploaded successfully.';
        } else {
            $response['message'] = 'Failed to move uploaded file.';
            echo json_encode($response);
            exit();
        }
    } elseif ($_FILES['file']['error'] !== UPLOAD_ERR_NO_FILE) {
        $response['message'] = 'File upload error.';
        echo json_encode($response);
        exit();
    } else {
        $fileUploadStatus = 'No file uploaded.';
    }

    // Set up email parameters
    $to = 'karim.babouri@steradianautomation.com';
    $subject = 'Message from ' . $name;
    $message = "Phone number: " . $phone_number . "\n\n" . $message_text;

    // Add file attachment if uploaded
    if (isset($uploadFile) && file_exists($uploadFile)) {
        $fileContent = file_get_contents($uploadFile);
        $fileName = basename($uploadFile);
        $boundary = md5(time());

        $headers = "From: " . $email . "\r\n" .
                   "Reply-To: " . $email . "\r\n" .
                   "X-Mailer: PHP/" . phpversion() . "\r\n" .
                   "MIME-Version: 1.0\r\n" .
                   "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

        $message = "--$boundary\r\n" .
                   "Content-Type: text/plain; charset=\"utf-8\"\r\n" .
                   "Content-Transfer-Encoding: 7bit\r\n\r\n" .
                   $message . "\r\n" .
                   "--$boundary\r\n" .
                   "Content-Type: application/octet-stream; name=\"$fileName\"\r\n" .
                   "Content-Transfer-Encoding: base64\r\n" .
                   "Content-Disposition: attachment; filename=\"$fileName\"\r\n\r\n" .
                   chunk_split(base64_encode($fileContent)) . "\r\n" .
                   "--$boundary--";

        // Send email with attachment
        if (mail($to, $subject, $message, $headers)) {
            $response['success'] = true;
            $response['message'] = 'Email sent successfully with file.';
        } else {
            $response['message'] = 'Failed to send email with file.';
        }

        // Clean up the uploaded file
        unlink($uploadFile);
    } else {
        // Send email without attachment
        $headers = "From: " . $email . "\r\n" .
                   "Reply-To: " . $email . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $message, $headers)) {
            $response['success'] = true;
            $response['message'] = 'Email sent successfully without file.';
        } else {
            $response['message'] = 'Failed to send email.';
        }
    }
} else {
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);
?>
