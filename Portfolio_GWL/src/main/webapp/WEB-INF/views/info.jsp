<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="mytag"%>
<!DOCTYPE HTML>
<html>
<mytag:header></mytag:header>
<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">
		<mytag:wrapper></mytag:wrapper>
		<section id="banner" class="style2">
			<div class="inner">
				<span class="image"> <img src="./resources/images/pic03.jpg"
					alt="" />
				</span>
				<header class="major">
					<h1>Contact</h1>
				</header>
			</div>
		</section>
		<!-- Main -->
		<div id="main" class="alt">

			<!-- One -->
			<section id="one">
				<div class="inner">
					<!-- Break -->
					<div class="col-4 col-12-medium"
						style="text-decoration: underline; text-underline-position: under;">
						<h2>TITLE: ${info.title}</h2>
					</div>
					<div class="row">
						<!-- Break -->
						<div class="col-4 col-12-medium">
							<p>NAME: ${info.name}</p>
						</div>
						<div style="margin-left: -20%" class="col-4 col-12-medium">
							<p>EMAIL: ${info.email}</p>
						</div>
					</div>
					<div class="box">
						<p>${info.message}</p>
					</div>
					<div style="display: inline;">
					<c:if test ="${info.confirm == false}">
						<form style="display: inline; margin-right:20px" method="post" action="/myweb/contact/updateMark">
							<input type="hidden" value="${info.id}" name="id" /> 
							<input type="submit" class="button small" value="Mark">
						</form>
					</c:if>
					<c:if test ="${info.confirm == true}">
						<form style="display: inline; margin-right:20px" method="post" action="/myweb/contact/updateUnMark">
							<input type="hidden" value="${info.id}" name="id" /> 
							<input type="submit" class="button small" value="UnMark">
						</form>
					</c:if>	
						<form style="display: inline" method="post" action="/myweb/contact/delete">
							<input type="hidden" value="${info.id}" name="id" /> 
							<input type="submit" class="button small" value="Delete">
						</form>
					</div>
				</div>
			</section>

			<!-- Contact -->
			<footer id="footer">
				<div class="inner">
					<ul class="icons">
						<li><a href="https://www.instagram.com/gunwoong._.2/"
							class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
						<li><a href="https://github.com/homelala/Repository.git"
							class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; Portfolio</li>
						<li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>
		</div>

		<!-- Scripts -->
		<script src="./resources/assets/js/jquery.min.js"></script>
		<script src="./resources/assets/js/jquery.scrolly.min.js"></script>
		<script src="./resources/assets/js/jquery.scrollex.min.js"></script>
		<script src="./resources/assets/js/browser.min.js"></script>
		<script src="./resources/assets/js/breakpoints.min.js"></script>
		<script src="./resources/assets/js/util.js"></script>
		<script src="./resources/assets/js/main.js"></script>
</body>
</html>