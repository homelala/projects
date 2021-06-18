<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="gunwoong_free.domain.*, gunwoong_free.persistance.*, java.util.*"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="mytag"%>
<!DOCTYPE HTML>
<%
	MemberVO members = (MemberVO)session.getAttribute("loginInfo");
	ArrayList<RegionVO> vo = new ArrayList<RegionVO>();
	RegionDAO dao=new RegionDAO();
	vo=dao.vote();
	request.setAttribute("voteList",vo);
%>
<html>
<script>
	function msgCk(msg){
		if(msg!=""){
			alert(msg);
		}
	}
	window.onload=msgCk("${message}");
</script>
	<head>
		<title>Homepage</title>
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
		<!-- Banner -->
			<section id="banner">
				<div class="inner">
					<%
						if(members!=null){
							out.println("<h2>"+members.getUsername()+"님 환영합니다!</h2>");
						}else{
							out.println("<h2>TRIP에 오신 걸 환영합니다!</h2>");
						}
					%>
					<p>Enjoy your Trip!</p>
					<ul class="actions">
						<li><a href="http://localhost:8080/gunwoong_free/MainServlet?cmd=join" class="button big special">Sign Up</a></li>
						<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=1" class="button big alt">Learn More</a></li>
					</ul>
				</div>
			</section>

		<!-- One -->
			<section id="one" class="wrapper style1">
				<header class="major">
					<h2>오늘의 추천 여행지</h2>	
				</header>
				<div class="container">
					<div class="row">
						<div class="4u">
							<section class="special box">
								<img src="images/Jeju.jpg" width="300" heigh="150" style="border-radius:15px;">
								<h3>제주도</h3>
								<p>푸른 밤 제주도 가고싶다!</p>
							</section>
						</div>
						<div class="4u">
							<section class="special box">
								<img src="images/Mountain.jpg" width="300" heigh="150" style="border-radius:15px;">
								<h3>전북 무주 덕양산</h3>
								<p>설산을 보러 가자!</p>
							</section>
						</div>
						<div class="4u">
							<section class="special box">
								<img src="images/Oncheon.jpg" width="300" heigh="150" style="border-radius:15px;">
								<h3>충남 아산 온천 여행~</h3>
								<p>추운 날에는 온천이지~~</p>
							</section>
						</div>
					</div>
				</div>
			</section>
			
		<!-- Two -->
			<section id="two" class="wrapper style2">
				<header class="major">
					<h2>이 달의 베스트 여행지</h2>
					<p>베스트 여행지를 뽑아주세요!  추첨을 통해 경품을 드립니다.</p>
				</header>
				<div class="container">
					<div class="row">
						<div class="6u">
							<section class="special">
								<a href="#" class="image fit"><img src="images/Autumn.jpg" alt="" /></a>
								<h3>${voteList[0].title}</h3>
								<p>${voteList[0].explain}</p>
								<p>좋아요 수: ${voteList[0].vote}</p>
								<ul class="actions">
									<li><a href="http://localhost:8080/gunwoong_free/MainServlet?cmd=vote&id=${voteList[0].seq}" class="button alt">좋아요</a></li>
								</ul>
							</section>
						</div>
						<div class="6u">	
							<section class="special">
								<a href="#" class="image fit"><img src="images/GaPyeong.jpg" alt="" /></a>
								<h3>${voteList[1].title}</h3>
								<p>${voteList[1].explain}</p>
								<p>좋아요 수: ${voteList[1].vote}</p>
								<ul class="actions">
									<li><a href="http://localhost:8080/gunwoong_free/MainServlet?cmd=vote&id=${voteList[1].seq}" class="button alt">좋아요</a></li>
								</ul>
							</section>
						</div>
					</div>
				</div>
			</section>
		<mytag:footer></mytag:footer>
	</body>
</html>