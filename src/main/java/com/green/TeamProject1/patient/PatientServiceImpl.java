package com.green.TeamProject1.patient;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("patientService")
public class PatientServiceImpl implements PatientService{
    @Autowired
    private SqlSessionTemplate sqlSession;


    @Override
    public List<PatientVO> getPatListWhereEmail(String citizenNum) {
        return sqlSession.selectList("patientMapper.getPatientList", citizenNum);
    }

    @Override
    public List<PatientVO> getPatListAll(int patNum) {
        return sqlSession.selectList("patientMapper.getPatListAll", patNum);
    }

    @Override
    public List<TreatVO> getTreatListWhenPatOne(int patNum) {
        return sqlSession.selectList("patientMapper.getOneTreList", patNum);
    }
}
