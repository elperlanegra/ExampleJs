<!DOCTYPE html>
<html>
<head>
	<title>Javascript-Example</title>
	<link rel="stylesheet" type="text/css" href="css/css.css">
	<script type="text/javascript" src="js/js.js"></script>
</head>
<body onload="bgcolor()">
<p class="title">Javascript localStorage</p>

<center><button class="b-father" onclick="background()">Change background color</button></center>

<center>
	<div class="content" id="content">
	<button style="background-color:blue;color:white;padding:15px;border-radius:3px;" onclick="bgcolorblue()">blue</button>


	<button style="background-color:yellow;color:black;padding:15px;border-radius:3px;" onclick="bgcoloryellow()">yellow</button>



	<button style="background-color:violet;color:black;padding:15px;border-radius:3px;" onclick="bgcolorviolet()">violet</button>
	</div>

	<div class="localstor" id="localstor">
		<p>The variable of localstorage is: </p><p id="varlocal"></p>
	</div>
</center>
</body>
</html>