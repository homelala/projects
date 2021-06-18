<%@ tag language="java" pageEncoding="UTF-8"%>
<h3 style="margin-top:-4%">회원님을 위한 맞춤 여행</h3>
					<div class="row">
						<div class="6u">	
							<section class="special">
								<a href="#" class="image fit"><img src="images/pic01.jpg" alt="" /></a>
								<h3>${favor[0].title}</h3>
								<p>${favor[0].explain}</p>
								<ul class="actions">
									<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=1" class="button alt">Learn More</a></li>
								</ul>
							</section>
						</div>
						<div class="6u">
							<section class="special">
								<a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
								<h3>${favor[1].title}</h3>
								<p>${favor[1].explain}</p>
								<ul class="actions">
									<li><a href="http://localhost:8080/gunwoong_free/RegionServlet?cmd=read&loc=1" class="button alt">Learn More</a></li>
								</ul>
							</section>
						</div>
					</div>