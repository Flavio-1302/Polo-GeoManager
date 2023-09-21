<?php
	require("db.php");
        header('Access-Control-Allow-Origin: *');
	$conn = mysqli_connect($host, $user, $password, $DB);

			$query    = "SELECT * FROM `Punti`";
    
     	if ($result = mysqli_query($conn, $query)) {
			if (mysqli_num_rows($result) > 0) {
        		while($row = mysqli_fetch_assoc($result)){
                $response[] = $row;
                }
                            echo json_encode($response);

                
			} 
		} else {

		}
        
		mysqli_close($conn);
?>