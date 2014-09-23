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
	
	$patientn = $_POST['patientnadd'];
	$devicei = $_POST['deviceiadd'];
	$contactp = $_POST['contactpadd'];
	$contactn = $_POST['contactnadd'];
	$dateob = $_POST['dateoadd'];
	$gend = $_POST['genadd'];
	$medi = '';
	$relativen = $_SESSION['username'];

	
	$sql = "SELECT * FROM patients WHERE device_id LIKE '$devicei'";
	$result = mysql_query ($sql) or die('Invalid query: ' . mysql_error());
	$count = mysql_num_rows($result);

	if ($count < 1) {
		mysql_query("INSERT INTO patients (device_id, relative_username, patient_name, contact_person, contact_number, date_of_birth, gender, medicine) VALUES ('$devicei', '$relativen', '$patientn', '$contactp', '$contactn', '$dateob', '$gend', '$medi')")  or die(mysql_error());
		echo'S';
		mysql_close($conn);
	} else {
		mysql_query("UPDATE patients SET  relative_username='$relativen', patient_name='$patientn', contact_person='$contactp', contact_number='$contactn', date_of_birth='$dateob', gender='$gend', medicine='$medi' WHERE device_id='$devicei' ") or die(mysql_error());
		echo 'S';
		// UPDATE `patients` SET `device_id`='1444', `relative_username`='1245', `patient_name`='bbrrrr', `contact_person`='ddrrrrr', `contact_number`='5454541', `gender`='m', `medicine`='ssjkdzmxfna' WHERE `id`='15';
		mysql_close($conn);
		// UPDATE table_name
		// SET column1=value1,column2=value2,...
		// WHERE some_column=some_value;
	}
?>