package gunwoong_free.domain;

public class MemberVO {
	private String id;
	private String username;
	private String passwd;
	private String mobile;
	private String email;
	private String favor;
	
	public void setId(String id) {
		this.id=id;
	}
	public void setUsername(String username) {
		this.username=username;
	}
	public void setPasswd(String passwd){
		this.passwd=passwd;
	}
	public void setMobile(String mobile) {
		this.mobile=mobile;
	}
	public void setEmail(String email) {
		this.email=email;
	}
	public void setFavor(String favor) {
		this.favor=favor;
	}
	public String getId() {
		return id;
	}
	public String getUsername() {
		return username;
	}
	public String getPasswd() {
		return passwd;
	}
	public String getEmail() {
		return email;
	}
	public String getMobile() {
		return mobile;
	}
	public String getFavor() {
		return favor;
	}
}
