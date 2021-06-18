<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="mytag"%>
<!DOCTYPE html>
<html>
<head>
<script>
	function msgCk(msg){
		if(msg!="")	
			alert(msg);
	}
	window.onload=msgCk("${message}");
</script>
<meta charset="UTF-8">
	<title>Log In</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<script src="js/jquery.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-layers.min.js"></script>
		<script src="js/init.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-xlarge.css" />
		</noscript>
</head>
<body>
<mytag:header></mytag:header>
<div class="user" align="center" >
		<header class="user__header">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" /><br>
			<h1 class="user__title" style="font-size:20px; font-weight:bold;">Log In</h1>
		</header>
		<div align="center" style="width:50%; border:2px solid gray; border-radius:20px">
		<br>
			<form class="form" action="http://localhost:8080/gunwoong_free/MainServlet?cmd=Log" method="post">
				<div align="center">
					<input type="text" name="id" autofocus required placeholder="ID" style="width:400px"/>
				</div>
				<br>
				<div>
					<input type="password" name="passwd" required placeholder="Password" style="width:400px"/>
				</div>
				<br>
				<button class="button special" type="submit" style="display: inline">Log In</button>
			</form>
		</div>
	</div>
	<mytag:footer></mytag:footer>
</body>
</html>