<?php
header("Access-Control-Allow-Origin: *");


$con = mysqli_connect("hungpohuang.com","agile","agile","agile");
if(mysqli_connect_errno()){
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
mysqli_query($con,"INSERT INTO geofences (centerlat, centerlong, device_id) VALUES (".$_POST["centerlat"].",".$_POST["centerlong"].",".$_POST["patientid"].")") or die(mysql_error());

echo mysqli_insert_id($con);

mysqli_close($con);

?>