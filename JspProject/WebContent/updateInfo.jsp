<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="gunwoong_free.domain.*"	%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="mytag"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<%
	MemberVO member = (MemberVO)request.getAttribute("info");
%>
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
								<h2 style="margin-top:-5%">회원 정보 수정</h2>
									<form class="form" action="http://localhost:8080/gunwoong_free/MainServlet?cmd=update" method="post">
										<div>
											<input type="hidden" name="MainId" autofocus value=<%=member.getId() %> style="width:400px"/>
											<input type="text" name="id" autofocus  required placeholder="ID"  value=<%=member.getId() %> style="width:400px"/>
										</div>
										<br>
										<div>
											<input type="text" name="username" required placeholder="username" value=<%=member.getUsername() %> style="width:400px"/>
										</div>
										<br>
										<div>
											<input type="password" name="passwd" required placeholder="password"  value=<%=member.getPasswd() %> style="width:400px"/>
										</div>
										<br>
										<div>
											<input type="text" name="mobile" required placeholder="Mobile" value=<%=member.getMobile() %> style="width:400px"/>
										</div>
										<br>
										<div>
											<input type="text" name="email" required placeholder="email" value=<%=member.getEmail() %> style="width:400px"/>
										</div>
										<br>
										<div>
											<input type="text" name="favor"  required placeholder="선호 지역" value=<%=member.getFavor() %> style="width:400px"/>
										</div>
										<br>
										<button class="button special" type="submit" style="display: inline">update</button>
									</form>
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