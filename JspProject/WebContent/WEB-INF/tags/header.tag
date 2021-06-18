<%@ tag language="java" pageEncoding="UTF-8"  import="gunwoong_free.domain.*"%>
<header id="header" class="skel-layers-fixed">
				<h1><a href="index.jsp">Trip</a></h1>
				<nav id="nav">
					<ul>
						<li><a href="index.jsp">Home</a></li>
						<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=1">지역 별</a></li>
						<%
							MemberVO members = (MemberVO)session.getAttribute("loginInfo");
							if(members!=null){
								out.println("<li><a href='http://localhost:8080/gunwoong_free/MainServlet?cmd=info'>내 정보</a></li>");
								out.println("<li><a href='http://localhost:8080/gunwoong_free/MainServlet?cmd=logout'>Log out</a></li>");
							}	
							else
								out.println("<li><a href='http://localhost:8080/gunwoong_free/MainServlet?cmd=log'>Log in</a></li>");
							String message = (String)request.getAttribute("message");
						%>
						<li><a href="http://localhost:8080/gunwoong_free/MainServlet?cmd=join" class="button special">Sign up</a></li>
					</ul>
				</nav>
</header>