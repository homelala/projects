package org.web.persistence;

import org.web.domain.UserVO;

public interface UserDAO {
	public UserVO checkID(String email) throws Exception;
}
