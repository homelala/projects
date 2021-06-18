<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="mytag" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Region Trip</title>
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
					<h2>지역별 여행지</h2>
					<p>Enjoy your Trip!</p>
				</header>
				<div class="container">
					<div class="row">
						<div class="8u">
							<section>
								<form action="http://localhost:8080/gunwoong_free/RegionServlet?cmd=register" method="post">
									카테고리
									<select name="category">
								        <option value="서울">서울</option>
								        <option value="경기도">경기도</option>
								        <option value="강원도">강원도</option>
								        <option value="전라도">전라도</option>
								        <option value="경상도">경상도</option>
								        <option value="제주도">제주도</option>
								    </select><br>
									제목<br><input type="text" name="title"/><br>
									여행지 소개<br><textArea type="text" name="explain"></textArea><br>
									위치<br><input type="text" name="location"/>
									<br>
									<button class="button special" type="submit" style="display: inline">register</button>
								</form>
							</section>
						</div>
						<div class="4u">
							<section>
								<h3>게시물 등록하기</h3>
								<p>나만의 여행지를 다른 사람에게도 소개시켜 주세요.</p>
								<ul class="actions">
									<li><a href="#" class="button alt">등록하기</a></li>
								</ul>
							</section>
							<hr/>
							<section>
								<h3>Menu</h3>
								<ul class="alt">
									<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=1">서울</a></li>
									<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=2">경기도</a></li>
									<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=3">강원도</a></li>
									<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=4">전라도</a></li>
									<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=5">경상도</a></li>
									<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=6">제주도</a></li>
								</ul>
							</section>
						</div>
					</div>
					<hr class="major" />
				</div>
			</section>
<mytag:footer></mytag:footer>
	</body>
</html>