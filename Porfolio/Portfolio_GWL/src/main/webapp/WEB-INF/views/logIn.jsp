<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="mytag"%>
<script>
	function msgCk(msg){	
		if(msg != ""){
			alert(msg);
		}
	}
	window.onload=msgCk("${msg}");
</script>

<!DOCTYPE HTML>
<html>
	<mytag:header></mytag:header>
	</style>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">
				<mytag:wrapper></mytag:wrapper>

				<!-- Contact -->
					<section id="contact">
							<section style="top:50%; left:50%;margin:5%;margin-left:37%">
								<form method="post" action="./logIn">
									<div>
										<div class="field half" style="width:42%;">
											<label for="name">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<br>
										<div class="field half" style="width:42%;">
											<label for="email">PassWord</label>	
											<input type="password" name="password" id="password" />
										</div>
									</div>
									<br><br>
									<ul class="actions">
										<li><input type="submit" value="Log In" class="primary" /></li>
										<li><input type="reset" value="Clear" /></li>
									</ul>
								</form>
							</section>
					</section>

				<!-- Footer -->
					<footer id="footer">
						<div class="inner">
							<ul class="icons">
								<li><a href="https://www.instagram.com/gunwoong._.2/" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
								<li><a href="https://github.com/homelala/Repository.git" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
							</ul>
							<ul class="copyright">
								<li>&copy; Portfolio</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
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