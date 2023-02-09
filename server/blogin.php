<?php

// Connect to the database
$host = "localhost";
$user = "root";
$password = "";
$dbname = "users";

$conn = mysqli_connect($host, $user, $password, $dbname);



    // Get the form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and execute the SQL statement
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    // Check if the query returned a result
    if (mysqli_num_rows($result) > 0) {
        echo "Logged in correctly as $username";
        include("/client/pages/index.html");
    } else {
        // Login failed
        echo "Incorrect username or password";
    }


?>