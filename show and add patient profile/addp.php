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
	
	$patientn = $_POST['patientnadd'];
	$divicei = $_POST['deviceiadd'];
	$contactp = $_POST['contactpadd'];
	$contactn = $_POST['contactnadd'];
	$dateob = $_POST['dateoadd'];
	$gend = $_POST['genadd'];
	$medi = $_POST['mediadd'];
	$relativen = $_SESSION['username'];

	
	$sql="SELECT * FROM patients WHERE device_id='$divicei'";
	$result = mysql_query ($sql) or die('Invalid query: ' . mysql_error());
	$count = mysql_num_rows($result);
	if ($count < 1) {
	mysql_query("INSERT INTO patients (device_id, relative_username, patient_name, contact_person, contact_number, date_of_birth, gender, medicine) 
	VALUES ('$divicei', '$relativen', '$patientn', '$contactp', '$contactn', '$dateob', '$gend', '$medi')")  or die(mysql_error());
	echo'S';
	mysql_close($conn);
	} else {
	echo'F';
	}
?>