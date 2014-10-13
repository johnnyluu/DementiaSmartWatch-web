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
	
	$deviceid = $_POST['deviceid'];
	
	$sql= "DELETE FROM patients WHERE device_id='$deviceid'";
	mysql_query ($sql) or die('Invalid query: ' . mysql_error());
	echo 'S'
?>