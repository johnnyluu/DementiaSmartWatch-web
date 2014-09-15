<?php
    function checkPassword($email, $userpwd)
    {
	  	echo "inside authentication";
		require ('dbConnection.inc');
		$query = $pdo->prepare("SELECT * FROM users WHERE user=:username AND pass=:password");
		
        $query->bindValue(':username', $username);
        $query->bindValue(':password', $password);
        $query->execute();
		return $query->rowCount() > 0;		
    }
?>