<%@ tag language="java" pageEncoding="UTF-8"%>
<section id="contact">
	<div class="inner">
		<section>
			<form method="post" action="/Portfolio/contact/create">
				<div class="fields">
					<div class="field half">
						<label for="name">Name</label> <input type="text" name="name"
							id="name" />
					</div>
					<div class="field half">
						<label for="email">Email</label> <input type="text" name="email"
							id="email" />
					</div>
					<div class="col-12" style="width:92%;margin-top:4%;margin-left:4%">
						<label for="email">Title</label> <input type="text" name="title"
							id="title" />
					</div>
					<div class="field">
						<label for="message">Message</label>
						<textarea name="message" id="message" rows="6"></textarea>
					</div>
				</div>
				<ul class="actions">
					<li><input type="submit" value="Send Message" class="primary" /></li>
					<li><input type="reset" value="Clear" /></li>
				</ul>
			</form>
		</section>
		<section class="split">
			<section>
				<div class="contact-method">
					<span class="icon solid alt fa-envelope"></span>
					<h3>Email</h3>
					<span>homelala@naver.com</span>
				</div>
			</section>
			<section>
				<div class="contact-method">
					<span class="icon solid alt fa-phone"></span>
					<h3>Phone</h3>
					<span>010-7177-2043</span>
				</div>
			</section>
			<section>
				<div class="contact-method">
					<span class="icon solid alt fa-home"></span>
					<h3>Address</h3>
					<span>대한민국<br /> 경기도 군포시 산본동<br /> 한라 2차 아파트
					</span>
				</div>
			</section>
		</section>
	</div>
</section>

<!-- Footer -->

<footer id="footer">
	<div class="inner">
		<ul class="icons">
			<li><a href="https://www.instagram.com/gunwoong._.2/"
				class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
			<li><a href="https://github.com/homelala/projects"
				class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
		</ul>
		<ul class="copyright">
			<li>&copy; Portfolio</li>
			<li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
		</ul>
	</div>
</footer>