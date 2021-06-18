package gunwoong_free.domain;

import com.mysql.cj.jdbc.Blob;

public class RegionVO {
	
	private int seq;
	private String name;
	private String title;
	private String explain;
	private String username;
	private String location;
	private int vote;
	
	public int getSeq(){
		return seq;
	}
	public String getName() {
		return name;
	}
	public String getTitle() {
		return title;
	}
	public String getExplain() {
		return explain;
	}
	public String getUsername() {
		return username;
	}
	public String getLocation() {
		return location;
	}
	public int getVote() {
		return vote;
	}
	public void setSeq(int seq) {
		this.seq=seq;
	}
	public void setName(String name) {
		this.name=name;
	}
	public void setTitle(String title) {
		this.title=title;
	}
	public void setExplain(String explain) {
		this.explain=explain;
	}
	public void setUsername(String username) {
		this.username=username;
	}
	public void setLocation(String location) {
		this.location=location;
	}
	public void setVote(int vote) {
		this.vote=vote;
	}
}
