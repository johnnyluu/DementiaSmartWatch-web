<?php
session_start();

	$dbhost = 'localhost';
	$dbuser = 'agile';
	$dbpass = 'agile';
	$db = 'agile';
	
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($db);
	if (!$conn) {
	die('Not connected : ' . mysql_error());
	}
	
	$sql= "UPDATE GPSRecord set error_read = 't' WHERE Error_Code != 0 && error_read = 'f'";
	mysql_query ($sql) or die('Invalid query: ' . mysql_error());
	echo 'S'
?>