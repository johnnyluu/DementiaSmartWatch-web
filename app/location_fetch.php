<?php
header("Content-type: text/xml");

require("dbinfo.php");

function parseToXML($htmlStr) {
  $xmlStr=str_replace('<','&lt;',$htmlStr);
  $xmlStr=str_replace('>','&gt;',$xmlStr);
  $xmlStr=str_replace('"','&quot;',$xmlStr);
  $xmlStr=str_replace("'",'&#39;',$xmlStr);
  $xmlStr=str_replace("&",'&amp;',$xmlStr);
  return $xmlStr;
}

// Opens a connection to a MySQL server
$connection = mysql_connect ('localhost', $username, $password);
mysql_select_db($database);

// Select all the rows in the markers table
$query = "SELECT * FROM GPSRecord ORDER BY ID DESC LIMIT 1";
$result = mysql_query($query) or die('Invalid query: ' . mysql_error());

// Start XML file, echo parent node
echo '<markers>';

// Iterate through the rows, printing XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
 // ADD TO XML DOCUMENT NODE
  echo '<marker ';
  echo 'name="' . parseToXML($row['name']) . '" ';
  echo 'address="' . parseToXML($row['address']) . '" ';
  echo 'lat="' . $row['Latitude'] . '" ';
  echo 'lng="' . $row['Longitude'] . '" ';
  echo 'type="' . $row['type'] . '" ';
  echo '/>';
}

// End XML file
echo '</markers>';

?>
