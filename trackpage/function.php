<!DOCTYPE html>
<html>
	<head>
		<title>Track home</title>
	    <link rel="stylesheet"type="text/css" href="style.css"/>
	</head>
	
	<body>

	<div id="nav">
	<ul id="navbar">
    <li ><a href="#">Home</a></li>
    <li><a href="#">option2</a></li>
    <li><a href="#">option3</a></li>
    <li><a href="#">option4</a></li>
	<li><a href="#">option5</a></li>
	</ul> 
	</div>
	
	<div id="sidebar">
	<button type="button" id="f1" onclick="content1()">Track</button>
	<button type="button" id="f2" onclick="content2()">Geofence</button>
	<button type="button" id="f3" onclick="content3()">function3</button>
	<button type="button" id="f4" onclick="content4()">function4</button>
	<button type="button" id="f5" onclick="content5()">function5</button>
	<button type="button" id="f6" onclick="content6()">function6</button>
	</div>
	
	<div id="main">
	</div>
	</body>

	
<script>
if ("<?php echo $_GET['cont']; ?>" == "1")
{
content1();
}
if ("<?php echo $_GET['cont']; ?>" == "2")
{
content2();
}
if ("<?php echo $_GET['cont']; ?>" == "3")
{
content3();
}
if ("<?php echo $_GET['cont']; ?>" == "4")
{
content4();
}
if ("<?php echo $_GET['cont']; ?>" == "5")
{
content5();
}
if ("<?php echo $_GET['cont']; ?>" == "6")
{
content6();
}

function content1()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("main").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","content1.php",true);
xmlhttp.send();
}

function content2()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("main").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","content2.php",true);
xmlhttp.send();
}

function content3()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("main").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","content3.php",true);
xmlhttp.send();
}

function content4()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("main").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","content4.php",true);
xmlhttp.send();
}

function content5()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("main").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","content5.php",true);
xmlhttp.send();
}

function content6()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("main").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","content6.php",true);
xmlhttp.send();
}
</script>	
	
	
	
	
	
</html>