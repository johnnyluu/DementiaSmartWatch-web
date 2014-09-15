<div id='login' class="container">
	<h2>Please log in</h2>
	<form method="post" action="LoginPage.php">
	<input type="text" name="user" id="user" placeholder="username" ng-model='user' > 
	<?php errorLabel($errors, $name); ?>
	<input type="password" name="pass" id="pass" placeholder="password" ng-model='pass'> 
	<?php errorLabel($errors, $name); ?>
	<input type="submit" value="Login" name="login" id="subbut">
	</form>
	<?php
		function errorLabel($errors, $name)
		{
			if (isset($errors[$name])) 
			{
				echo "<span id=\"{$name}Error\" class=\"error\">$errors[$name]</span>";
			}
		}
	?>
</div>