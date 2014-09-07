<?php
	$dbhost = 'localhost';
	$dbuser = 'agile';
	$dbpass = 'agile';
	$db = 'agile';
	
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($db, $conn);


	$username = $_POST['user'];
	$password= $_POST['pass'];
	
$sql="SELECT * FROM account WHERE username='$username' and password='$password'";
$result = mysql_query ($sql);

 if (!$result) { 
    die('Invalid query: ' . mysql_error());
} 

$count=mysql_num_rows($result);
if ($count==1) {
    echo "Success!";
} else {
    echo '<script>alert("Incorrect username or password!")</script>';
}



?>