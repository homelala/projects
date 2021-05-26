<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="mytag"%>
<!DOCTYPE HTML>
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
					<h4 style="text-decoration: underline; text-underline-position: under;font-size:150%">Contact Mail</h4>
					<br>
					<div class="table-wrapper">
						<table>
							<thead>
								<tr align="center">
									<th>ID</th>
									<th>Name</th>
									<th>Email</th>
									<th>Title</th>
									<th>Mark</th>
								</tr>
							</thead>
							<tbody>
								<c:forEach var="infos" items="${info}">
									<tr>
										<td><c:out value="${infos.id}" /></td>
										<td width="150"><c:out value="${infos.name}" /></td>
										<td width="250"><c:out value="${infos.email}" /></td>
										<td width="400"><a
											href="/myweb/contact/read?id=${infos.id}">${infos.title}</a></td>
										<td width="200"><c:if test="${infos.confirm !=false}">
												<img width="9%" src="./resources/images/check.png">
											</c:if></td>
										<td>
											<form style="display: inline" method="post"
												action="/myweb/contact/delete">
												<input type="hidden" value="${infos.id}" name="id" /> <input
													type="submit" class="button small" value="Delete">
											</form>
										</td>
									</tr>
								</c:forEach>
							</tbody>
						</table>
						<div style="float: right; margin-right:3%">
							<a href="/myweb/contact/readMarked?page=1" class="button primary small">Mark
								List</a>
						</div>
						<div style="float: right;margin-right:32%;font-size:110%">
							<ul class="pagination">
								<li><a href="/myweb/contact?page=${page==1?page:page-1}" class="button small">Prev</a></li>
								<c:forEach var="i" begin="1" end="${len%5==0?len/5:len/5+1}">
									<li><a href="/myweb/contact?page=${i}" class="page">${i}</a></li>
								</c:forEach>
								<li><a href="/myweb/contact?page=${page==(len%5==0?len/5:(len-(len%5))/5+1)?page:page+1}" class="button small">Next</a></li>
							</ul>
						</div>					
					</div>
				</div>
			</section>
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