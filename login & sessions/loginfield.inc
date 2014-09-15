<form action="LoginPage.php" method="POST">

<?php
	require('field.inc');
	input_field($errors, 'email', 'Email'); echo'<br/>';
	password_field($errors, 'userpwd', 'Password'); echo'<br/>';
?>
<input  type="Submit" name="login" value="Login" class="Buttons" />

		