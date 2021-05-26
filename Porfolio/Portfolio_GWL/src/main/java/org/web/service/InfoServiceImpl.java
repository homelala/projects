package org.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.web.domain.InfoVO;
import org.web.domain.PageVO;
import org.web.persistence.InfoDAO;

@Service
public class InfoServiceImpl implements InfoService {
	
	@Autowired
	InfoDAO infodao;
	
	@Transactional ( propagation=Propagation.REQUIRED, isolation=Isolation.READ_COMMITTED, timeout=10 )
	public void createInfo(InfoVO vo) throws Exception{
		infodao.createInfo(vo);
	}
	
	public List<InfoVO> readInfoList(int page) throws Exception{
		System.out.println("read");
		return infodao.readInfoList(page);
	}
	
	public List<InfoVO> readMarkedList(int page) throws Exception{
		return infodao.readMarkedList(page);
	}
	
	public void delete(int id) throws Exception{
		infodao.delete(id);
	}
	
	public InfoVO readInfo(int id) throws Exception{
		return infodao.readInfo(id);
	}
	
	public void updateMark(int id) throws Exception{
		infodao.updateMark(id);
	}
	public void updateUnMark(int id) throws Exception{
		infodao.updateUnMark(id);
	}
	
	public int countList() throws Exception{
		return infodao.countList();
	}
	
	public int countMarkedList() throws Exception{
		return infodao.countMarkedList();
	}
}
