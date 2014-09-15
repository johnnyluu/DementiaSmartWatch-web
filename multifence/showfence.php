<?php
session_start();

	$dbhost = 'localhost';
	$dbuser = 'agile';
	$dbpass = 'agile';
	$db = 'agile';
	
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($db, $conn);
	$patientid = $_POST['pid'];


$sql="SELECT * FROM geofences WHERE patientid='$patientid'";
$result = mysql_query ($sql);
$rows = array();
while($r = mysql_fetch_assoc($result)) {
  $rows[] = $r;
}
echo '{"fences":';
echo json_encode($rows);
echo '}';
?>