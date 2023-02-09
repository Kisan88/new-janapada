
<?php


// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];


// Insert the new user into the database
$sql = "INSERT INTO users (username, email, password)
VALUES ('$username', '$email', '$password')";

if (mysqli_query($conn, $sql)) {
  include("/client/pages/flogin.html");
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>
