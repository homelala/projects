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
		<!-- Banner -->
		<!-- Note: The "styleN" class below should match that of the header element. -->
		<section id="banner" class="style2">
			<div class="inner">
				<span class="image"> <img src="./resources/images/pic01.jpg"
					alt="" />
				</span>
				<header class="major">
					<h1>Projects</h1>
				</header>
				<div class="content">
					<p>현재까지 진행했던 프로젝트 소개입니다.</p>
				</div>
			</div>
		</section>

		<!-- Main -->
		<div id="main">

			<!-- Two -->
			<section id="two" class="spotlights">
				<section>
					<a class="image"> <img src="./resources/images/pic08.jpg"
						alt="" data-position="center center" />
					</a>
					<div class="content">
						<div class="inner">
							<header class="major">
								<h3>스마트 코인 노래방 어플 서버구축</h3>
							</header>
							<p>현재 많이 대중화되어 있는 코인 노래방에서 겪을 수 있는 불편함을 보완하기 위해 핸드폰을 사용해서 결제,
								예약, 검색 등의 서비스를 가능하게 해주는 스마트 코인 노래방 어플을 팀원들과 개발하였고, node.js를 통한
								express 프레임워크를 사용하여 어플, 라즈베리파이와 통신하는 서버를 개발하였습니다.</p>
							<ul class="actions">
								<li><a href="https://github.com/homelala/Repository/tree/main/%EC%A1%B8%EC%9E%91%20%EC%84%9C%EB%B2%84" class="button">Git Address</a></li>
							</ul>
						</div>
					</div>
				</section>
				<section>
					<a href="generic.html" class="image"> <img
						src="./resources/images/pic09.jpg" alt=""
						data-position="top center" />
					</a>
					<div class="content">
						<div class="inner">
							<header class="major">
								<h3>웹 클론 코딩</h3>
							</header>
							<p>node.js를 활용한 강좌를 통해 데이터의 CRUD부터 express 프레임워크를 사용하여 다양한
								모듈들을 다루고 이를 발전시켜 나중에는 카카오를 통한 로그인까지 구현하는 클론 코딩을 진행하였습니다.</p>
							<ul class="actions">
								<li><a href="https://github.com/homelala/Repository/tree/main/%ED%81%B4%EB%A1%A0%20%EC%BD%94%EB%94%A9" class="button">Git Address</a></li>
							</ul>
						</div>
					</div>
				</section>
				<section>
					<a class="image"> <img style="width:100%;height:100%"
						src="./resources/images/project3.png" alt="" data-position="25% 25%" />
					</a>
					<div class="content">
						<div class="inner">
							<header class="major">
								<h3>스프링을 사용하여 웹 서버 구축</h3>
							</header>
							<p>학교에서 진행하는 현장실습을 통해 2달 동안 실제 기업에서 팀원들과 함께 미세먼지 오염원과 그에 대한 미세먼지 농도를 
							알려주는 웹 서버를 스프링을 사용하여 구축하였습니다. 이러한 서버에서 제가 맡은 부분은 로그인, 특정 오염물질에 대한 미세먼지 농도 표현,
							QnA 게시판 등을 맡아 개발하였습니다.</p>
							<ul class="actions">
								<li><a href="https://github.com/homelala/Repository" class="button">Git Address</a></li>
							</ul>
						</div>
					</div>
				</section>
			</section>
		</div>

		<!-- Contact -->
		<mytag:footer></mytag:footer>
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