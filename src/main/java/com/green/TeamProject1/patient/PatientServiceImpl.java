package com.green.TeamProject1.patient;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("patientService")
public class PatientServiceImpl implements PatientService{
    @Autowired
    private SqlSessionTemplate sqlSession;


    @Override
    public List<PatientVO> getPatListWhereEmail(String citizenNum) {
        return sqlSession.selectList("patientMapper.getPatientList", citizenNum);
    }

    @Override
    public List<PatientVO> getPatListAll(int patNum, String treDate) {
        Map<String, Object> params = new HashMap<>();
        params.put("patNum", patNum);
        params.put("treDate", treDate);
        return sqlSession.selectList("patientMapper.getPatListAll", params);
    }

    @Override
    public List<TreatVO> getTreatListWhenPatOne(int patNum) {
        return sqlSession.selectList("patientMapper.getOneTreList", patNum);
    }

    @Override
    public List<PatientVO> getWaitPatientList() {
        return sqlSession.selectList("patientMapper.getWaitPatientList");
    }
}
