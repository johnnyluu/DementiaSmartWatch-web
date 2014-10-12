<?php
//require_once(__DIR__ . '/../vendor/autoload.php');
require 'FixtureTestCase.php';
 
class errorCodeTest extends FixtureTestCase {
 
		//0 = no error
		//1 = out of bound
		//2 = low battery
		//3 = panic button
		//4 = app on
		//5 = app off
		
	function testError0() {
		$conn = $this->getConnection();
		$pdo = $conn->getConnection();
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 0');
		$results1 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$pdo->exec('INSERT INTO GPSRecord (USER_ID, error_code) VALUES (1234, 0)');
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 0');
		$results2 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results2), (count($results1)+1));
		
		$query = $pdo->query('SELECT MAX(ID) FROM GPSRecord');
		$results = $query->fetchAll(PDO::FETCH_COLUMN);
		$pdo->exec("DELETE FROM GPSRecord WHERE ID= '$results[0]'");
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 0');
		$results3 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results3), (count($results1)));
	}
 
	function testError1() {
		$conn = $this->getConnection();
		$pdo = $conn->getConnection();
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 1');
		$results1 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$pdo->exec('INSERT INTO GPSRecord (USER_ID, error_code) VALUES (1234, 1)');
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 1');
		$results2 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results2), (count($results1)+1));
		
		$query = $pdo->query('SELECT MAX(ID) FROM GPSRecord');
		$results = $query->fetchAll(PDO::FETCH_COLUMN);
		$pdo->exec("DELETE FROM GPSRecord WHERE ID= '$results[0]'");
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 1');
		$results3 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results3), (count($results1)));
	}
	
	function testError2() {
		$conn = $this->getConnection();
		$pdo = $conn->getConnection();
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 2');
		$results1 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$pdo->exec('INSERT INTO GPSRecord (USER_ID, error_code) VALUES (1234, 2)');
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 2');
		$results2 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results2), (count($results1)+1));
		
		$query = $pdo->query('SELECT MAX(ID) FROM GPSRecord');
		$results = $query->fetchAll(PDO::FETCH_COLUMN);
		$pdo->exec("DELETE FROM GPSRecord WHERE ID= '$results[0]'");
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 2');
		$results3 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results3), (count($results1)));
	}
	
	function testError3() {
		$conn = $this->getConnection();
		$pdo = $conn->getConnection();
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 3');
		$results1 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$pdo->exec('INSERT INTO GPSRecord (USER_ID, error_code) VALUES (1234, 3)');
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 3');
		$results2 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results2), (count($results1)+1));
		
		$query = $pdo->query('SELECT MAX(ID) FROM GPSRecord');
		$results = $query->fetchAll(PDO::FETCH_COLUMN);
		$pdo->exec("DELETE FROM GPSRecord WHERE ID= '$results[0]'");
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 3');
		$results3 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results3), (count($results1)));
	}
	
	function testError4() {
		$conn = $this->getConnection();
		$pdo = $conn->getConnection();
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 4');
		$results1 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$pdo->exec('INSERT INTO GPSRecord (USER_ID, error_code) VALUES (1234, 4)');
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 4');
		$results2 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results2), (count($results1)+1));
		
		$query = $pdo->query('SELECT MAX(ID) FROM GPSRecord');
		$results = $query->fetchAll(PDO::FETCH_COLUMN);
		$pdo->exec("DELETE FROM GPSRecord WHERE ID= '$results[0]'");
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 4');
		$results3 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results3), (count($results1)));
	}
	
	function testError5() {
		$conn = $this->getConnection();
		$pdo = $conn->getConnection();
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 5');
		$results1 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$pdo->exec('INSERT INTO GPSRecord (USER_ID, error_code) VALUES (1234, 5)');
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 5');
		$results2 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results2), (count($results1)+1));
		
		$query = $pdo->query('SELECT MAX(ID) FROM GPSRecord');
		$results = $query->fetchAll(PDO::FETCH_COLUMN);
		$pdo->exec("DELETE FROM GPSRecord WHERE ID= '$results[0]'");
		
		$query = $pdo->query('SELECT * FROM GPSRecord WHERE Error_Code = 5');
		$results3 = $query->fetchAll(PDO::FETCH_COLUMN);
		
		$this->assertEquals(count($results3), (count($results1)));
	}
	
}
?>
