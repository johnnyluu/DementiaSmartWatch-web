<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>login page</title>
</head>
<body>
            <div class="registration_container">

                <div>
                    <h3>Please enter your registered username & Password to login</h3>
                </div>
            <?php
			session_start();

				/*** check if the users is already logged in ***/
				if(isset( $_SESSION['username'] ))
				{
				$message = 'User is already logged in';
				}
				$errors = array();
				if (isset($_POST['username']))
				{
					require 'validate.inc';
					validatePattern($errors, $_POST, 'username',  '/^[a-zA-Z ]{2,20}$/'); 
					validatePattern($errors, $_POST, 'password', '/^(?=.*\d)[0-9A-Za-z!@#$%*]{8,}$/');		
					if ($errors)
					{
					foreach ($errors as $field => $error)
					include 'loginfield.inc';
					}
				 else if (isset($_POST['login']))			
					{
				    // validate posted username and password here
					 include('authentication.inc');
					 if (checkPassword($_POST['username'], $_POST['password']))
					 {
						echo'<h2>Successfully Logged In</h2><br/>';						
						$_SESSION['username'] = $_POST['username'];
						$_SESSION['username'] = true;
					  }
					 else{
					
						echo '<h1>Login failed</h1><br/>';
					     } 
					}
				}
				else
				{
					include 'loginfield.inc';
				}
			?>
			<br/><br/>
       </div>
</body>
</html>
