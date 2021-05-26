package org.web.persistence;

import java.util.List;

import org.web.domain.InfoVO;
import org.web.domain.PageVO;

public interface InfoDAO {
	public void createInfo(InfoVO vo) throws Exception;
	public List<InfoVO> readInfoList(int page) throws Exception;
	public void delete(int id) throws Exception;
	public InfoVO readInfo(int id) throws Exception;
	public void updateMark(int id) throws Exception;
	public void updateUnMark(int id) throws Exception;
	public List<InfoVO> readMarkedList(int page) throws Exception;
	public int countList() throws Exception;
	public int countMarkedList() throws Exception;
}
