	<?php
	header('Content-Type: application/json');

	try {
	require("dbinfo.php");
	$con = new PDO('mysql:host=localhost;dbname=agile',$username, $password);
	$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql = ("SELECT * FROM GPSRecord WHERE Error_Code != 0") or die(mysql_error());
	$stmt = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
	$stmt->execute();

	echo '{"records":[';

	$json = "";


	while($row = $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_NEXT))
					{								  
					$json .= json_encode($row);
					$json .= ",";
					}
			$json = substr($json, 0, -1);		
			echo $json.']}';						
		}
	catch(PDOException $e)
		{
			echo " There is a problem with you db connection";
			print $get->getMessage();
		}		

	?>
