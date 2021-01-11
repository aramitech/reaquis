    
	    <?php
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "mobidb";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
	
	$query= "INSERT INTO request (fnames,email,phone) VALUES('My Text','','')";
	if(mysqli_query($conn, $query)){
		echo "Data has been saved";
	}
	else {
		echo "Error!";
	}
		
   exit();   
    ?>
	
	
	<?php
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "mobidb";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
        $sql = "INSERT INTO request (fnames, email)
            VALUES ('".$_POST['fnames']."', '".$_POST['email']."')";
        if (mysqli_query($conn,$sql)) {
        $data = array("data" => "You Data added successfully");
            echo json_encode($data);
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    ?>