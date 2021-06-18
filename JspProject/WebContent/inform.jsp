<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="gunwoong_free.domain.*"	%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="mytag"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<script>
	function msgCk(msg){
		if(msg!=""){
			alert(msg);
		}
	}
	window.onload=msgCk("${message}");
	
	function removeCheck(){
		if(confirm("회원 탈퇴하시겠습니까?")==true){
			document.removefrm.submit();
			alert("탈퇴되었습니다.")
		}else{
			return false;
		}
	}
</script>
<style>
	button{
		text-decoration:underline; 
		border:none; 
		background-color:white; 
		font-size:15px; 
		color:#629DD1;
		margin-left:-2%;
	}
	button:hover {
			text-decoration: none;
	}
</style>
<html>
	<head>
		<title>My Page</title>
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
	<body id="top">
	<mytag:header></mytag:header>
		<!-- Main -->
			<section id="main" class="wrapper style1">
				<header class="major">
				<div align="left" style="margin-left:10%;">
					<h2 >My Page</h2>
					<hr class="major" style="width:90%" />
				</div>	
				</header>
				<div class="container">
					<div class="row">
						<mytag:Menu></mytag:Menu>
						<div class="8u skel-cell-important">
							<section>
								<h2 style="margin-top:-5%">회원 정보</h2>
									<table class="inform" style="width:70%">
										<tr>
											<th>이름</th>
											<td>${info.username}</td>
										</tr>
										<tr>
											<th>ID</th>
											<td>${info.id}</td>
										</tr>
										<tr>
											<th>전화번호</th>
											<td>${info.mobile}</td>
										</tr>
										<tr>
											<th>Email</th>
											<td>${info.email}</td>
										</tr>
										<tr>
											<th>선호 지역</th>
											<td>${info.favor}</td>
										</tr>
									</table>
								</section>
						</div>	
					</div>
					<hr class="major" />
					<mytag:favorList></mytag:favorList>
				</div>
			</section>
	<mytag:footer></mytag:footer>
	</body>
</html>