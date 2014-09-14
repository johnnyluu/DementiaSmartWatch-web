<?php
session_start();

	$dbhost = 'localhost';
	$dbuser = 'creativ4_5022163';
	$dbpass = 'xyz512612';
	$db = 'creativ4_agile';
	
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($db, $conn);


$_SESSION['username']='bob';

$sql="SELECT * FROM patients WHERE relative_username='".$_SESSION['username']."'";
$result = mysql_query ($sql);
$rows = array();
while($r = mysql_fetch_assoc($result)) {
  $rows[] = $r;
}
echo '{"people":';
echo json_encode($rows);
echo '}';
?>