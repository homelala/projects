<%@ tag language="java" pageEncoding="UTF-8"%>
<div class="4u" style="margin-top: -3%">
	<section>
		<h3>${info.username}의Page</h3>
		<ul class="alt">
			<li><a
				href="http://localhost:8080/gunwoong_free/MainServlet?cmd=info">개인
					정보</a></li>
			<li><a
				href="http://localhost:8080/gunwoong_free/MainServlet?cmd=update">개인
					정보 수정</a></li>
			<li><a
				href="http://localhost:8080/gunwoong_free/MainServlet?cmd=list">내가
					작성한 여행 게시물</a></li>
			<form name="removefrm"
				action="http://localhost:8080/gunwoong_free/MainServlet?cmd=delete"
				method="post">
				<li><button onclick="removeCheck()" type="button">회원
						탈퇴</button></li>
			</form>
		</ul>
	</section>
</div>