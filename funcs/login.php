<?php
session_start();
//login
require("db.php");
header('Access-Control-Allow-Origin: *');
$_POST = json_decode(file_get_contents('php://input'), true);

if (!empty($_POST["password"]) && !empty($_POST["username"])) {

        
		if ($conn = mysqli_connect($host, $user, $password, $DB)) {
        
			$username = stripslashes($_POST['username']);
			$username = mysqli_real_escape_string($conn, $username);
			$password = stripslashes($_POST['password']);
			$password = mysqli_real_escape_string($conn, $password);

	      $query    = "SELECT email FROM `Utenti` WHERE username='$username'
                     AND password='" . md5($password) . "'";

		if ($result = mysqli_query($conn, $query)) {
			if (mysqli_num_rows($result) > 0) {
				$_SESSION["login"]="ok";
                echo json_encode("ok");
				} else {
				  	echo json_encode("not_exists");

				}
			} else {

              echo json_encode("connection_error");

			}
		} else {
          echo json_encode("connection_error");

		}
		}else {
         echo json_encode("connection_error");

		}
