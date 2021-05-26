package org.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web.domain.UserVO;
import org.web.persistence.UserDAO;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDAO userdao;
	
	public UserVO checkID(String email) throws Exception {
		System.out.println("vo");
		return userdao.checkID(email);
	}
}
