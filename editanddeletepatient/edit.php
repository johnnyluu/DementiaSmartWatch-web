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
	$patientn = $_POST['patientnadd'];
	$divicei = $_POST['deviceiadd'];
	$contactp = $_POST['contactpadd'];
	$contactn = $_POST['contactnadd'];
	$dateob = $_POST['dateoadd'];
	$gend = $_POST['genadd'];
	$medi = $_POST['mediadd'];
	$relativen = $_SESSION['username'];

	
	
	$sql="UPDATE patients SET device_id='$divicei', patient_name='$patientn', contact_person='$contactp', contact_number = '$contactn', date_of_birth = '$dateob', gender = '$gend', medicine='$medi' WHERE patientid='$patientid' and relative_name = '$relativen'";
	mysql_query ($sql) or die('Invalid query: ' . mysql_error());
	
	echo'S';

?>