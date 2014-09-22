
<?php
	$dbhost = 'localhost';
	$dbuser = 'agile';
	$dbpass = 'agile';
	$db = 'agile';
	
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($db);

	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$sql="SELECT * FROM users WHERE username='$username' and password='$password'";
	$result = mysql_query ($sql) or die('Invalid query: ' . mysql_error());;

	$count = mysql_num_rows($result);
	if ($count) {
	    // echo "S";
	    echo $_SESSION[$username] = $username;
	} else {
		echo "F";
	}



?>