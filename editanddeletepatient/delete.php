<?php
session_start();

	$dbhost = 'localhost';
	$dbuser = 'creativ4_5022163';
	$dbpass = 'xyz512612';
	$db = 'creativ4_agile';
	
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($db);
	if (!$conn) {
	die('Not connected : ' . mysql_error());
	}
	
	$patientid = $_POST['patientid'];
	
	$sql= "DELETE FROM patients WHERE patientid='$patientid'";
	mysql_query ($sql) or die('Invalid query: ' . mysql_error());
	echo 'S'
?>