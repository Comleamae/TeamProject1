package com.green.TeamProject1.desk;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("deskService")
public class DeskServiceImpl implements DeskService{
    @Autowired
    private SqlSessionTemplate sqlSession;

}
