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
	
	$alertid = $_POST['alertid'];
	
	$sql= "UPDATE GPSRecord set error_read = 't' WHERE id='$alertid'";
	mysql_query ($sql) or die('Invalid query: ' . mysql_error());
	echo 'S'
?>