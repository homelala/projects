package org.web.persistence;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.web.domain.UserVO;

@Component
public class UserDAOImpl implements UserDAO{

	@Autowired
	private SqlSession sqlSession;
	
	private static final String namespace = "org.web.mapper.UserMapper";
	
	@Override
	public UserVO checkID(String email) throws Exception {
		UserVO user = sqlSession.selectOne(namespace + ".logIn",email);
		return user;
	}

	
}
