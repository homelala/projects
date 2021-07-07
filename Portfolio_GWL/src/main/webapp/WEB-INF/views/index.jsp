<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="mytag"%>
<!DOCTYPE HTML>
<%
	String id = (String)session.getAttribute("id");
%>
<script>
	function msgCk(msg){	
		if(msg != ""){
			alert(msg);
		}
	}
	window.onload=msgCk("${msg}");
</script>
<html>
	<mytag:header></mytag:header>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">
				<mytag:wrapper></mytag:wrapper>
				<!-- Banner -->
					<section id="banner" class="major">
						<div class="inner">
							<header class="major">
								<h1>이건웅의 포트폴리오입니다.</h1>
							</header>
							<div class="content">
								<div>
									<p>안녕하세요. 저는 Spring과 Node.js를 주로 사용하는 백엔드 개발자입니다.</p><p> 스스로에 모습에 만족하지 않고 쉬지 않고 달려가는 개발자가 되겠습니다. </p>
								</div>
								<ul class="actions">
									<li><a href="#one" class="button next scrolly">Get Started</a></li>
								</ul>
							</div>
						</div>
					</section>

				<!-- Main -->
					<div id="main">

						<!-- One -->
							<section id="one" class="tiles">
								<article>
									<span class="image">
										<img src="./resources/images/pic01.jpg" alt="" />
									</span>
									<header class="major">
										<h3><a href="/Portfolio/projects" class="link">Projects</a></h3>
										<p>My projects	</p>
									</header>
								</article>
								<article>
									<span class="image">
										<img src="./resources/images/pic02.jpg" alt="" />
									</span>
									<header class="major">	
										<h3><a href="/Portfolio/about" class="link">About</a></h3>
										<p>about me...</p>
									</header>
								</article>
								<article>
									<span class="image">
										<img src="./resources/images/pic03.jpg" alt="" />
									</span>
									<header class="major">
										<h3><a href="/Portfolio/contact?page=1" class="link">Contact</a></h3>
										<p>Contact to me</p>
									</header>
								</article>
								<article>
									<span class="image">
										<img src="./resources/images/pic04.jpg" alt="" />
									</span>
									<header class="major">
										<h3><a href="/Portfolio/skills" class="link">Skills</a></h3>
										<p>My skills</p>
									</header>
								</article>
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