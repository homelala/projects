package org.web.service;

import org.web.domain.UserVO;

public interface UserService {
	public UserVO checkID(String email) throws Exception;
}
