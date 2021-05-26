package org.web.persistence;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.web.domain.InfoVO;
import org.web.domain.PageVO;


@Component
public class InfoDAOImpl implements InfoDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	private static final String namespace = "org.web.mapper.InfoMapper";
	
	public void createInfo(InfoVO vo) throws Exception{
		sqlSession.insert(namespace+".create",vo);
	}
	
	public List<InfoVO> readInfoList(int page) throws Exception{
		System.out.println("read");
		List<InfoVO> infoList = new ArrayList<InfoVO>();
		infoList =  sqlSession.selectList(namespace+ ".readAll",page);
		return infoList;
	}
	
	public List<InfoVO> readMarkedList(int page) throws Exception{
		List<InfoVO> infoList = new ArrayList<InfoVO>();
		infoList = sqlSession.selectList(namespace+".readMarked",page);
		return infoList;
	}
	
	public void delete(int id) throws Exception{
		sqlSession.delete(namespace+".delete",id);
	}
	
	public InfoVO readInfo(int id) throws Exception{
		InfoVO info = sqlSession.selectOne(namespace+".read",id);
		return info;
	}
	
	public void updateMark(int id) throws Exception{
		sqlSession.update(namespace+ ".updateMark",id);
	}
	
	public void updateUnMark(int id) throws Exception{
		sqlSession.update(namespace+ ".updateUnMark",id);
	}
	
	public int countList() throws Exception{
		int len = sqlSession.selectOne(namespace+".count");
		return len;
	}
	
	public int countMarkedList() throws Exception{
		int len = sqlSession.selectOne(namespace+".countMarked");
		return len;
	}
}
