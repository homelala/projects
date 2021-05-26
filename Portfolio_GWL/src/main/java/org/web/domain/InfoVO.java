package org.web.domain;

public class InfoVO {
		private String id;
		private String name;
		private String email;
		private String message;
		private String title;
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		private boolean confirm;
		
		@Override
		public String toString() {
			return "InfoVO [id=" + id + ", name=" + name + ", email=" + email + ", message=" + message + ", confirm="
					+ confirm + "]";
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public boolean isConfirm() {
			return confirm;
		}
		public void setConfirm(boolean confirm) {
			this.confirm = confirm;
		}
			
		
}
