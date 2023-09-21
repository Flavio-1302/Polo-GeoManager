<?php

//registration
require("db.php");
header('Access-Control-Allow-Origin: *');
$_POST = json_decode(file_get_contents('php://input'), true);

if (!empty($_POST["username"]) && !empty($_POST["password"]) && !empty($_POST["email"]) && !empty($_POST["account"])) {
  if ($conn = mysqli_connect($host, $user, $pass, $DB)) {

    $username = stripslashes($_POST['username']);
    $username = mysqli_real_escape_string($conn, $username);

    $password = stripslashes($_POST['password']);
    $password = mysqli_real_escape_string($conn, $password);

    $email = stripslashes($_POST['email']);
    $email = mysqli_real_escape_string($conn, $email);

    if ($_POST['account'] == "ADMIN" || $_POST['account'] == "USER") {

      $account = $_POST['account'];

      $query = "SELECT username FROM Utenti WHERE username LIKE '$username'";
      if ($result = mysqli_query($conn, $query)) {
        if (mysqli_num_rows($result) < 1) {

          $query = "SELECT email FROM Utenti WHERE email='$email'";
          if ($result = mysqli_query($conn, $query)) {
            if (mysqli_num_rows($result) < 1) {


              $query = "
        INSERT INTO Utenti (username, password, email, ruolo)
        VALUES ('$username', '" . md5($password) . "', '$email', '$account')
        ";
              if (mysqli_query($conn, $query)) {

                echo json_encode("ok");
              } else {
                echo json_encode("connection_error");
              }
            } else {
              echo json_encode("account_exists");
            }
          } else {
            echo json_encode("connection_error");
          }
        } else {
          echo json_encode("username_taken");
        }
      } else {
        echo json_encode("connection_error");
      }
    } else {

      echo json_encode("connection_error");
    }
  } else {
    echo json_encode("connection_error");
  }

} else {
  echo json_encode("connection_error");
}
?>