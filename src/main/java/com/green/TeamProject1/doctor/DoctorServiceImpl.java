package com.green.TeamProject1.doctor;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("doctorService")
public class DoctorServiceImpl implements DoctorService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public DoctorVO getOneDoc(DoctorVO doctorVO) {
        return sqlSession.selectOne("doctorMapper.getOneDoc", doctorVO);
    }
}
