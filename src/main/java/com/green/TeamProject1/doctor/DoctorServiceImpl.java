package com.green.TeamProject1.doctor;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("doctorService")
public class DoctorServiceImpl implements DoctorService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public DoctorVO getOneDoc(int docLinum) {
        return sqlSession.selectOne("doctorMapper.getOneDoc", docLinum);
    }

    @Override
    public List<DoctorVO> getAllDoc() {
        return sqlSession.selectList("doctorMapper.getAllDoc");
    }


    // 진료과 정보 얻어오기
    @Override
    public List<MediDeptVO> getMediDept() {
        return sqlSession.selectList("doctorService.getMediDept");
    }


}
