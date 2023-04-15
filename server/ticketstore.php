<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "janapada";

  $conn = mysqli_connect($servername, $username, $password, $dbname);
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  $eventDate = $_POST['eventDate'];
  $eventTime = $_POST['eventTime'];
  $numberOfPeople = $_POST['numberOfPeople'];
  $organizationName = $_POST['organizationName'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];


  // Insert the new user into the database
  $sql = "INSERT INTO ticket (date, time, no_of_people, name, phone_no, email)
  VALUES ('$eventDate', '$eventTime', '$numberOfPeople', '$organizationName', '$phone', '$email')";

  if (mysqli_query($conn, $sql)) {
    include("ticket.php");
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  mysqli_close($conn);
?>
