<%@ tag language="java" pageEncoding="UTF-8"%>
<!-- Header -->
<%
String id = (String) session.getAttribute("id");
%>
<header id="header" class="alt">
	<a href="/Portfolio/" class="logo"><strong>Portfolio</strong> <span>by GunWoong</span></a>
	<%
	if (id != null) {
		out.println("<div style='font-size:15px; margin-left:64%; margin-top:1px'><p>" + id + "님</p></div>");
	}
	%>
	<nav>
		<a href="#menu">Menu</a>
	</nav>
</header>

<!-- Menu -->
<nav id="menu">
	<ul class="links">
		<li><a href="/Portfolio/">Home</a></li>
		<li><a href="/Portfolio/projects">Projects</a></li>
		<li><a href="/Portfolio/about">About</a></li>
		<li><a href="/Portfolio/contact?page=1">Contact</a></li>
		<li><a href="/Portfolio/skills">Skills</a></li>
	</ul>
	<ul class="actions stacked">
		<li><a href="#" class="button primary fit">Get Started</a></li>
		<%
			if (id == null) {
				out.println("<li><a href='/Portfolio/logIn' class='button fit'>Log In</a></li>");
			} else {
				out.println("<li><a href='/Portfolio/logOut' class='button fit'>Log Out</a></li>");
			}
		%>
	</ul>
</nav>