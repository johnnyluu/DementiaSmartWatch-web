<?php
	function validatePattern(&$errors, $field_list, $field_name, $pattern)
	{		
		if (!isset($field_list[$field_name]) || empty($field_list[$field_name]))
			$errors[$field_name] = 'Required';
		else if (!preg_match($pattern, $field_list[$field_name]))
			$errors[$field_name] = 'Invalid';
	}		
	
		function errorLabel($errors, $name)
	{
		if (isset($errors[$name])) 
		{
		echo "<span id=\"{$name}Error\" class=\"error\">$errors[$name]</span>";
		}
	}
?>