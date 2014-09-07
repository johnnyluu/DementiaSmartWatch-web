<?php

header('Content-Type: application/json');

require("dbinfo.php");

$connection = mysql_connect ('localhost', $username, $password);
mysql_select_db($database);

if (!$connection) {
	die('Not connected : ' . mysql_error());
}

$query = "SELECT * FROM GPSRecord WHERE Error_Code != 0";
$result = mysql_query($query) or die(mysql_error());

echo '{"records":[';

$json = "";

while ($row = mysql_fetch_array($result)) {
	// echo '<GPSRecord ID="' . $row['ID'] . '" />';
	// echo "{ID:".$row['ID']."}";
	$json .= json_encode($row);
	$json .= ",";
}

// $json .= substr($json, 0, -1);

echo $json.']}';

?>
