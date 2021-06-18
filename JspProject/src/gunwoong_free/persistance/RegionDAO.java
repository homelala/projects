package gunwoong_free.persistance;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import gunwoong_free.domain.MemberVO;
import gunwoong_free.domain.RegionVO;

public class RegionDAO {
	private static Map<String, RegionVO> storage = new HashMap<String,RegionVO>();
	Connection conn = null;
	PreparedStatement pstmt = null;
	
	String jdbc_driver = "com.mysql.cj.jdbc.Driver";
	String jdbc_url = "jdbc:mysql://localhost:3306/jspdb?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC";
	
	void connect() {
		try {
			Class.forName(jdbc_driver);
			conn = DriverManager.getConnection(jdbc_url, "jspbook", "passwd");
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	void disconnect() {
		if(pstmt != null) {
			try {
				pstmt.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		
		if(conn != null) {
			try {
				conn.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
	}
	public ArrayList<RegionVO> read(String name) {
		connect();
		String sql="select * from region where name like ?";
		ArrayList<RegionVO> regionList = new ArrayList<RegionVO>();
		try {
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, name);
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					RegionVO vo= new RegionVO();
					vo.setSeq(rs.getInt("seq"));
					vo.setName(rs.getString("name"));
					vo.setTitle(rs.getString("title"));
					vo.setExplain(rs.getString("exp"));
					vo.setLocation(rs.getString("location"));
					vo.setUsername(rs.getString("username"));
					regionList.add(vo);
			}
			rs.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return regionList;
	}
	public boolean insert(RegionVO vo) {
		connect();
		String sql = "insert into region(name, title, location, exp, username, vote) values (?,?,?,?,?,?)";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, vo.getName());
			pstmt.setString(2, vo.getTitle());
			pstmt.setString(3, vo.getLocation());
			pstmt.setString(4, vo.getExplain());
			pstmt.setString(5, vo.getUsername());
			pstmt.setInt(6, vo.getVote());
			pstmt.executeUpdate();
		}catch(SQLException e) {
			e.printStackTrace();
			return false;
		}finally {
			disconnect();
		}
		return true;
	}
	public ArrayList<RegionVO> favor(String favor){
		connect();
		String sql="select * from region where name like ?";
		ArrayList<RegionVO> regionList = new ArrayList<RegionVO>();
		try {
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, favor);
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					RegionVO vo= new RegionVO();
					vo.setSeq(rs.getInt("seq"));
					vo.setName(rs.getString("name"));
					vo.setTitle(rs.getString("title"));
					vo.setExplain(rs.getString("exp"));
					vo.setLocation(rs.getString("location"));
					vo.setUsername(rs.getString("username"));
					regionList.add(vo);
			}
			rs.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return regionList;
	}
	public ArrayList<RegionVO> readList(String id) {
		connect();
		String sql="select * from region where username like ?";
		ArrayList<RegionVO> regionList = new ArrayList<RegionVO>();
		try {
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, id);
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					RegionVO vo= new RegionVO();
					vo.setSeq(rs.getInt("seq"));
					vo.setName(rs.getString("name"));
					vo.setTitle(rs.getString("title"));
					vo.setExplain(rs.getString("exp"));
					vo.setLocation(rs.getString("location"));
					vo.setUsername(rs.getString("username"));
					regionList.add(vo);
			}
			rs.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return regionList;
	}
	public ArrayList<RegionVO> vote(){
		connect();
		String sql="select * from region order by vote desc limit 2";
		ArrayList<RegionVO> vote = new ArrayList<RegionVO>();
		try {
				pstmt = conn.prepareStatement(sql);
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					RegionVO vo= new RegionVO();
					vo.setSeq(rs.getInt("seq"));
					vo.setName(rs.getString("name"));
					vo.setTitle(rs.getString("title"));
					vo.setExplain(rs.getString("exp"));
					vo.setLocation(rs.getString("location"));
					vo.setUsername(rs.getString("username"));
					vo.setVote(rs.getInt("vote"));
					vote.add(vo);
			}
			rs.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return vote;
	}
	public boolean updateVote(String id,int beforeVote ) {
		connect();
		String sql="update region set vote = ? where seq like ?";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, beforeVote+1);
			pstmt.setString(2, id);
			pstmt.executeUpdate();
		}catch(SQLException e) {
			e.printStackTrace();
			return false;
		}finally {
			disconnect();
		}
		return true;
	}
	public int getVote(String id) {
		connect();
		String sql="select vote from region where seq like ?";
		int vote=10;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			ResultSet rs = pstmt.executeQuery();	
			while(rs.next()) {
				RegionVO vo= new RegionVO();
				vote=rs.getInt("vote");
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return vote;
	}
}
