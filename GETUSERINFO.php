<?php
// getUserInfo.php

// Function to establish a database connection
function getConnection() {
    $host = 'localhost';
    $username = 'your_username';
    $password = 'your_password';
    $database = 'platforma_prosforwn';

    $connection = new mysqli($host, $username, $password, $database);
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    return $connection;
}

// API endpoint to retrieve user information
if (isset($_GET['username'])) {
    $username = $_GET['username'];

    // Sanitize the username to prevent SQL injection (better use prepared statements in production)
    $sanitizedUsername = htmlspecialchars($username);

    $connection = getConnection();

    $query = "SELECT * FROM user WHERE username = '$sanitizedUsername'";

    $result = $connection->query($query);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        echo json_encode($user);
    } else {
        header("HTTP/1.0 404 Not Found");
        echo json_encode(array("error" => "User not found"));
    }

    $connection->close();
} else {
    header("HTTP/1.0 400 Bad Request");
    echo json_encode(array("error" => "Missing username parameter"));
}
?>