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
				<span class="image"> <img src="./resources/images/pic02.jpg"
					alt="" />
				</span>
				<header class="major">
					<h1>Introduce</h1>
				</header>
			</div>
		</section>
		<!-- Main -->
		<div id="main" class="alt">

			<!-- One -->
			<section id="one">
				<div class="inner">
					<!-- Break -->
					<div class="row">
						<div class="col-6 col-12-small">
							<h3>항상 노력하는 개발자</h3>
							<p>문과에서 교차지원을 통해 컴퓨터 공학과에 온 저는 남들보다 뒤쳐진 출발선에서 시작하였습니다. 이런 상황
								가운데에서 조금이라도 앞으로 나아가기 위해 항상 노력하고 스스로를 채찍질하였고 현재도 IT의 트랜드에 따라 개발
								능력을 키워나가려고 자기 개발 중에 있습니다.</p>
						</div>
						<div class="col-6 col-12-small">
							<h3>소통하는 개발자</h3>
							<p>1인 개발부터 시작하여 학교에서 졸업작품, 현장실습에서 2개월 동안 실습 등으로 인해 팀원들과 소통하여
								개발하는 상황이 익숙합니다. 서로 다른 파트에서 서로에 스케줄에 맞춰나가고 함께 소통해 나가며 프로젝트를 진행하는
								것과 Git을 통한 협업이 익숙합니다.</p>
						</div>
					</div>
				</div>
			</section>
			<div class="inner">
				<header class="major">
					<h2>프로젝트 목록</h2>
				</header>
				<div class="row">
					<div class="col-6 col-12-small">
						<h4>개인 프로젝트</h4>
						<ul>
							<li>Node.js를 이용한 웹 프로젝트 제작(토이 프로젝트)</li>
							<li>스프링을 활용한 포트폴리오 제작</li>
						</ul>
					</div>
					<div class="col-6 col-12-small">

						<h4>협업 프로젝트</h4>
						<ul>
							<li>Node.js를 사용하여 스마트 노래방 어플리케이션 서버 구축</li>
							<li>현장 실습에서 스프링을 사용하여 웹 서버 개발</li>
						</ul>
					</div>
				</div>
				<ul class="actions">
					<li><a href="/myweb/projects" class="button next">자세히 보기</a></li>
				</ul>
			</div>
			<div class="inner">
				<header class="major">
					<h2>자격증 및 어학</h2>
				</header>
				<div class="row">
					<div class="col-6 col-12-small">
						<ul>
							<li>컴퓨터 활용 능력 1급(2020.04.24)</li>
							<li>SQLD 자격증(2020.05.11)</li>
							<li>토익 800점(2021.04.11)</li>
						</ul>
					</div>
				</div>
			</div>
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