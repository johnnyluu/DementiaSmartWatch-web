<?php
	$dbhost = 'localhost';
	$dbuser = 'agile';
	$dbpass = 'agile';
	$db = 'agile';
	
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($db, $conn);

	// $data = file_get_contents("php://input");
	// $objData = json_decode($data);
	// echo $objData;
	$username = '1234';
	$password= '1234';
	
$sql="SELECT * FROM users WHERE username='$username' and password='$password'";
$result = mysql_query ($sql);

 if (!$result) { 
    die('Invalid query: ' . mysql_error());
} 

$count=mysql_num_rows($result);
if ($count==1) {
    echo "Success!";
} else {
	echo $username;
	echo $password;
	echo $status;
    echo '<script>alert("Incorrect username or password!")</script>';
}



?>